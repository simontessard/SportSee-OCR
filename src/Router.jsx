import { Routes, Route } from "react-router-dom"

import Home from './pages/Home/Home'
import Header from './components/Header/Header'

const Routing = () => {
  return (
    <Routes>
      <Header />
        <Route exact path="/" component={Home} />
        <Route/>
    </Routes>
  )
}

export default Routing