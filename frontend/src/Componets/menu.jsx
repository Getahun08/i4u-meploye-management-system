import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Link, useLocation } from 'react-router-dom';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import HomeIcon from '@mui/icons-material/Home';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import MarginOutlinedIcon from '@mui/icons-material/MarginOutlined';


export default function Menu() {
  const [open, setOpen] = React.useState(true);
  const location = useLocation();
  const path = location.pathname;
  console.log(path)
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        Employe management
        </ListSubheader>
      }
    >
      
      <ListItemButton onClick={handleClick} component={Link}to="/EmployeDetails" selected={path ==="/EmployeDetails"}>   
      <ListItemIcon>
      <GroupsOutlinedIcon sx={{ color: 'rgba(29, 24, 245, 0.85)' }} />
      </ListItemIcon>
        <ListItemText primary="Employe Details" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}
           onClick={handleClick} component={Link}to="/Departement" selected={path ==="/Departement"}>
            <ListItemIcon>
                <MarginOutlinedIcon sx={{ color: 'rgba(29, 24, 245, 0.85)' }}
                  />
            </ListItemIcon>
            <ListItemText primary="Departement " />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}onClick={handleClick} component={Link}to="/All" selected={path ==="/All"}>
            <ListItemIcon>
            < AccountBoxOutlinedIcon sx={{ color: 'rgba(29, 24, 245, 0.85)' }} />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    
  </>
  );
}
