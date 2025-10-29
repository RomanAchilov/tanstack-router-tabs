import { createFileRoute } from '@tanstack/react-router'
import { Input } from '@/components/ui/input'

export const Route = createFileRoute('/auto/tabs/tab-a/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { editing } = Route.useSearch()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Tab A</h2>
      <div className="space-y-2">
        <label htmlFor="tab-a-input" className="text-sm font-medium">
          Поле для редактирования (Tab A)
        </label>
        <Input
          id="tab-a-input"
          placeholder="Введите текст..."
          disabled={!editing}
        />
      </div>
    </div>
  )
}
