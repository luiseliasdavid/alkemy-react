import {Routes, Route } from 'react-router-dom'
 import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/Login";
import Listado from './components/Listado'
import Header from './components/Header';
import Footer from './components/Footer';
import Detalle from './components/Detalle'
import Resultados from './components/Resultados';
import './App.css'

function App() {
  const addOrRemoveFromFavs =e =>{
    const btn = e.currentTarget;
    const parent = btn.parentElement
    const imageUrl= parent.querySelector('img').getAttribute('src')

    console.log((imageUrl))
  }

  return (
    <div className='container'>
    <Header/>
  
    <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route path='/listado' element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />
      <Route path='/detalle' element={<Detalle/>} />
      <Route path='/resultados' element={<Resultados/>} />

     </Routes>
     
     <Footer/>
     </div>
  );
}

export default App;
