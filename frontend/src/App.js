import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRouters from './customer/Routes/CustomerRouters';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}/>
      </Routes>
    </div>
  );
}

export default App;
