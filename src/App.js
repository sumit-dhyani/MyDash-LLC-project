import React, { useState } from 'react';
import './App.scss';
import Left from "./components/Left/Left"
import Right from './components/Right/Right';
import  { drawChart } from './components/Barchart/barchart'
const dataset = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30]
]
var i = 0;

function App() {
  const [isloggedin,setisloggedin]=useState(false);

  const changeChart =() =>{
        drawChart(400, 600, dataset[i++]);
        if(i === dataset.length) i = 0;
  }
  const changestate=()=>{
    console.log(isloggedin)
    setisloggedin(true);
  }

  if(!isloggedin){
  return (
    <div className="App">
      <Left/>
      <Right setlogin={changestate}/>
    </div>
  );
  }
  else {
    return(
    <div className="App">
            <div className='heading'>
            <h2>Graphs with React</h2>
            <button onClick={changeChart}>Change Data</button>
            </div >

            <div id="chart">
            </div>
        </div>
    )
  }
}

export default App;
