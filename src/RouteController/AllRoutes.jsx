import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../Routes/HomePage'
const AllRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" Component={HomePage}></Route>
        </Routes>
    </Router>
  )
}

export default AllRoutes