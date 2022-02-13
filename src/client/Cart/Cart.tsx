import CartItem from './CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../App';
import Button from '@material-ui/core/Button';
import useLocalStorage from './useLocalStorage';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

const [state, setState]=useLocalStorage('Test',[] as any);

  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
     
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
       <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      <div className='buttons'>
        <Button
          size='small'
          disableElevation
          variant='contained'
          data-cy="add-purchase"
          onClick={()=>setState(cartItems)}
        >
          Purchase  {state.length} cheeses
        </Button>
        </div>
      
    </Wrapper>
  );
};

export default Cart;
