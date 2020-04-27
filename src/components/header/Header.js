import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebaseUtil';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/CartIcon';
import Cart from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user-selector';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
            SHOP
            </Link>
            {
                currentUser ? <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div> 
                :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
            <CartIcon />
        </div>
        { hidden ? null : <Cart />}
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
