import { Route, Routes } from 'react-router'
import About from './About'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import PageNotFound from './PageNotFound'
// import './App.css'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  )
}

export default App

