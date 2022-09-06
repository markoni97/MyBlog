import Link from 'next/link';
import { Button } from '@mui/material';
import { FC } from 'react';
import { BtnVariant } from '../../types';

interface NavItem {
  href: string;
  label: string;
  variant?: BtnVariant;
  onClick?: () => void;
}

const NavigationItem: FC<NavItem> = (props) => {
  return (
    <Link href={props.href}>
      <Button variant={props.variant} sx={{color: "white"}} onClick={props.onClick}>
        {props.label}
      </Button>
    </Link>
  );
};

export default NavigationItem;
