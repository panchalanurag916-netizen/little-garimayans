export default function AdminEventsPage() {
  return (
    <div className="p-6 md:p-8">
      <h1 className="font-display font-bold text-white text-2xl mb-4">Events Management</h1>
      <div className="rounded-2xl border border-white/6 p-10 text-center" style={{ background: '#0f1117' }}>
        <div className="text-5xl mb-4">📅</div>
        <p className="text-white/60 font-body">Events CRUD panel — create, edit, publish upcoming events here.</p>
      </div>
    </div>
  )
}
