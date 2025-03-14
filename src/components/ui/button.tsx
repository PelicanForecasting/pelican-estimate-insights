
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-all duration-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90 hover:translate-y-[-2px] hover:shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:translate-y-[-2px] hover:shadow-md",
        outline:
          "border border-input bg-background hover:bg-accent/5 hover:text-accent-foreground hover:translate-y-[-2px] hover:shadow-md",
        secondary:
          "bg-secondary text-white hover:bg-secondary/90 hover:translate-y-[-2px] hover:shadow-md",
        ghost: "hover:bg-accent/5 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-accent text-white hover:bg-accent/90 hover:translate-y-[-2px] hover:shadow-md",
        // Adding new style guide button variants
        primary: "bg-secondary text-white hover:bg-secondary/90 hover:translate-y-[-2px] hover:shadow-md",
        "secondary-outline": "bg-white text-secondary border border-secondary hover:bg-secondary/5",
      },
      size: {
        default: "h-10 px-4 py-3 rounded-md",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        // Add medium radius option to fix error
        md: "rounded-md",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
