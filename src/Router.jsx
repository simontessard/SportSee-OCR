import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Error from './pages/Error'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/user/:id" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
