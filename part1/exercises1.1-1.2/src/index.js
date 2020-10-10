import React from 'react'
import ReactDOM from 'react-dom'
import Part from './components/Part'
import Header from './components/Header'
import Total from './components/Total'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header head= {course.name}/>
      <Part part ={course.parts[0]}/>
      <Part part= {course.parts[1]} />
      <Part part = {course.parts[2]} />
      <Total numExercises ={course.parts[0].exercises + course.parts[1].exercises+ course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
