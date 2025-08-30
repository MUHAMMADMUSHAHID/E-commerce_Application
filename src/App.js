
import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/components/pages/HomePage/HomePage';
import ProductCard from './customer/components/Product/ProductCard';
function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage/> */}
        <ProductCard/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
