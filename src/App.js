import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/Homepage/HomePage';
import Shop from './pages/Shop/Shop';
import Header from './components/header/Header';
import SignIn from './pages/SignIn/SignIn';
import Checkout from './pages/Checkout/Checkout';
import { auth, createUserDocument } from './firebase/firebaseUtil';
import setCurrentUser from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';
import './App.css';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
      const { setCurrentUser } = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
        if (user) {
          const userRef = await createUserDocument(user);

          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        } else {
          setCurrentUser(user);
        }
      });
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

    render() {
      return (
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/signin" render={() => (this.props.currentUser ? (<Redirect to="/" />) : <SignIn />)} />
          </Switch>
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
