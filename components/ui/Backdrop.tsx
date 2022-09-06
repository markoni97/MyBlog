import React, { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useAppDispatch } from '../../hook/hooks';
import { uiActions } from '../../store/ui-store/ui-slice';

interface BackdropSpinner {
  open: boolean;
  onClick: () => void;
}

const BackdropComponent: FC<BackdropSpinner> = (props) => {
  const dispatch = useAppDispatch();

  const backdropCloseHandler = () => {
    dispatch({ type: uiActions.hideModal });
  };

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.open}
      onClick={backdropCloseHandler}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default BackdropComponent;
