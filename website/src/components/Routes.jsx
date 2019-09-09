import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

// Components
import Projects from './pages/Projects'
import SendProject from './pages/SendProject'
import Contact from './pages/Contact'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Projects} />
      <Route path='/enviar-proyecto' component={SendProject} />
      <Route path='/contactanos' component={Contact} />
      <Route component={() => <span className="column-12">Error 404 :( - <Link to="/" className="text-light bg-tertiary">Salir de aqui</Link> </span>} />
    </Switch>
  )
}

export default Routes
