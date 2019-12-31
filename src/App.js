import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/pages/main/Main';
import About from './components/pages/about/About';
import Help from './components/pages/help/Help';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Main}/>
            <Route path="/hakkinda" component={About}/>
            <Route path="/yardim" component={Help}/>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
