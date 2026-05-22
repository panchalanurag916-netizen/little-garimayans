export default function AdminGalleryPage() {
  return (
    <div className="p-6 md:p-8">
      <h1 className="font-display font-bold text-white text-2xl mb-4">Gallery Management</h1>
      <div className="rounded-2xl border border-white/6 p-10 text-center" style={{ background: '#0f1117' }}>
        <div className="text-5xl mb-4">🖼️</div>
        <p className="text-white/60 font-body mb-4">Gallery upload management — connect Cloudinary for media uploads.</p>
        <p className="text-white/30 text-xs font-body">Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET in .env.local</p>
      </div>
    </div>
  )
}
