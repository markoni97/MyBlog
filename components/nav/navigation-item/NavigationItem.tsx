import { Button, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

import classes from './NavigationItem.module.scss';

interface NavItemInterface {
  href: string;
  label: string;
}

const NavigationItem: FC<NavItemInterface> = (props) => {
  return (
    // <li className={classes["link"]}><Link href={props.href}>{props.label}</Link></li>
    <Button sx={{color: "black"}}>
      <Link href={props.href}>{props.label}</Link>
    </Button>
  );
};

export default NavigationItem;
