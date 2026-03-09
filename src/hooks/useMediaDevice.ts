import { useMediaQuery } from "@custom-react-hooks/use-media-query";

export const useMediaDevice = () => {
  const isDesktop = useMediaQuery("(min-width:640px)");
  const containerClassName = "container mx-auto px-4 py-6 sm:px-6 lg:px-8";

  return { isDesktop, containerClassName };
};
