import React,{ useContext } from 'react'
import {food} from './Components/Apifoods'
const Foods = () => {
    const [dataCric, setDataCric] = useContext(food);
    return (
      <>
      <div className="contentPage">
        
        {dataCric.map((item) => {
          return (
            <a href={item.url}>
              <div className="card">
                <img src={item.urlToImage} alt="FoodImg" width='320px' height='210px;' />
                <h4>{item.title}</h4>
                <hr />
                <p>{item.description}</p>
              <p>{item.author}{item.publishedAt}</p>
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
  
  export default Foods