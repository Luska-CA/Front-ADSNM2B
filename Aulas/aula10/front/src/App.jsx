import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { carregarContatos, criarContato } from './services/ContatoService'

function App() {
  useEffect(()=>{
    criarContato({nome: "eu", telefone: "8888-8888"});
    console.log(carregarContatos())
  })
  return (
    <></>
  );
}

export default App