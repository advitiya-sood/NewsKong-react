import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'


export default class News extends Component {
  

  static defaultProps={
    country:'in',
    pageSize:'5',
    category:'general'

  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string
  }
    
    constructor(){
        super();

        this.state={
            articles:[],
            loading:true,
            page:1,
            totalResults:0
            
        }
      }

   async updateInfo(){
    this.setState({loading:true})
    let apiUrl=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=9cc5f4939e2e40eca31f3984162a3dfb&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data= await fetch(apiUrl);
    let parsedData= await data.json()
    this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults,loading:false})
   }   

   async componentDidMount(){
    this.updateInfo()
    }

    handleNext=async()=>{
      this.setState({page:this.state.page+1})
      this.updateInfo()
    }

    handlePrevious=async()=>{
      this.setState({page:this.state.page-1})
      this.updateInfo()

    }

  render() {
    return (
      <div>
        <div className='container my-3'>
        <h2 className='text-center' style={{margin:'30px 0px'}}>MonkeyKong:   Top HeadLines</h2>
         <h3 className='text-center my-3'>{this.props.capital(this.props.category)}</h3>               {/* capital function in app.js    */}

        {this.state.loading && <Spiner/>}
        <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=>{ 
          return  <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,100):""} url={element.url}
                date={element.publishedAt} author={element.author} source={element.source.name}
                imageUrl={element.urlToImage?element.urlToImage:"https://www.androidauthority.com/wp-content/uploads/2022/11/Samsung-Apple-on-the-fence-commercial.jpg"}/>
                </div>                       
            })}
            </div>
            <div className="d-flex justify-content-between">
            <button  disabled={this.state.page<=1} type="button" className="btn btn-light" onClick={this.handlePrevious}>&laquo; Previous</button>
            <button  disabled={this.state.page>this.state.totalResults/(this.props.pageSize)}type="button" className="btn btn-light" onClick={this.handleNext}>Next &raquo;</button>
            </div>
        </div>

      </div>
    )
  }
}
