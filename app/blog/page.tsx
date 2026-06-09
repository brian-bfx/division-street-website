import Link from "next/link";
import { ImageCard, PageHero } from "@/components/ds";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { allBlogPosts, blogHub } from "@/content/blog";
import { getBlogImage, images } from "@/content/images";
import { layout } from "@/lib/design-system/layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog — Local Marketing Guides for Chicago Businesses",
  description: blogHub.entityIntro,
  path: "/blog",
  keywords: [
    "Wicker Park marketing tips",
    "Chicago local SEO guide",
    "Google Business Profile tips",
  ],
});

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default function BlogPage() {
  const sorted = [...allBlogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <Section hero>
        <PageHero
          breadcrumbs={[{ name: "Blog", path: "/blog" }]}
          eyebrow={blogHub.eyebrow}
          headline={blogHub.headline}
          intro={blogHub.entityIntro}
          subhead={blogHub.subhead}
          image={images.blog.hub}
        />
      </Section>

      <Section background="warm" className="!pt-0">
        <div className={layout.gridCards}>
          {sorted.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2"
              >
                <ImageCard
                  image={getBlogImage(post.slug)}
                  interactive
                  flushImage
                >
                  <Eyebrow className="mb-2 block">
                    {post.tags.join(" · ")} · {formatDate(post.publishedAt)}
                  </Eyebrow>
                  <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-navy/70">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-base font-medium text-brick">
                    Read article →
                  </p>
                </ImageCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
