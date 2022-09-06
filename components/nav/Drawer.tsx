import { Drawer, List } from '@mui/material';
import React, { FC } from 'react';
import DrawerItem from './DrawerItem';

interface DrawerNav {
  mobileOpen: boolean;
  toggleDrawerHandler: () => void;
}

const DrawerNav: FC<DrawerNav> = (props) => {
  return (
    <Drawer
      variant="temporary"
      open={props.mobileOpen}
      onClose={props.toggleDrawerHandler}
      ModalProps={{ keepMounted: true }}
      sx={{ display: { xs: 'block', sm: 'none' } }}
    >
      <List>
        <DrawerItem label="HOME" href="/" />
        <DrawerItem label="EXPLORE" href="/explore" />
        <DrawerItem label="MY POSTS" href="/" />
        <DrawerItem label="PROFILE" href="/" />
        <DrawerItem label="LOGIN" href="/auth" />
        <DrawerItem label="LOGOUT" href="/" />
      </List>
    </Drawer>
  );
};

export default DrawerNav;
