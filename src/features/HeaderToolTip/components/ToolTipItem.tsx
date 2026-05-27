import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type ToolTipItemProps = {
  title: string;
  label: string;
  to: string;
};

export const ToolTipItem = ({
  label,
  to,
  title,
}: ToolTipItemProps & { title: string }) => (
  <Button
    variant="ghost"
    className="hover:text-white font-montserrat hover:bg-primary-dark/50 transition-all ease-in"
  >
    <Link to={to} title={title}>
      {label}
    </Link>
  </Button>
);
