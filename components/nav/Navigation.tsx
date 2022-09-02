import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';
import { FC, useState } from 'react';
import Button from '../ui/button/Button';
import NavigationItem from './navigation-item/NavigationItem';
import classes from './Navigation.module.scss';

const Navigation: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'HOME', link: '/' },
    { label: 'EXPLORE', link: '/' },
    { label: 'MY POSTS', link: `/` },
    { label: 'PROFILE', link: '/' },
    { label: 'LOGIN', link: '/auth' },
  ];

  const linkItems = navItems.map((item) => {
    return (
      <NavigationItem key={item.label} label={item.label} href={item.link} />
    );
  });

  const drawer = navItems.map((item) => {
    return (
      <ListItem key={item.label} disablePadding>
        <ListItemButton href='/' sx={{ textAlign: 'center' }}>
          <ListItemText >
            {item.label}
          </ListItemText>
        </ListItemButton>
      </ListItem>
    );
  });

  const toggleDrawerHandler = () => {
    setMobileOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar component="nav" sx={{backgroundColor: "#24575d", maxHeight: '4rem'}}>
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
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>{linkItems}</Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleDrawerHandler}
          ModalProps={{keepMounted: true}}
          sx={{display: {xs: "block", sm: "none"}}}
        >
          <List>{drawer}</List>
        </Drawer>
      </Box>
    </Box>

    // <nav className={classes["nav"]}>
    //   <div className={classes["nav__logo"]}>
    //     <Link href={`/`}><a>MyBLOG</a></Link>
    //   </div>
    //   <div className={classes["nav__main"]}>
    //     <ul className={classes["nav__main__links"]}>
    //       <NavigationItem label="HOME" href={`/`}/>
    //       <NavigationItem label="EXPLORE" href={`/`}/>
    //       <NavigationItem label="MY POSTS" href={`/`}/>
    //       <NavigationItem label="PROFILE" href={`/`}/>
    //     </ul>
    //     <div className={classes["nav__main__auth"]}>
    //       <Button href={`/auth`}>Login</Button>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navigation;
