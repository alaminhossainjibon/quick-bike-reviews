import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Product></Product>
      <Reviews></Reviews>
      <Button></Button>
    </div>
  );
}

export default App;
