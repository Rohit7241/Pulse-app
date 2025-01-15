import React ,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import  Loading  from './loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=> { 
  const [articles,setarticles]=useState([]);
  const [loading,setloading]=useState(false);
  const [page,setpage]=useState(1);
  const [totalResults,settotalResults]=useState(0);
  const capitalize=(string)=>{
   return string.charAt(0).toUpperCase()+string.slice(1);
  }
 // document.title=(props.category==="general")?`${props.title}-PulseNews`:`${this.capitalize(props.category)}-PulseNews `

  const updatenews=(async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=12`;
    props.setprogress(30);
    setloading(true);
    let data=await fetch(url);
    props.setprogress(50);
    let parseddata=await data.json();
    props.setprogress(70);
    setarticles(articles.concat(parseddata.articles));
    setloading(false);
    settotalResults(parseddata.totalResults);
    props.setprogress(100);
   })

   useEffect(() => {
    updatenews();
  }, []);


  const fetchMoreData=async()=>{
   setpage(page+1);
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=12`;
    setloading(true);
    let data=await fetch(url);
    let parseddata=await data.json();
    setarticles(articles.concat(parseddata.articles));
    setloading(false);
    settotalResults(parseddata.totalResults);
   }
   


    let {mode}=props
    // const handlenext=async ()=>{
    //   let page=this.state.page+1;
    // this.setState({page:this.state.page+1})
    // let url= `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}}&page=${page}&pagesize=12`;
    // this.setState({loading:true})
    // await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
    // let data=await fetch(url);
    // let parseddata=await data.json();
    // this.setState({article:parseddata.articles,loading:false})
    // }

    // const handleprev = async () => {
    //   let page = this.state.page - 1;
    //   this.setState({ page: this.state.page - 1 });
    //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}}&page=${page}&pagesize=12`;
    //   this.setState({ loading: true });
    //   await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
    //   let data = await fetch(url);
    //   let parseddata = await data.json();
    //   this.setState({ article: parseddata.articles, loading: false });
    // };
  
    
    //filter function
    const filteredArticles = articles.filter((article) => {
      return !(article.title === "[Removed]");
    });
    return (
     <div>
      <h1 className='mt-5 text-center'>{props.title==="HOME"?`Pulse Headlines`:`${capitalize(props.category)} News`}</h1>
      
       <InfiniteScroll
         dataLength={articles.length}
         next={fetchMoreData}
         hasMore={articles.lenghth!==totalResults}
         loader={loading&&<Loading/>}
       >
         <div className="container">
       <div className='row md-4'>
      
       {filteredArticles.map((element)=>{
       return <div className='d-flex justify-content-center col my-2'>
          <NewsItem title={element.title.slice(0,90)}  imgUrl={element.urlToImage?element.urlToImage:"https://www.alamy.com/blog/wp-content/uploads/2016/11/E4G70X-1024x683.jpg"} URL={element.url} 
          date={element.publishedAt} mode={mode} source={element.source.name}/>
          </div>
        })}
         </div>
         </div>
        
          </InfiniteScroll>
     
      
       {/* <div className='d-flex justify-content-between my-3'>
       <button disabled={this.state.page===1} type="button" onClick={handleprev} className="btn btn-primary">&larr;Previous</button>
       <button disabled={this.state.page>this.state.totalResults/12}type="button" onClick={handlenext} className="btn btn-primary">Next&rarr;</button>
       </div> */}
       </div>
      
    )
  }


export default News
