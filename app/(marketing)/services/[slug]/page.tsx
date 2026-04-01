type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="container-main section-space">
      <h1 className="text-4xl font-bold text-white">{slug}</h1>
    </main>
  );
}