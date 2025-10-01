import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tabs/tab-b/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tabs/tab-b/"!</div>
}
