import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tabs/tab-a/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tabs/tab-a/"!</div>
}
