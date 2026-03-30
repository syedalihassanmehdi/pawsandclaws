// app/services/[slug]/[subSlug]/page.tsx

import { notFound } from "next/navigation";
import ServiceDetailClient from "../ServiceDetailClient";
import { surgicalSubServices } from "@/data/surgical-subservices-data";
import type { Service } from "@/data/services-data";

interface Props {
  params: Promise<{ slug: string; subSlug: string }>;
}

// This must exist for static export
export async function generateStaticParams() {
  return surgicalSubServices.map((sub) => ({
    slug: "surgical-services",
    subSlug: sub.slug,
  }));
}

export default async function SubServicePage({ params }: Props) {
  const { slug, subSlug } = await params;

  if (slug !== "surgical-services") {
    notFound();
  }

  const subData = surgicalSubServices.find((s) => s.slug === subSlug);

  if (!subData) {
    notFound();
  }

  const service: Service = {
    slug: subData.slug,
    title: subData.title,
    tagline: subData.tagline,
    description: subData.description,
    longDescription: subData.longDescription,
    image: subData.image,
    features: subData.features,
    benefits: subData.benefits,
    faqs: subData.faqs,
    relatedSlugs: [],
    color: "#f57c20",
    icon: "syringe",
  };

  return <ServiceDetailClient service={service} />;
}