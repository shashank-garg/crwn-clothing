import React from 'react'
import Homepage from './page/homepage/Homepage'
import {Switch,Route} from 'react-router-dom';
import Shop from './page/shop/Shop';
import './App.css';
function App() {
  return (
    <div>
    
     <Switch>
     <Route  exact path='/' component={Homepage}/>
      <Route  exact path='/shop' component={Shop}/>
     </Switch>
    </div>
  )
}

export default App
