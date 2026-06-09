# Division Street Digital — Design System

Internal reference for layout components, tokens, and photography.

## Tokens

| File | Contents |
|------|----------|
| `tokens.ts` | Colors (from `lib/colors.ts`), radii, shadows, spacing |
| `typography.ts` | Mobile-first Tailwind class strings per text role |
| `layout.ts` | Section padding, container, grid conventions |
| `images.ts` | Aspect ratios, `next/image` sizes per pattern |

## Section backgrounds

- **white** — default
- **warm** — alternate sections (silver `#E8EBED`)
- **pinstripe** — card grids only (pricing plans, service/area indexes, how-it-works)
- **navy** — closing CTAs

## Layout components (`components/ds/`)

### `MediaImage`

Contained image with pattern-aware `sizes`. Use for any photo slot from `content/images.ts`.

| Pattern | Use case | Mobile sizes |
|---------|----------|--------------|
| `hero` | Page heroes | 100vw |
| `card` | Cards, grids | 100vw |
| `inline` | Side content | 100vw |
| `portrait` | Founder, testimonials | 100vw |

### `PageHero`

Standard page header: eyebrow → headline → intro → image (stacked) → CTAs.

- **stacked** (default): image below copy on all breakpoints
- **split**: image first on mobile, side-by-side on `lg:`

### `FeatureSplit`

Image-led section. Mobile always shows **image first**, then copy. Desktop: configurable left/right.

### `ImageCard`

Card with flush or inset image header + body slot. Used for services, areas, blog index, stories.

### `SectionHeader`

Eyebrow + headline + optional subhead. Centered on mobile.

### `FormLayout`

Mobile: trust image **above** form. Desktop: form left, portrait sidebar right.

## Mobile rules

1. Single-column rhythm: header → image → content
2. Min tap target: 44px (`min-h-11`)
3. Safe area padding on nav and sticky CTA
4. Nav wordmark: **DSD** below `md`, full wordmark on desktop
5. Hero type: `text-4xl` mobile → `text-6xl` desktop

## Spacing scale

| Token | Mobile | Desktop |
|-------|--------|---------|
| Section default | `py-20` | `py-28` / `py-32` |
| Section hero | `py-24` | `py-32` / `py-36` |
| Section compact | `py-16` | `py-24` |
| Container horizontal | `px-6` | `px-8` / `px-10` |
| Section header → content | `mb-14` | `mb-16` |
| Card padding | `p-8` | `p-10` |
| Grid gap | `gap-8` | `gap-10` / `gap-12` |

## Photography brief template

When adding a slot in `content/images.ts`:

```
Subject: [who/what — e.g. owner at register, Damen Ave storefront]
Mood: Warm natural light, candid, not stock
Crop: Center 70% — mobile crops to 4:3
Neighborhood cues: [Wicker Park / Bucktown / etc. if relevant]
Aspect: hero | card | square | portrait
Alt text: [describe for screen readers — outcome, not "image of"]
```

Drop files in `public/images/` and set `src` on the slot.

## Adding a new page

1. Add image slots to `content/images.ts`
2. Use `PageHero` in a `Section hero`
3. Use `SectionHeader` + `ImageCard` / `FeatureSplit` for body sections
4. Set `priority` on one LCP image per route
