"use client" // this is a client component

import React, { useEffect, useRef, ReactNode } from "react"
interface Props {
  offset?: string
  children?: ReactNode
  // any props that come into the component
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef<HTMLDivElement>(null) // It's good practice to type your ref

  useEffect(() => {
    // Store ref.current in a variable to avoid issues in the cleanup function
    const element = ref.current; 

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0")
            entry.target.classList.add("animate-slideUpCubiBezier")
            // Optional: unobserve after animation to save resources
            // observer.unobserve(entry.target);
          }
        })
      },
      { rootMargin: offset }
    )

    if (element) {
      observer.observe(element)
    }

    // --- Cleanup Function ---
    // This function is called when the component is unmounted or when the effect re-runs.
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [offset]) // The dependency array now correctly includes 'offset'. 'ref' is not needed as it's stable.

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  )
}