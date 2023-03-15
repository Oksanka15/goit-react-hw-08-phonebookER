import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Button, Container, TextField } from '@mui/material';
import { Form } from './LoginForm.styled';
import { logIn } from 'redux/auth/operation';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })

      
    )
   
    form.reset();
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: { xs: '5px', sm: '20px' },
      }}
    >
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main', justifyContent: 'center' }}>
            <LockOutlinedIcon />
          </Avatar>
        
        <Form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            label="email"
            variant="outlined"
            type="email"
            name="email"
            required
          />

          <TextField
            label="password"
            variant="outlined"
            type="password"
            name="password"
            required
          />

          <Button
            sx={{ mt: '10px' }}
            color="primary"
            variant="text"
            type="submit"
          >
            Login{' '}
          </Button>
        </Form>
      </Box>
    </Container>
  );
};