import { Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container sx={{ mt: { xs: '5px', sm: '20px' } }}>
      <Typography component="h1" variant="h2" sx={{ textAlign: 'center' }}>
        Welcome to the Phonebook! To start managing contacts, please log in or
        register.
      </Typography>
    </Container>
  );
};

export default HomePage;
