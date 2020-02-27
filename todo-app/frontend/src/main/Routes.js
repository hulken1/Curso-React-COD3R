import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Todo from '../todo/Todo'
import About from '../about/About'
import paginaErr404 from '../err404/Erro404.js'

export default props => (
       <Switch>
           <Route path='/todos'  component={Todo} />
           <Route path='/about'  component={About} />
           <Route path='*' component={Todo}/>
       </Switch>
)