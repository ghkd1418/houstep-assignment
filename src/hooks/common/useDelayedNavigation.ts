import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useDelayedNavigation = (targetPath: string, delay = 3000) => {
  const router = useRouter()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push(targetPath)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [router, targetPath, delay])
}

export default useDelayedNavigation
