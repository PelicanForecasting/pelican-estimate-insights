
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    variant?: "default" | "glass" | "gradient",
    animation?: "none" | "fade" | "slide-right" | "slide-left" | "scale"
  }
>(({ className, variant = "default", animation = "none", ...props }, ref) => {
  const variantClasses = {
    default: "rounded-lg border bg-card text-card-foreground shadow-sm",
    glass: "glass-card",
    gradient: "gradient-card rounded-lg shadow-sm"
  }

  const animationClasses = {
    none: "",
    fade: "animate-fade-in",
    "slide-right": "animate-slide-in-right",
    "slide-left": "animate-slide-in-left",
    scale: "animate-bounce-in"
  }

  return (
    <div
      ref={ref}
      className={cn(
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    gradient?: boolean,
    animation?: "none" | "fade" | "slide-right" | "slide-left"
  }
>(({ className, gradient = false, animation = "none", ...props }, ref) => {
  const animationClasses = {
    none: "",
    fade: "animate-fade-in",
    "slide-right": "animate-slide-in-right",
    "slide-left": "animate-slide-in-left"
  }

  return (
    <h3
      ref={ref}
      className={cn(
        "text-[20px] font-heading font-medium text-primary leading-none tracking-tight",
        gradient && "text-gradient bg-gradient-to-r from-pelican-navy to-pelican-teal",
        animationClasses[animation],
        className
      )}
      {...props}
    />
  )
})
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    animation?: "none" | "fade" | "delay"
  }
>(({ className, animation = "none", ...props }, ref) => {
  const animationClasses = {
    none: "",
    fade: "animate-fade-in",
    delay: "animate-fade-in animate-delay-200"
  }

  return (
    <p
      ref={ref}
      className={cn(
        "text-base text-muted-foreground", 
        animationClasses[animation],
        className
      )}
      {...props}
    />
  )
})
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
