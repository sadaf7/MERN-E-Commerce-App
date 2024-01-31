const Category = require("../models/CategoryModel");
const Product = require("../models/productModel");



async function createProduct(reqData){
    try {
        let topLevel = await Category.findOne({name: reqData.topLevelCategory})
        if(!topLevel){
            topLevel = new Category({
                name : reqData.topLevelCategory, 
                level: 1
            })
            await topLevel.save();
        }

        let secondLevel = await Category.findOne({
            name:  reqData.secondLevelCategory,
            parentCategory: topLevel._id
        });
        if(!secondLevel){
            secondLevel= new Category({
                name : reqData.secondLevelCategory,
                parentCategory:  topLevel._id,
                level: 2
            });

            await topLevel.save();
        }

        let thirdLevel = await Category.findOne({
            name: reqData.thirdLevelCategory,
            parentCategory: secondLevel._id
        });
        if(!thirdLevel){
            thirdLevel = new Category({
                name : reqData.thirdLevelCategory,
                parentCategory: secondLevel._id,
                level: 3
            })
            await thirdLevel.save();
        }

        const product = new Product({
            title: reqData.title,
            color: reqData.color,
            price: reqData.price,
            description: reqData.description,
            discountedPrice: reqData.discountedPrice,
            discountedPercent: reqData.discountedPercent,
            sizes: reqData.size,
            brand: reqData.brand,
            imageUrl: reqData.imageUrl,
            category: thirdLevel._id,
            quantity: reqData.quantity
        })
         const saveProduct = await product.save();
         return saveProduct;
    } catch (error) {
        throw new Error(error.message)
    }
}

async function deleteProduct(productId){
    try {
        const product = await findProductById(productId);
        await Product.findByIdAndDelete(product._id);

        return 'Product deleted successfully'
    } catch (error) {
        throw new Error(error.message)
    }
}

async function updateProduct(productId,reqData){
    try {
         return await Product.findByIdAndUpdate(productId,reqData);
    } catch (error) {
        throw new Error(error.message)
    }
}

async function findProductById(productId){
    try {
        const product = await Product.findById(productId)
                        .populate('category').exec();

        if(!product){
            throw new Error('Product not found!'+productId)
        }else{
            return product;
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

async function getAllProduct(reqQuery){{
    try {
        let {category,color,sizes,minPrice,maxPrice,minDiscount,sort,stock,pageNumber,pageSize} = reqQuery;

        pageSize = pageSize || 10;

        let query = Product.find().populate('category');

        if(category){
            const existCategory = await Category.findOne({name: category});
            if(existCategory){
                query = query.where('category').equals(existCategory._id)
            } else{
                return {content: [], currentPage: 1, totalPages:0}
            }
        }

        if(color){
            const colorSet = new Set(color.split(',').map(color=>color.trim().toLowerCase()))
            const colorRegex =  colorSet.size>0?new RegExp([...colorSet].join('|'),'i'):null; // RegExp --> is color exist

            query = query.where('color').regex(colorRegex)
        }
        if(sizes){
            const sizesSet = new Set(sizes);
            query = query.where('sizes.name').in(sizesSet)
        }
        if(minPrice && maxPrice){
            query = query.where('discountedPrice').gte(minPrice).lte(maxPrice)
        }
        if(minDiscount){
            query = query.where('discountedPercent').lte(minDiscount)
        }
        if(stock){
            if(stock == 'in_stock'){
                query = query.where('quantity').gte(0)
            } else if(stock == 'out_of_stock'){
                query = query.where('quantity').lte(0)
            }
        }
        if(sort){
            const sortDirection = sorr === 'price_hight'?-1:1  //if price _high then desc otherwise asc
            query = query.sort({discountedPrice: sortDirection})
        }

        // after performing all task how many products we got
        const totalProducts = await Product.countDocuments(query);

        const skip = (pageNumber-1)*pageSize;

        query = query.skip(skip).limit(pageSize)

        const products = await query.exec();

        // totalProducts=50,perPage->10Products --> 50/10= 5pages
        const totalPages = Math.ceil(totalProducts/pageSize)

        return {content: products, currentPage: pageNumber, totalPages}
    } catch (error) {
        throw new Error(error.message)
    }
}}

async function createMultipleProducts(products){
    for(let product of products){
        await createProduct(product)
    }
}

module.exports = {createProduct,deleteProduct,updateProduct,findProductById,getAllProduct,createMultipleProducts}