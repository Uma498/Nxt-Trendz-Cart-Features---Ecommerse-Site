import CartContext from '../../context/CartContext'

import './index.css'

const CartSummery = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0

      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summery-bg-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order total: </span>Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-button d-sm-none">
              Checkout
            </button>
            <button type="button" className="checkout-button d-lg-none">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummery
