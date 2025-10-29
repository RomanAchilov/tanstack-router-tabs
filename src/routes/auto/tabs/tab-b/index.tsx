import { createFileRoute } from '@tanstack/react-router'
import { Input } from '@/components/ui/input'

export const Route = createFileRoute('/auto/tabs/tab-b/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { editing } = Route.useSearch()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Tab B</h2>
      <div className="space-y-2">
        <label htmlFor="tab-b-input" className="text-sm font-medium">
          Поле для редактирования (Tab B)
        </label>
        <Input
          id="tab-b-input"
          placeholder="Введите текст..."
          disabled={!editing}
        />
      </div>
    </div>
  )
}
