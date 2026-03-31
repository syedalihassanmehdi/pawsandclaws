import Link from "next/link";
import { Service } from "@/data/services-data";

export default function CrossLinksSection({ service }: { service: Service }) {
  if (!service?.crossLinks) return null;

  const { sectionTitle, sectionIntro, items } = service.crossLinks;

  return (
    <section className="py-05 pb-10" style={{ background: "#E9E8F6" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        
        {/* Header with Pink Background & Half Italic Style */}
        <div className="mb-12">
          <p className="text-[#f57c20] text-sm font-semibold tracking-widest uppercase mb-3">
            FURTHER CARE
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] leading-tight mb-6">
            {sectionTitle.split(" ").map((word, index) => (
              <span key={index}>
                {index === 1 ? (   // Makes the second word italic like "this"
                  <span className="italic text-[#f57c20]">{word}</span>
                ) : (
                  word
                )}{" "}
              </span>
            ))}
          </h2>

          <p className="text-base md:text-lg text-[#555570] max-w-3xl leading-relaxed">
            {sectionIntro}
          </p>
        </div>

        {/* Clean Editorial Blocks (No Cards) */}
        <div className="space-y-14">
          {items.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-[#ede9f5] pt-10 first:border-t-0 first:pt-0"
            >
              {/* Left: Number + Heading */}
              <div className="lg:col-span-4">
                <div className="text-[#f57c20] text-sm font-bold tracking-widest mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#1a1a2e] leading-tight">
                  {item.heading}
                </h3>
              </div>

              {/* Right: Body with inline bold links */}
              <div className="lg:col-span-8 text-[15.5px] leading-relaxed text-[#555570]">
                {item.body.map((part, j) =>
                  part.link ? (
                    <Link
                      key={j}
                      href={`/services/${part.link.slug}`}
                      className="font-semibold text-[#1a1a2e] hover:text-[#f57c20] transition-colors"
                    >
                      {part.link.label}
                    </Link>
                  ) : (
                    <span key={j}>{part.text}</span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}