import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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
    
    constructor(props){
        super(props);

        this.state={
            articles:[],
            loading:true,
            page:1,
            totalResults:0
         }
         document.title=`NewsKong-${this.props.capital(this.props.category)}`
    }

   async updateInfo(){
    this.setState({loading:true})
    let apiUrl=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=9cc5f4939e2e40eca31f3984162a3dfb&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data= await fetch(apiUrl);
    let parsedData= await data.json()
    this.setState({articles:parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading:false}
      )}   

      async componentDidMount(){
        this.updateInfo()
     //  this.handleNext()
      }
    handleNext=async()=>{
      this.setState({page:this.state.page+1})
      let apiUrl=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=9cc5f4939e2e40eca31f3984162a3dfb
      &page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data= await fetch(apiUrl);
      let parsedData= await data.json()
      this.setState({articles:this.state.articles.concat(parsedData.articles), 
        totalResults:parsedData.totalResults,
        loading:false}
        )
    }
    
  render() {
    return (
      <div>
        <>
          <h2 className='text-center' style={{margin:'30px 0px'}}>MonkeyKong:   Top HeadLines</h2>
          <h3 className='text-center my-3'>{this.props.capital(this.props.category)}</h3>               {/* capital function in app.js    */}

          {this.state.loading && <Spiner/>}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.handleNext}
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={<Spiner/>}
          >
            <div className="container my-3">
              <div className='row'> 
                { this.state.articles.map((element,index)=>{ 
                  return  <div className='col-md-4' key={index}>
                        <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,100):""} url={element.url}
                        date={element.publishedAt} author={element.author} source={element.source.name}
                        imageUrl={element.urlToImage?element.urlToImage:"https://www.androidauthority.com/wp-content/uploads/2022/11/Samsung-Apple-on-the-fence-commercial.jpg"}/>
                        </div>                       
                })}
              </div>
            </div>
          </InfiniteScroll>
        </>
      </div>
    )
  }
}
