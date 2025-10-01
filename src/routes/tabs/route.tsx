import { createFileRoute, Outlet } from '@tanstack/react-router'

import { RouterTabs, type RouterTabItem } from '@/components/RouterTabs'

const tabs: RouterTabItem[] = [
  { label: 'Tab A', to: '/tabs/tab-a' },
  { label: 'Tab B', to: '/tabs/tab-b' },
  { label: 'Tab C', to: '/tabs/tab-c' },
]

export const Route = createFileRoute('/tabs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <RouterTabs tabs={tabs} />
      <div className="rounded-lg border bg-background p-6">
        <Outlet />
      </div>
    </div>
  )
}
