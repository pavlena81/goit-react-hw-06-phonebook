
import { FormLabel } from './Form/Form'; 
import { Filter } from './Filter/Filter';
import { FormContacts } from './Contacts/Contacts'; 

import { Container, Box, Title, SubTitle} from 'components/App.styled';
import { FcContacts } from 'react-icons/fc';
import { FcMultipleSmartphones } from 'react-icons/fc';

export const App = () => {
  
     
 
  
  return (
    <Box>
      <Container >
          
          <Title><FcContacts />
            Phonebook          
          </Title> 
          <FormLabel/>
          
          <SubTitle><FcMultipleSmartphones/>
            Contacts
          </SubTitle>
          <Filter />
          
         <FormContacts/>  
          
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
