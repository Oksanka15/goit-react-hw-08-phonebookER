import ContactForm from 'components/PhoneBook/ContactForm/ContactForm ';
import { ContactsList } from 'components/PhoneBook/ContactList/ContactsList';
import { Filter } from 'components/PhoneBook/Filter/Filter';


import { Wrapper } from './Contacts.styled';

const ContactsPage = () => {
  return (
    <Wrapper sx={{ mt: { xs: '5px', sm: '20px' } }}>
      <ContactForm />
      <Filter />
      <ContactsList />
    </Wrapper>
  );
};
export default ContactsPage;