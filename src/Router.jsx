import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Error from './pages/Error'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/user/:id" element={<Home />} />
        <Route path="*" element={<Error text="Erreur : Page introuvable" />} />
        <Route path="/error" element={<Error text="Erreur : utilisateur introuvable" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
