
import * as React from "react"

/**
 * Default mobile breakpoint in pixels
 * Can be overridden by providing a value to useIsMobile
 */
export const DEFAULT_MOBILE_BREAKPOINT = 768

/**
 * Hook to detect if the current viewport is mobile width
 * 
 * @param breakpoint - Optional custom breakpoint in pixels (defaults to 768px)
 * @returns boolean indicating if viewport width is below the breakpoint
 */
export function useIsMobile(breakpoint = DEFAULT_MOBILE_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return
    }

    const mobileBreakpoint = breakpoint

    // Function to determine if the current width is mobile
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth < mobileBreakpoint)
    }
    
    // Create media query
    const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`)
    
    // Handler function for media query changes
    const handleMediaQueryChange = (): void => checkIfMobile()
    
    // Add appropriate event listener based on browser support
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaQueryChange)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleMediaQueryChange)
    }
    
    // Initial check
    checkIfMobile()
    
    // Cleanup function
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleMediaQueryChange)
      }
    }
  }, [breakpoint]) // Re-run effect if breakpoint changes

  // Return false for SSR, and the actual value once determined in the browser
  return isMobile === null ? false : isMobile
}
