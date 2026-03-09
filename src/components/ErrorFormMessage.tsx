type ErrorFormMessageProps = {
  message: string;
  showMessage: boolean;
};

export const ErrorFormMessage = ({
  message,
  showMessage,
}: ErrorFormMessageProps) => (
  <>
    {showMessage && (
      <p className="text-xs sm:text-sm text-red-500 mt-1 ml-1">{message}</p>
    )}
  </>
);
