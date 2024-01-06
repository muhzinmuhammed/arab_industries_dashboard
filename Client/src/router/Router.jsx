import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App'
import Main from '../Components/Main'

const Routers = () => {
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<App />} >
        <Route index element={<Main />} />
        </Route>
      </Routes>
    </Router>
      
    </div>
  )
}

export default Routers
