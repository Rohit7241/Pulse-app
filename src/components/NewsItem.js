import React from 'react'

const NewsItem=(props)=> {

    let {title,imgUrl,URL,date,mode,source}=props;
    let d=new Date(date);
    return (
       <div >
             
              <div className={`card bg-${mode}`} data-bs-theme={mode} style={{width: "18rem"}}>
          <img style={{height:"10rem"}}src={imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body" style={{height:"200px"}}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text"></p>
            <a href={URL} target='blank' className="btn btn-success mb-2 ">Read More</a>
            <p className="text-danger-emphasis d-flex justify-content-between align-items-end"><small className="text-body-secondary" >{source.slice(0,16)}</small><small className="text-body-secondary">{d.toDateString().slice(4,15)}</small></p>
          </div>
        </div>
       
        </div>
  
    )
  }


export default NewsItem
