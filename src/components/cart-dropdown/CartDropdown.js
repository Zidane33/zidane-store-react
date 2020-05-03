import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import CustomButton from '../button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart-selector';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import './cart-dropdown.styles.scss';

const Cart = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
                cartItems.length
                  ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
                  : <span className="empty-message">Your cart is empty</span>
            }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(Cart));
