import './App.css';
import Hero from './components/hero/Hero'
import Programs from './components/programs/programs'
import Reasons from './components/reasons/reasons'
import Plans from './components/plan/Plans'
import Testmoinals from './components/testimonals/Testimonals'
import Join from'./components/join/Join'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testmoinals/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
