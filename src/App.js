import './App.css';


import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {

     capital=(word)=>{
      const small = word.toLowerCase();
      return small.charAt(0).toUpperCase() + small.slice(1);
    }


  pageSize=12 
  render() {
    return (
      <div>
        <Router>
          <NavBar/>            
          <Routes>
              <Route path='/'  element={<News key="general" pageSize={this.pageSize} country='in' category='general' capital={this.capital} />}/>
              <Route path='/health'  element={<News key="health"  pageSize={this.pageSize} country='in' category='health' capital={this.capital} />}/>
              <Route path='/science' element={<News key="science" pageSize={this.pageSize} country='in' category='science' capital={this.capital} />}/>
              <Route path='/sports'  element={<News key="sports" pageSize={this.pageSize} country='in' category='sports' capital={this.capital} />}/>
              <Route path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country='in' category='entertainment' capital={this.capital} />}/>
              <Route path='/technology'  element={<News key="technology" pageSize={this.pageSize} country='in' category='technology' capital={this.capital} />}/>
              <Route path='/business'  element={<News key="business" pageSize={this.pageSize} country='in' category='business' capital={this.capital} />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
 
