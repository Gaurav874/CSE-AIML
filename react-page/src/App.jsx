import './App.css'
import Card from "./component/Card"
import State3 from './State3'
import ColorChange from './ColorChange'
import { BrowserRouter,Routes, Route } from "react-router-dom"
import MainLayout from './component/MainLayout'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
import Login from './component/Login'
import { useState } from 'react'

function App() {
 const[store,setstore] = useState("");
  return (
    <>
    {JSON.stringify(store)}
    {/* <State3/>
    <ColorChange/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route path="/login" element={<Login regDataLogin={store} />}></Route>
      <Route path="/registration" element={<Registration regData={setstore}/>}></Route>
      <Route path="/dash" element={<Dashboard />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
