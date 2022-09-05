import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import styles from "./Weather.module.css";

const Weather = () => {
    const data=useSelector((state)=>state.data)
    const dispatch=useDispatch()

    useEffect(()=>{
dispatch(getData(data))
    },[])
    console.log(data)
  return (
    <>
    <div className={styles.container}>
      {data?.map((ele)=>{
        return <div key={ele.language}>
          <p>{ele.location.city}</p>
          
        </div>
      })}
        
        
      <div className={styles.top}>
        <div>
          <h1>21°</h1>
          <h2>Clear</h2>
          <h2>Day 30° .Night 20°</h2>
        </div>
        <div>
        <img src="
        https://assets.stickpng.com/images/580b585b2edbce24c47b270b.png" alt="" />
        </div>
       </div>


      
    </div>
    <div className={styles.mid}>
<p>Today"s Forcase for New York City,Ny,Unites States</p>

<div className={styles.days}>
    <div>
        <p>Morning</p>
        <h1>25°</h1>
        <img src="https://previews.123rf.com/images/gorgrigo/gorgrigo1206/gorgrigo120600008/14164497-the-sun-with-sharp-rays-isolated-on-white-background.jpg" alt="" />
        <p>0%</p>
    </div>
    <div>
    <p>After Noon</p>
        <h1>30°</h1>
        <img src="https://previews.123rf.com/images/gorgrigo/gorgrigo1206/gorgrigo120600008/14164497-the-sun-with-sharp-rays-isolated-on-white-background.jpg" alt="" />
        <p>5%</p>
    </div>
    <div>
    <p>Evening</p>
        <h1>25°</h1>
        <img src="https://previews.123rf.com/images/gorgrigo/gorgrigo1206/gorgrigo120600008/14164497-the-sun-with-sharp-rays-isolated-on-white-background.jpg" alt="" />
        <p>0%</p>
    </div>
    <div>
    <p>Overnight</p>
        <h1>20°</h1>
        <img src="https://previews.123rf.com/images/gorgrigo/gorgrigo1206/gorgrigo120600008/14164497-the-sun-with-sharp-rays-isolated-on-white-background.jpg" alt="" />
        <p>--</p>
    </div>
</div>
    </div>
    
        </>
  );
};

export default Weather;
