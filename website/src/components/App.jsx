import React from 'react'

// Components
import Navigation from './templates/Navigation'
import Routes from './Routes'
import Footer from './templates/Footer'

const App = () => {
  return (
    <>
      <div className="container template">
        <Navigation />
        <Routes />
      </div>
      <Footer />
    </>
  )
}

export default App
