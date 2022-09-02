import { Box, CssBaseline } from '@mui/material';
import Head from 'next/head';
import { FC, Fragment, ReactNode } from 'react';
import Navigation from '../nav/Navigation';

interface LayoutInterface {
  children: ReactNode;
}

const Layout: FC<LayoutInterface> = (props) => {
  return (
    <Fragment>
      {/* <Head  <meta name="viewport" content="initial-scale=1, width=device-width" />
/> */}
      <CssBaseline />
      <Navigation />
      <Box sx={{ height: '100%', paddingTop: '4rem' }} component="main">
        {props.children}
      </Box>
    </Fragment>
  );
};

export default Layout;
