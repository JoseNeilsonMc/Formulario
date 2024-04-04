import { useState } from 'react'
import './App.css'
import  MyForm  from './components/MyForm.jsx'


function App() {
 

  return (
    
    <>
      <h1>Formulario em React</h1>
        <MyForm user={{ name: "Neilson", email: "neilsonvlcdn@gmail.com"}}/>
      
      
    </>
  )
}

export default App;
