import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

// Pages

import CreateUser from './components/pages/CreateUser/CreateUser'


// Pages
import NavBar from './components/layout/navbar/NavBar'
import Home from './components/pages/Home/Home'
import NextConsultation from './components/pages/NextConsultation/NextConsultation'
import Footer from './components/layout/footer/Footer'
import Login from './components/pages/Login/Login'

function App() {


  return (
    <div className="App">

      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cadastro' element={<CreateUser />} />
          <Route path='minhasconsultas' element={<NextConsultation />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </Router>
      <Footer />


    </div>
  )
}

export default App
