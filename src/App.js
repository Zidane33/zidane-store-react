import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import Shop from './pages/Shop/Shop';
import Header from './components/header/Header';
import SignIn from './pages/SignIn/SignIn';
import { auth, createUserDocument } from './firebase/firebaseUtil';
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
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user){
                const userRef = await createUserDocument(user);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data(),
                        }
                    })
                })
            }

            else {
                this.setState({ currentUser: user })
            }
        })
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
