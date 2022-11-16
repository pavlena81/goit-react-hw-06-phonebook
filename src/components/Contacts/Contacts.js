//import PropTypes from 'prop-types';
import { useDispatch, useSelector} from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

import { ListContacts, ItemContacts, Btn } from './Contacts.styled';
import { setStatusFilter } from 'redux/filterSlice';

export const FormContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(setStatusFilter);

  //const normalizedFilter = filter.toLowerCase();
  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.payload.filter.filter)
  );
  
  console.log(contactsFilter);
  console.log(filter.payload.filter.filter);

  return (
    < ListContacts >
      
      {contactsFilter.map(contact => (
        <ItemContacts key={contact.id}>
                    {contact.name}:     {contact.number}
                    <Btn type="button" onClick={()=>dispatch(deleteContacts(contact.id))}>
                      Delete
                    </Btn>
        </ItemContacts>
      )
                 
        
      )}
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