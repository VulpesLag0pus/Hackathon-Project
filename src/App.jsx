import { useState } from 'react'
import Footer from './Footer.jsx' 
import Sidebar from './Sidebar.jsx'
import Pillbox from './Pillbox.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  let MenuItems = [{path: './Coffee.gbl', name: 'Coffee', price: '4,95'}, {path: './IceCoffee.gbl', name: 'Ice Coffee', price: '5,95'}, {path: './CafeLatte.gbl', name: 'Latte', price: '5,50'}, {path: './BobaTea.gbl', name: 'Boba Tea', price: '6,50'}, {path: './BubbleTeaCookies.glb', name: 'Bubble Tea + Cookie', price: '6,95'}, {path: './BobaTea.gbl', name: 'Boba Tea', price: '6,50'}, {path: './Desserts.glb', name: 'Desserts', price: '7,95'}]
  return (<div>    
    <Sidebar/>
    <section></section>
    <Pillbox/>
    </div>

  )
}

export default App
