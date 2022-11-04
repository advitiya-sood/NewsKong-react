import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  
    
    constructor(){
        super();

        this.state={
            articles:[],
            loading:false
        }
      }

   async componentDidMount(){
        let apiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=9cc5f4939e2e40eca31f3984162a3dfb"
        let data= await fetch(apiUrl);
        let parsedData= await data.json()
        this.setState({articles:parsedData.articles})

    }


  render() {
    return (
      <div>
        <div className='container my-3'>
        <h3 className='my-5'>MonkeyKong:   Top HeadLines</h3>
            <div className='row'>
        {this.state.articles.map((element)=>{ 
          return  <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,100):""} url={element.url}
                imageUrl={element.urlToImage?element.urlToImage:"https://www.androidauthority.com/wp-content/uploads/2022/11/Samsung-Apple-on-the-fence-commercial.jpg"}/>
                </div>             
            })}
            </div>
        </div>

      </div>
    )
  }
}
