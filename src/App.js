import './App.css';


import React, { Component, useState} from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {


  const [progress,setProgress]=useState(0)

    const changeProgress=(prog)=>{
       setProgress(prog)
     }

    const capital=(word)=>{
      const small = word.toLowerCase();
      return small.charAt(0).toUpperCase() + small.slice(1);
     }

  let pageSize=20
  let apiKey= process.env.REACT_APP_NEWS_API



    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        
      />
          <NavBar/>            
          <Routes>
              <Route path='/'  element={<News loadingBar={changeProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general' capital={capital} />}/>
              <Route path='/health'  element={<News loadingBar={changeProgress} apiKey={apiKey} key="health"  pageSize={pageSize} country='in' category='health' capital={capital} />}/>
              <Route path='/science' element={<News loadingBar={changeProgress} apiKey={apiKey} key="science" pageSize={pageSize} country='in' category='science' capital={capital} />}/>
              <Route path='/sports'  element={<News loadingBar={changeProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category='sports' capital={capital} />}/>
              <Route path='/entertainment' element={<News loadingBar={changeProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country='in' category='entertainment' capital={capital} />}/>
              <Route path='/technology'  element={<News loadingBar={changeProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category='technology' capital={capital} />}/>
              <Route path='/business'  element={<News loadingBar={changeProgress} apiKey={apiKey} key="business" pageSize={pageSize} country='in' category='business' capital={capital} />}/>
          </Routes>
        </Router>
      </div>
    )
  }

 export default App
