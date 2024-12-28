import React from 'react';
import { Routes,Route } from 'react-router-dom'
import './App.css';
import LandingPage from './stores/pages/LandingPage'
import BooksPage from './stores/pages/BooksPage'
import AcPage from './stores/pages/AcPage'
import LaptopsPage from './stores/pages/LaptopsPage'
import SmartphonesPage from './stores/pages/SmartphonesPage'
import WomenswearPage from './stores/pages/WomenswearPage';
import WatchesPage from './stores/pages/WatchesPage';
import AcSingle from './stores/singles/AcSingle'; 
import UserCart from './stores/UserCart';
import BooksSingle from './stores/singles/BooksSingle';
import LaptopsSingle from './stores/singles/LaptopsSingle';
import SmartphonesSingle from './stores/singles/SmartphonesSingle';
import WatchesSingle from './stores/singles/WatchesSingle';
import MenswearSingle from './stores/singles/MenswearSingle';
import MenswearPage from './stores/pages/Menswear';
import WomenswearSingle from './stores/singles/WomenswearSingle';
import AccessoriesPage from './stores/pages/AccessoriesPage';
import AccessoriesSingle from './stores/singles/AccessoriesSingle';
const App = () =>{
  return (
    <div>
      <Routes>

      
      <Route path='/' element = { <LandingPage />}/>
      <Route path='/watches' element = { <WatchesPage />}/>
      <Route path='/books' element = { <BooksPage />}/>
      <Route path='/accessories' element = { <AccessoriesPage />}/>
      <Route path='/ac' element = { <AcPage />}/>
      <Route path='/laptops' element = { <LaptopsPage />}/>
      <Route path='/menswear' element = {<MenswearPage/>} />
      <Route path='/smartphones' element = { <SmartphonesPage />}/>
      <Route path='/womenswear' element = { <WomenswearPage />}/>
      <Route path ='/ac/:id' element = { <AcSingle />}/>
        <Route path = '/cart' element = {<UserCart/>} />
        <Route path = '/books/:id' element = {<BooksSingle/>} />
        <Route path = '/laptops/:id' element = {<LaptopsSingle/>} />
        <Route path = '/smartphones/:id' element = {<SmartphonesSingle/>} />
        <Route path = '/watches/:id' element = {<WatchesSingle/>} />
        <Route path='/menswear/:id' element = {<MenswearSingle/>} />
        <Route path='/womenswear/:id' element = {<WomenswearSingle/>}/>
        <Route path='/accessories/:id' element = {<AccessoriesSingle/>}/>
        
        
      </Routes>
  
    </div>
  )
}
export default App