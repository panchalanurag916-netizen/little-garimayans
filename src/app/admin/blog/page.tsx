export default function AdminBlogPage() {
  return (
    <div className="p-6 md:p-8">
      <h1 className="font-display font-bold text-white text-2xl mb-4">Blog Management</h1>
      <div className="rounded-2xl border border-white/6 p-10 text-center" style={{ background: '#0f1117' }}>
        <div className="text-5xl mb-4">📝</div>
        <p className="text-white/60 font-body mb-4">Blog CMS editor coming soon. You can manage posts via direct DB access for now.</p>
        <p className="text-white/30 text-xs font-body">Connect a rich-text editor (TipTap / Quill) here in the next sprint.</p>
      </div>
    </div>
  )
}
