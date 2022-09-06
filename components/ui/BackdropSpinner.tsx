import { Backdrop, CircularProgress } from '@mui/material';
import React, { FC, Fragment, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

interface BackdropSpinner {
  open: boolean,
  onClick: () => void
}

const BackdropSpinner: FC<BackdropSpinner> = (props) => {
  const backdropEl = (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.open}
      onClick={props.onClick}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );

  const node = document.getElementById("backdrop");
    if(!node) {
      return <Fragment></Fragment>;
    }

  return createPortal(backdropEl, node);
};

export default BackdropSpinner;
