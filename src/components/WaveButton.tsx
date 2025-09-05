import { forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const waveButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wave-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        wave: "bg-wave-gradient text-wave-primary-foreground shadow-wave hover:shadow-wave-glow hover:scale-105 active:scale-95",
        outline: "border border-wave-border bg-transparent text-wave-primary hover:bg-wave-primary/10 hover:border-wave-primary",
        ghost: "text-text-secondary hover:text-wave-primary hover:bg-wave-primary/10",
        surface: "bg-surface-secondary text-text-primary hover:bg-surface-tertiary border border-wave-border",
        danger: "bg-wave-error text-white hover:bg-wave-error/90 shadow-lg",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "wave",
      size: "md",
    },
  }
)

export interface WaveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof waveButtonVariants> {
  asChild?: boolean
}

const WaveButton = forwardRef<HTMLButtonElement, WaveButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(waveButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
WaveButton.displayName = "WaveButton"

export { WaveButton, waveButtonVariants }