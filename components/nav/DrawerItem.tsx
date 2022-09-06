import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react';

interface DrawerItem {
  label: string;
  href: string;
}

const DrawerItem: FC<DrawerItem> = (props) => {
  return (
    <ListItem key={props.label} disablePadding>
      <Link href={props.href}>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText>{props.label}</ListItemText>
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default DrawerItem;
