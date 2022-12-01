import './App.css';


import React, { Component} from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

      state={
        progress:0
      }

     setProgress=(prog)=>{
       this.setState({
        progress:prog
       })
     }

     capital=(word)=>{
      const small = word.toLowerCase();
      return small.charAt(0).toUpperCase() + small.slice(1);
     }

  pageSize=20
  apiKey= process.env.REACT_APP_NEWS_API


  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        
      />
          <NavBar/>            
          <Routes>
              <Route path='/'  element={<News loadingBar={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country='in' category='general' capital={this.capital} />}/>
              <Route path='/health'  element={<News loadingBar={this.setProgress} apiKey={this.apiKey} key="health"  pageSize={this.pageSize} country='in' category='health' capital={this.capital} />}/>
              <Route path='/science' element={<News loadingBar={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country='in' category='science' capital={this.capital} />}/>
              <Route path='/sports'  element={<News loadingBar={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country='in' category='sports' capital={this.capital} />}/>
              <Route path='/entertainment' element={<News loadingBar={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country='in' category='entertainment' capital={this.capital} />}/>
              <Route path='/technology'  element={<News loadingBar={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country='in' category='technology' capital={this.capital} />}/>
              <Route path='/business'  element={<News loadingBar={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country='in' category='business' capital={this.capital} />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
 
