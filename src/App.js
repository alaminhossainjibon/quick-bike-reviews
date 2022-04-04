import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Product></Product>
    </div>
  );
}

export default App;
