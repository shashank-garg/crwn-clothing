import React from 'react'
import Homepage from './page/homepage/Homepage'
import {Switch,Route} from 'react-router-dom';
import Shop from './page/shop/Shop';
import './App.css';
import Header from './component/header/Header';
import SignAndSignup from './page/sign-signup/SignAndSignup';
import {auth} from './firebase/firebase.utils';

 class App extends React.Component{

  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

   render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
       <Switch>
       <Route  exact path='/' component={Homepage}/>
        <Route  exact path='/shop' component={Shop}/>
        <Route  exact path='/sign' component={SignAndSignup}/>
       </Switch>
      </div>
    )
   }
 
}

export default App
