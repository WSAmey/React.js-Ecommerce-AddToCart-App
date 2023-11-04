import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route,Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/NavBarPanel'
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import store from './store/store'
import { Provider } from 'react-redux';


function App() {


  return (
    
    <Provider store={store}> 

    <div className="App" style={{ width: '96%', marginLeft: 'auto', marginRight: 'auto' }}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>

    </div>
    </Provider>
  );
}

export default App;
