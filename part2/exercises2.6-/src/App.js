import React, { useState, useEffect } from 'react'
import Filter from './components/search'
import AddPeople from './components/addNewPeople'
import ShowPeople from './components/showPeople'
import axios from 'axios'

const App = () => {
  const [persons, setPersons ] = useState([
    { name: 'Arto Hellas', number:'7223' }
  ]) 
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const hook = () =>{
    axios.get('http://localhost:3001/persons')
    .then(response=>setPersons(response.data))
  }
  useEffect(hook, [])
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
  const people = filterName === ''? persons: persons.filter((personObject) => personObject.name === filterName)
  return (
    <div>
      <h2>phonebook</h2>
      <Filter filterName = {filterName} func= {handleFilter} />
      <h2>Add New</h2>
      <AddPeople newName= {newName} newNumber = {newNumber} handleNumber= {handleNumber} handleName= {handleName} addName= {addName}/>
      <h2>Numbers</h2>
      <ShowPeople peopleToRender = {people} />
    </div>
  )
}

export default App