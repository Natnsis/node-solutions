import { redirect } from "next/navigation";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;

  redirect(`/services?service=${encodeURIComponent(slug)}#service-${encodeURIComponent(slug)}`);
}