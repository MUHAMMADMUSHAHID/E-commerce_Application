
import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/navigation';
import HomePage from './customer/components/pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
