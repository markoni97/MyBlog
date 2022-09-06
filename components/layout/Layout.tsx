import { Box, CssBaseline } from '@mui/material';
import { FC, Fragment, ReactNode } from 'react';
import Navigation from '../nav/Navigation';
import BackdropComponent from '../ui/Backdrop';
import { useAppSelector } from '../../hook/hooks';

const Layout: FC<{ children: ReactNode }> = (props) => {
const visible = useAppSelector(store => store.ui.visible);

  return (
    <Fragment>
      <CssBaseline />
      <Navigation />
      <BackdropComponent
        open={visible}
        onClick={() => console.log('Clicked')}
      />
      <Box sx={{ height: '100%', paddingTop: '4rem' }} component="main">
        {props.children}
      </Box>
    </Fragment>
  );
};

export default Layout;
