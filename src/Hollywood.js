import React,{useContext} from 'react'
import { hollywood } from './Components/ApiHolywood';
const Hollywood = () => {
  const [dataHolly, setDataHolly] = useContext(hollywood);
  return (
    <>
    <div className="contentPage">
      {dataHolly.map((item) => {
        return (
          <a href={item.url}>
            <div className="card">
              <img src={item.urlToImage} alt="HollyImg" width='320px' height='200px'style={{border:"2px solid black"}} />
              <p>{item.title}</p>
              <p>{item.source.name}/{item.publishedAt}</p>
              <p>{item.content}{item.description}</p>
              <hr />
            </div>
            </a>
        );
      })}
      </div>
      <div className="right">
        
      </div>
    </>
  )
}

export default Hollywood