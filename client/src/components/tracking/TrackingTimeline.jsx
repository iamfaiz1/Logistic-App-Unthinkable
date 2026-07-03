import Badge from '../common/Badge'
import EmptyState from '../common/EmptyState'

export default function TrackingTimeline({ events = [] }) {
  if (!events.length) {
    return <EmptyState title="No tracking events" description="Delivery scans and status updates will appear here." />
  }

  return (
    <div className="relative grid gap-4 pl-4 before:absolute before:bottom-2 before:left-1 before:top-2 before:w-px before:bg-blue-100">
      {events.map((event) => (
        <article className="relative rounded-lg border border-blue-100 bg-white p-4 shadow-sm shadow-blue-950/5 before:absolute before:-left-[19px] before:top-5 before:h-3 before:w-3 before:rounded-full before:bg-blue-600" key={event.id || `${event.status}-${event.createdAt}`}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge tone="info">{event.status}</Badge>
            <time className="text-xs text-slate-500">{event.createdAt || event.timestamp}</time>
          </div>
          <p className="mt-2 text-sm text-slate-600">{event.note || event.description || 'Status updated'}</p>
          {event.actor && <p className="mt-1 text-xs font-semibold text-slate-500">By {event.actor.name || event.actor}</p>}
        </article>
      ))}
    </div>
  )
}
