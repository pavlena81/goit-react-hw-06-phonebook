//import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { filtersReducer } from 'redux/filterSlice';
//import { getContacts, getStatusFilter} from 'redux/selectors';
 
import { Label, Input } from './Filter.styled';



export const Filter = () => {

  const dispatch = useDispatch();

  //const filterStatus  = useSelector(getStatusFilter);
  //const contacts = useSelector(getContacts);
  

  // const contactsFilter = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filterStatus));
 
  //const filterList = contactsFilter();
  
  const filterContact = (e) => {
    dispatch(filtersReducer(e.currentTarget.value))
  }

   

  return (
    <Label>
      Find contacts by name
      <Input
        
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // value={contactsFilter}
        onChange={filterContact}
        
      />
    </Label>
  );
};

// Filter.propTypes = {
//     filter: PropTypes.string.isRequired,
//     filterContact: PropTypes.func.isRequired,
// };