
import { CartItemType } from '../App';
import DialogItem from './DialogItem/DialogItem';
import {DialogTitle, Dialog, DialogActions, DialogContent} from '@material-ui/core';
import Button from '@material-ui/core/Button';

type Props = {
  dialogItems: CartItemType[];
    dialogOpen:boolean;
    handleClose:() => void;
};

const Dialogs: React.FC<Props> = ({ dialogItems, dialogOpen,handleClose}) => {

  return (
    <Dialog open={dialogOpen}>
      <DialogTitle>Cheese</DialogTitle> 
      <DialogContent dividers>
      {dialogItems.map(item => (
          <DialogItem
            key={item.id}
            item={item}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Dialogs;
