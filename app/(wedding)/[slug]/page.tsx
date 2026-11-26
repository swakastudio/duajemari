
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WeddingPage({
  params,
}: PageProps) {
  const { slug } = await params;

  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-[#ADACBA] text-[#661321]">

      {/* Main responsive container */}
      <section className="relative flex min-h-dvh w-full items-center justify-center px-5 py-10">

        {/* Invitation content */}
        <div className="w-full max-w-xl space-y-5 text-center">

          <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase">
            Duajemari Wedding Invitation
          </p>

          <h1 className="font-serif text-3xl sm:text-5xl">
            {slug.replace("-", " & ")}
          </h1>

          <p className="text-sm sm:text-base">
            Wedding invitation is being prepared.
          </p>

        </div>

      </section>

    </main>
  );
}
