import React  from 'react';
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
const Question = ({info,title}) => {
     const [showInfo,setShowInfo] =useState(false);
     
    return (
        <article className="question">
             <header>
               <h3>{title}</h3>
               <button onClick={()=>setShowInfo(!showInfo)}>{!showInfo?<AiOutlinePlus/>:<AiOutlineMinus/>}</button>
             </header>
             {showInfo && <p>{info}</p>}
        </article>
      );
}
 
export default Question;