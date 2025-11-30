import { useMediaQuery } from "@custom-react-hooks/use-media-query"

export const useMediaDevice = () => {
  const isDesktop = useMediaQuery("(min-width:640px)")
  
  return { isDesktop }
}