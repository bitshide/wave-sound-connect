import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const waveCardVariants = cva(
  "rounded-lg border border-wave-border transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-surface-secondary shadow-surface",
        elevated: "bg-surface-secondary shadow-wave hover:shadow-wave-glow",
        transparent: "bg-surface-primary/50 backdrop-blur-sm",
        gradient: "bg-surface-gradient border-wave-primary/20",
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface WaveCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof waveCardVariants> {}

export function WaveCard({ className, variant, size, ...props }: WaveCardProps) {
  return (
    <div
      className={cn(waveCardVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export function WaveCardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 pb-4", className)}
      {...props}
    />
  )
}

export function WaveCardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-semibold text-text-primary", className)}
      {...props}
    />
  )
}

export function WaveCardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-text-secondary", className)}
      {...props}
    />
  )
}

export function WaveCardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-text-primary", className)}
      {...props}
    />
  )
}

export function WaveCardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center pt-4", className)}
      {...props}
    />
  )
}