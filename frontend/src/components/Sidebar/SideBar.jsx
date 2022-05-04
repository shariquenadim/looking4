import React from 'react'
import {List,ListItem,ListItemText,ListItemAvatar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BackupTableIcon from '@mui/icons-material/BackupTable';


const SideBar = () => {
  return (

    <List sx={{ width: '100%', maxWidth: 360 }}>

      <ListItem  className='hoverEffect'>
        <ListItemAvatar>
            <AccountCircleIcon />
        </ListItemAvatar>
        <ListItemText primary="New Patient" />
      </ListItem>

      <ListItem className='hoverEffect'>
        <ListItemAvatar>
            <BackupTableIcon />
        </ListItemAvatar>
        <ListItemText primary="Follow Up" />
      </ListItem>

      <ListItem className='hoverEffect'>
        <ListItemAvatar>
            <InfoIcon />
        </ListItemAvatar>
        <ListItemText primary="Old Data" />
      </ListItem>

    </List>
  );
}

export default SideBar