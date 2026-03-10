import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services-data";
import ServiceDetailClient from "./ServiceDetailClient";

// Required for static export
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Next.js 15+ params is a Promise
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceDetailClient service={service} />;
}