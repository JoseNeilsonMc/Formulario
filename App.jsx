import { useState } from 'react'
import './App.css'
import { MyForm } from './components/MyForm.jsx'
import { HeaderComponent } from './components/HeaderComponent.jsx';

function App() {
 

  return (
    <>
     <HeaderComponent />
      <h1>Formulario em React</h1>
        <MyForm />
      
      
    </>
  )
}

export default App;
