
// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './DialogItem.styles';

type Props = {
  item: CartItemType;
};

const DialogItem: React.FC<Props> = ({ item }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className='information'>
        <p><h3>Price:</h3> ${item.price}</p>
        <p><h3>Description:</h3>{item.description}</p>
        <p><h3>Category:</h3>{item.category}</p>
      </div>
    </div>
  </Wrapper>
);

export default DialogItem;
