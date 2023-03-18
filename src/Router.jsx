import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Error from './pages/Error'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/user/:id" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error text="Erreur : Page introuvable" />} />
        <Route path="/error" element={<Error text="Erreur : utilisateur introuvable" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
