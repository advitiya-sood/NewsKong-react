import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News=(props)=> {

    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [totalResults,setTotalResults]=useState(0)
    // document.title=`NewsKong-${props.capital(props.category)}`

    const updateInfo=async()=>{
      setLoading(true)
      props.loadingBar(10)
      let apiUrl=`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
      let data= await fetch(apiUrl);
      props.loadingBar(60)
      let parsedData= await data.json()
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.loadingBar(100)
    }   
          
      useEffect(()=>{
        updateInfo()
      },[])

    const handleNext=async()=>{
      let apiUrl=`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}
      &page=${page+1}&pageSize=${props.pageSize}`
      setPage(page+1)
      setLoading(true)
      let data= await fetch(apiUrl);
      let parsedData= await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setLoading(false)
    }
    console.log(page+"third")
 
    return (
      <div>
        <>
          <h2 className='text-center' style={{margin:'30px 0px', marginTop:"90px"}}>MonkeyKong:   Top HeadLines</h2>
          <h3 className='text-center my-3'>{props.capital(props.category)}</h3>               {/* capital function in app.js    */}

          {loading && <Spiner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={handleNext}
            hasMore={articles.length!==totalResults}
            loader={<Spiner/>}
          >
            <div className="container my-3">
              <div className='row'> 
                {articles.map((element,index)=>{ 
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

  News.defaultProps={
    country:'in',
    pageSize:'5',
    category:'general'

  }

  News.propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string
  }

export default News
