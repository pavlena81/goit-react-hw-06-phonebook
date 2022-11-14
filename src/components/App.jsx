// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FormLabel } from './Form/Form'; 
import { Filter } from './Filter/Filter';
import { FormContacts } from './Contacts/Contacts'; 

//import { nanoid } from "nanoid";
import { Container, Box } from 'components/App.styled';
// import { deleteContacts } from 'redux/contactsSlice';
// import { getContacts } from 'redux/selectors';

export const App = () => {
  //  const dispatch = useDispatch();
  // const delContacts = useSelector(getContacts);

  //     const[contacts, setContacts] = useState([]);
        
  //     const [filter, setFilter] = useState('');

  
  //  const addContact = ({ name, number }) => {
  //    const contact = {
  //      id: nanoid(),
  //      name,
  //      number,
  //    };
      
     
  //    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
  //      ? Notify.info('Contacts is already in list-contacts')
       
  //      : setContacts([contact, ...contacts])
          
  //    console.log(setContacts)
  //  };

  // const deleteContact = delContacts => dispatch(deleteContacts(delContacts));
  // console.log(deleteContact);
  // // const deleteContacts = id => {
  // //    setContacts(contacts.filter(contact => contact.id !== id))
  // //   };
    
  // const filterContact = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const  findContacts = () => {
    
  //   const normalisedFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalisedFilter));
  // };

  //  const handleSubmit = ( values, { resetForm }) => {
  //   console.log(values);
  //   values.id = nanoid();
  //   addContact(values);
  //   resetForm();
  // };

  //  useEffect(() => {
  //    const contacts = JSON.parse(localStorage.getItem('contacts'))
  //    if (contacts) {
  //      setContacts(contacts);
  //    }
  //  }, [])
   


  //  useEffect(() => {
  //    localStorage.setItem('contacts', JSON.stringify(contacts))
  //  }, [contacts]);


  
    return (
     <Box>
     <Container >
      <h1>Phonebook</h1> 
          <FormLabel  />
          {/* handleSubmit={handleSubmit} */}
        <h2>Contacts</h2>
          <Filter />
           {/* filter={filter} filterContact={filterContact} */}
         <FormContacts  />  
          {/* contacts={findContacts()}
            deleteContact={deleteContact */}
         </Container>
         </Box> 
   );
 }
 
  





// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
