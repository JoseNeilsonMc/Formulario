import './App.css'
import  MyForm  from './components/MyForm';


function App() {
  return (
    <div className='App'>
      <h1>Formulário em React</h1>
          <MyForm
          user={{ 
            name:"", 
            email:"", 
            bio:"", 
            role:"",
          }}/>  
    </div>
  )
}

export default App;
