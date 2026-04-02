export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-10 h-10 border-4 border-neutral-300 border-t-neutral-900 rounded-full animate-spin mx-auto" />
        <p className="text-neutral-600 font-[var(--nav-font-sans)]">Memuat halaman...</p>
      </div>
    </div>
  );
}
