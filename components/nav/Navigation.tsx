import { AppBar, Box, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';
import { FC, useState } from 'react';
import NavigationItem from './NavigationItem';
import { useSession, signOut } from 'next-auth/react';
import DrawerNav from './Drawer';

const Navigation: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data, status } = useSession();

  const toggleDrawerHandler = () => {
    setMobileOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: '#24575d', maxHeight: '4rem' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h3" component="div" color="#e6fe3d">
            <Link href={`/`}>MyBlog</Link>
          </Typography>
          <Divider />
          <IconButton
            aria-label="open drawer"
            edge="start"
            sx={{ display: { sm: 'none' } }}
            onClick={toggleDrawerHandler}
          >
            <Menu />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {data && <NavigationItem label="HOME" href="/" />}
            <NavigationItem label="EXPLORE" href="/" />
            {data && <NavigationItem label="MY POSTS" href="/" />}
            {data && <NavigationItem label="PROFILE" href="/user-profile" />}
            {!data && <NavigationItem label="LOGIN" href="/auth" />}
            {data && <NavigationItem label="LOGOUT" href="" onClick={signOut}/>}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <DrawerNav
          mobileOpen={mobileOpen}
          toggleDrawerHandler={toggleDrawerHandler}
        />
      </Box>
    </Box>
  );
};

export default Navigation;
