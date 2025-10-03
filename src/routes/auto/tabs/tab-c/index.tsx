import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auto/tabs/tab-c/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tabs/tab-c/"!</div>
}
