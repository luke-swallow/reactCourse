import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  
    
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button func = {setGood} type= {good} text= "good"/>
      <Button func = {setNeutral} type= {neutral} text= "neutral"/>
      <Button func = {setBad} type= {bad} text= "bad"/>
      {good + neutral+ bad > 0?<Statistics good = {good} neutral= {neutral} bad = {bad} /> : <p>no feedback given</p>}
    
    </div>
  )
}
const Button = (props) => {
  const feedback = (func, state) => {
    func(state +1)
  }
  return(
    <button onClick={()=>feedback(props.func, props.type)}>{props.text}</button>
  )
  
}
const Statistics = (props) => {
  const sum = props.good + props.bad + props.neutral;
  const avg= (props.good -props.bad)/sum;
  const positive = props.good/sum * 100;
  return(
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
     <Statistic text= "good" value= {props.good} />
      <Statistic text= "neutral" value= {props.neutral}/>
      <Statistic text= "bad" value= {props.bad}/>
      <Statistic text="all" value = {sum}/>
      <Statistic text="average" value = {avg}/>
      <Statistic text="positive" value = {positive}/>
      </tbody>
      </table>
    </div>
  )
}
const Statistic = (props) => {
  return(
    <tr><td>
    {props.text}: {props.value}
    </td>
  </tr>
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
