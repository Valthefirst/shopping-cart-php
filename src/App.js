import logo from './logo.svg';
import './App.css';
import { LoginSignup } from './Components/Assets/LoginSignUp/LoginSignup';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (

 <div>

   <CartProvider>
  <Home/>
  <Cart/>
</CartProvider>

 
</div>


);
}

{/* <LoginSignup/>  */}







    




export default App;

  // <>
  // <CartProvider />
  // <Home /><Cart />
  // <CartProvider />
  // </>


{/*<Router>
      <div>
        <Routes>
          <Route path="/LoginSignup" element={<LoginSignup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
  </Router>*/}