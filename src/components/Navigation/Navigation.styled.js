import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Nav = styled(Box)`
  gap: 20px;
  justify-content: space-between; ;
`;

export const NavLinkItem = styled(NavLink)`
border: 1px solid #6B8E23;
border-radius: 10px;
text-decoration: none;

padding: 10px;
box-shadow: rgb(0 0 0 / 15%) 0px 4px 4px;
background-color: #F0FFFF;
display: block;
  text-align: center;
&.active {
  background-color: #8FBC8F;
}
:hover {
  background-color: #9ACD32;
}
`;