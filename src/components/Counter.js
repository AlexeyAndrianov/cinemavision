import {useState} from "react";

function Counter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    setNum(Number(num)+1);
  };
  let decNum = () => {
    setNum(num - 1);
  }
  let resetNum = () => {
    setNum(0);
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
   return(
    <div className="input-group">
      <input type="text" value={num} onChange={handleChange}/>
      <div className="input-group-prepend">
        <button type="button" onClick={incNum}>+</button>
        <button type="button" onClick={decNum}>-</button>
        <button type="button" onClick={resetNum}>reset</button>
      </div>
    </div>
  );
}
export default Counter;