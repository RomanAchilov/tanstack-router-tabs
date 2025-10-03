import * as React from 'react'

import { cn } from '@/lib/utils'

type SeparatorProps = React.HTMLAttributes<HTMLDivElement>

const Separator = ({ className, ...props }: SeparatorProps) => (
  <div
    className={cn('h-px w-full bg-border', className)}
    role="separator"
    {...props}
  />
)

export { Separator }
