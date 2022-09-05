import Link from 'next/link';
import { Button } from '@mui/material';
import { FC } from 'react';

interface NavItemInterface {
  href: string;
  label: string;
}

const NavigationItem: FC<NavItemInterface> = (props) => {
  return (
    <Link href={props.href}>
      <Button variant="text" sx={{color: "white"}}>
        {props.label}
      </Button>
    </Link>
  );
};

export default NavigationItem;
