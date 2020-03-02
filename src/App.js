import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import Shop from './pages/Shop/Shop';
import Header from './components/header/Header';
import SignIn from './pages/SignIn/SignIn';
import { auth } from './firebase/firebaseUtil';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state={
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user }) });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render(){
        return (
        <div>
            <Header currentUser={this.state.currentUser}/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={Shop} />
                <Route path='/signin' component={SignIn} />
            </Switch>
        </div>
      );
    }
}

export default App;
