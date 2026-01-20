import { useMediaDevice } from "@/hooks/useMediaDevice";
import { useRouter } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const GoBack = () => {
  const { isDesktop } = useMediaDevice();
  const router = useRouter();

  return (
    <button
      onClick={() => router.history.back()}
      className="flex gap-2 items-center select-none font-semibold hover:text-blue-100 max-sm:text-sm cursor-pointer"
    >
      <ChevronLeft size={!isDesktop ? 20 : 24} />
      <p className="hidden sm:block">Voltar</p>
    </button>
  );
};
