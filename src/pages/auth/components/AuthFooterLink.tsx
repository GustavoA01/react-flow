import { Link } from 'react-router-dom';

type AuthFooterLinkPropsType = {
  prompt: string;
  to: string;
  label: string;
};

export const AuthFooterLink = ({
  prompt,
  to,
  label,
}: AuthFooterLinkPropsType) => (
  <>
    {prompt}{' '}
    <Link
      to={to}
      className="text-primary font-medium underline-offset-4 hover:underline transition-all duration-100"
    >
      {label}
    </Link>
  </>
);
