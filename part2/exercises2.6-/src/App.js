import React, { useState } from 'react'
import Filter from './components/search'
import AddPeople from './components/addNewPeople'

const App = () => {
  const [persons, setPersons ] = useState([
    { name: 'Arto Hellas', number:'7223' }
  ]) 
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const handleName = (event)=>{
      setNewName(event.target.value)
  }
  const handleFilter = (event) => {
      setFilterName(event.target.value)
  }
  const handleNumber = (event)=>{
    setNewNumber(event.target.value)
    }

  const addName = (event) =>{
        event.preventDefault()
        if(persons.map((obj)=>obj.name).includes(newName)){
            window.alert(`${newName} is already added to phonebook`)
            setNewName('')
        } else{
            setPersons(persons.concat({name: newName, number: newNumber}))
            setNewName('')
            setNewNumber('')
        }
       
  }
  const peopleToRender = filterName === ''? persons: persons.filter((personObject) => personObject.name === filterName)
  const people= peopleToRender.map((personObj)=> <li key = {personObj.name}>{personObj.name} {personObj.number}</li>)
  
  return (
    <div>
      <h2>phonebook</h2>
      <Filter filterName = {filterName} func= {handleFilter} />
      <h2>Add New</h2>
      <AddPeople newName= {newName} newNumber = {newNumber} handleNumber= {handleNumber} handleName= {handleName} addName= {addName}/>
      <h2>Numbers</h2>
      <ul>
          {people}
      </ul>
    </div>
  )
}

export default App