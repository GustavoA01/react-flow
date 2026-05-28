export type DescriptionCircleProps = {
  right: string;
  left: string;
  className?: string;
  textColor?: string;
  fill?: string;
};

export type LogoutDialogProps = {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

export type NewButtonProps = {
  text: string;
  onClick: () => void;
};
