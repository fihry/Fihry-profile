import React from 'react'
import './App.css'
import Header from './components/header/header'
import Container from './components/container-box/Container'
import { BrowserRouter } from 'react-router-dom'


function App() {

    return (
      <BrowserRouter>
        <div className='bodyApp'>
            <Header/>
            <Container/>
        </div>
      </BrowserRouter>
  )
}

export default App