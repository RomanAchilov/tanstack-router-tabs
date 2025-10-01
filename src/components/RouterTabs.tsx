import type { HTMLAttributes } from 'react'

import { Link } from '@tanstack/react-router'

import type { FileRouteTypes } from '@/routeTree.gen'

import { cn } from '@/lib/utils'

type RouterTabPath = FileRouteTypes['to']

export type RouterTabItem = {
  label: string
  to: RouterTabPath
}

export type RouterTabsProps = HTMLAttributes<HTMLDivElement> & {
  tabs: RouterTabItem[]
  listClassName?: string
}

const tabLinkClassName =
  'inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium text-foreground dark:text-muted-foreground whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4'

const tabLinkActiveClassName = cn(
  'bg-background text-foreground shadow-sm',
  'dark:text-foreground dark:border-input dark:bg-input/30',
)

export function RouterTabs({
  tabs,
  className,
  listClassName,
  ...props
}: RouterTabsProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)} {...props}>
      <div
        className={cn(
          'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1',
          listClassName,
        )}
      >
        {tabs.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            preload="intent"
            className={cn(tabLinkClassName)}
            activeProps={{
              className: tabLinkActiveClassName,
            }}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
