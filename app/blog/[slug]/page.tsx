import { notFound } from "next/navigation";
import { PageHero } from "@/components/ds";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/content/blog";
import { getBlogImage } from "@/content/images";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema } from "@/lib/schema";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
  });
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const schemaData = [
    articleSchema({
      title: post.title,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
    }),
    ...(post.faqs?.length ? [faqPageSchema(post.faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={schemaData} />

      <Section hero tightBottom>
        <PageHero
          breadcrumbs={[
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]}
          eyebrow={post.tags.join(" · ")}
          headline={post.title}
          subhead={`${formatDate(post.publishedAt)} · ${site.founder.name}`}
          intro={post.excerpt}
          image={getBlogImage(post.slug)}
        />
      </Section>

      <Section background="warm" spacing="intro">
        <div className="mx-auto max-w-prose space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                {section.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy/80">
                {section.body}
              </p>
            </section>
          ))}

          {post.faqs && post.faqs.length > 0 && (
            <section>
              <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                FAQ
              </h2>
              <div className="mt-6">
                <FaqAccordion faqs={post.faqs} />
              </div>
            </section>
          )}

          <RelatedLinks headline="Continue reading" links={post.relatedLinks} />
        </div>
      </Section>
    </>
  );
}
