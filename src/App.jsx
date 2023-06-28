// eslint-disable-next-line no-unused-vars
import React from "react"
import Navbar from "./componentes/navBar"
import Produtos from "./componentes/Produtos"
import Footer from "./componentes/footer"
import "../src/assets/app.css"


function App() {


  return (
    <div className="App">
      <Navbar />
      <Produtos />
      <Footer />
    </div>
  )
}

export default App
