import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';

type UserMenuItemPropsType = {
  label: string;
  to: string;
};

export const UserMenuItem = ({ label, to }: UserMenuItemPropsType) => (
  <DropdownMenuItem asChild>
    <Link to={to} className="font-montserrat">
      {label}
    </Link>
  </DropdownMenuItem>
);
