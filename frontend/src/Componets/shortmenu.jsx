import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MarginOutlinedIcon from '@mui/icons-material/MarginOutlined';

import { Link, useLocation } from 'react-router-dom';

import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';


export default function ShortMenu() {
  const [open, setOpen] = React.useState(true);
  const location = useLocation();
  const path = location.pathname;
  console.log(path)
  

  return (
    <>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
      
      <ListItemButton  component={Link}to="/EmployeDetails" selected={path === '/EmployeDetails'} sx={{display:'flex',justifyContent:'center'}}>
      <ListItemIcon  sx={{display:'flex',justifyContent:'center'}}>
      <GroupsOutlinedIcon sx={{ color: 'rgba(29, 24, 245, 0.85)' }} />
      </ListItemIcon>
      </ListItemButton>

      <ListItemButton  sx={{display:'flex',justifyContent:'center'}}  component={Link}to="/Departement" 
        selected={path ==="/Emp_add"}>
    <ListItemIcon  sx={{display:'flex',justifyContent:'center'}}>
    <MarginOutlinedIcon sx={{ color: 'rgba(29, 24, 245, 0.85)' }} />
    </ListItemIcon>
    </ListItemButton>
    <ListItemButton  sx={{display:'flex',justifyContent:'center'}}  component={Link}to="/All" 
        selected={path ==="/All"}>
    <ListItemIcon  sx={{display:'flex',justifyContent:'center'}}>
    <AccountBoxOutlinedIcon sx={{ color: 'rgba(29, 24, 245, 0.85)' }} />
    </ListItemIcon>
    </ListItemButton>
    </List>
   
  </>
  );
}
