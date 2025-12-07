import { useAnimate } from "motion/react"
import { useEffect } from "react"

export const useAnimateBg = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const animeBg = async () => {
      if (scope.current) {
        await animate(
          scope.current,
          {
            backgroundColor: ["#0284c7", "#3a6ea5", "#6128a3", "#0284c7"],
          },
          {
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }
        )
      }
    }

    animeBg()
  }, [scope, animate])

  return { scope }
}
