export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">

        <h1 className="text-6xl font-semibold tracking-tight mb-6">
          duajemari
        </h1>

        <p className="text-xl text-neutral-400 mb-10">
          Create elegant digital wedding invitations
          that tell your love story beautifully.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:opacity-90">
            View Templates
          </button>

          <button className="px-6 py-3 border border-neutral-600 rounded-full hover:bg-neutral-800">
            Create Invitation
          </button>
        </div>

      </div>
    </main>
  );
}