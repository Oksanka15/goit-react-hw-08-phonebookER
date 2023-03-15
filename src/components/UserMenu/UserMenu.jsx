import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Button, Typography } from '@mui/material';
import { Nav } from './UserMenu.styled';
import { logOut } from 'redux/auth/operation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Nav>
      <Typography variant="body" color="primary.contrastText">
        Welcome, {user.name}
      </Typography>

      <Button
        variant="text"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        {' '}
        Logout
      </Button>
    </Nav>
  );
};