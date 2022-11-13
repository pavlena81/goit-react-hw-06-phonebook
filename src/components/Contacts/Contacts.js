//import PropTypes from 'prop-types';
import { useDispatch, useSelector} from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { getContacts, getStatusFilter } from 'redux/selectors';
import { ListContacts, ItemContacts, Btn } from './Contacts.styled';

export const FormContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  const contactsFilter = () => {
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter))
  };
 
  const filterList = contactsFilter();
  return (
    < ListContacts >
      {/* {filterList === 0 && <h2>there isn't any contacts</h2>} */}
      {filterList.map(({ id, name, number }) => {
        
        return (
          <ItemContacts key={id}>
            {name}:     {number}
            <Btn type="button" onClick={()=>dispatch(deleteContacts(id))}>
              Delete
            </Btn>
          </ItemContacts>
        );
      })}
    </ListContacts>
  );
};



// FormContacts.propTypes = {
//      contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
   
// };