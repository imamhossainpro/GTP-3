import './App.css';
import {Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './Container';
import { Brand, CTA, Navbar} from './Components';
import Particle from './Config/Particle.config';
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Particle />
        <Navbar/>
        <Header/>
      </div>
      <div className="container">
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
