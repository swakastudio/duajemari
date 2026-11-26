
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
    <main className="min-h-screen flex items-center justify-center bg-[#ADACBA] text-[#661321]">
      <div className="text-center space-y-3">
        <p className="text-sm tracking-[0.3em]">
          DUJEMARI WEDDING INVITATION
        </p>

        <h1 className="text-3xl font-serif">
          {slug}
        </h1>

        <p>Wedding invitation is being prepared.</p>
      </div>
    </main>
  );
}
