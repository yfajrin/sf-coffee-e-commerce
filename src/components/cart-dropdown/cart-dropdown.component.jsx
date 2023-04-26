import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './cart-dropdown.styles.scss'
import { CartContext } from '../../context/cart.context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'> 
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <div className='total-container'>
                Total: ${cartTotal}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown