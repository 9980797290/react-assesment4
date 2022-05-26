import React,{ useContext } from 'react'
import {technology} from './Components/ApiTech'

const Technology = () => {
  const [dataTech, setDataTech] = useContext(technology);
  return (
    <>
    <div className="contentPage">
      
      {dataTech.map((item) => {
        return (
          <a href={item.url}>
            <div className="card">
              <img src={item.urlToImage} alt="TechImg"  width='320px' height='200px'/>
              <p>{item.title}</p>
              <hr />
              <p>{item.description}{item.content}</p>
              <p>{item.author}{item.publishedAt}</p>
            </div></a>
        );
      })}
      </div>
      <div className="right">
        
      </div>
    </>
  )
}

export default Technology
