import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/user/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
