import { useState } from 'react'
import Footer from './Footer.jsx' 
import Sidebar from './Sidebar.jsx'
import Pillbox from './Pillbox.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  MenuItems = [{path: './Coffee.gbl', name: 'Latte', price: '4,95'}, {path: './IceCoffee.gbl', name: 'Ice Coffee', price: '5,95'}, {path: './IceCoffee.gbl', name: 'Ice Coffee', price: '5,95'}]
  return (<div>    
    <Sidebar/>
    <section></section>
    <Pillbox/>
    </div>

  )
}

export default App
