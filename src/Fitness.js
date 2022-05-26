import React,{ useContext } from 'react'
import {fitness} from './Components/ApiFitness'

const Fitness = () => {
  const [dataFit, setDataFit] = useContext(fitness);
  return (
    <>
    <div className="contentPage">
      
      {dataFit.map((item) => {
        return (
          <a href={item.url}>
            <div className="card">
              <img src={item.urlToImage} alt="FitnessImg" width='320px' height='200px' />
              <p>{item.title}</p>
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

export default Fitness