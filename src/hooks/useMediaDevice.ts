import { useMediaQuery } from "@custom-react-hooks/use-media-query";

export const useMediaDevice = () => {
  const isDesktop = useMediaQuery("(min-width:640px)");
  const padding2XlScreens = "2xl:px-64";

  return { isDesktop, padding2XlScreens };
};
