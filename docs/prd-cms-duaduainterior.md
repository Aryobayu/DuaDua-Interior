# PRD CMS DuaDuaInterior

Status: Draft for Notion sync
Last updated: 2026-03-31
Owner role: Senior Product Manager + System Architect
Target workspace: Notion page "PRD CMS DuaDuaInterior"

## Notion Sync Status

Notion MCP tools are not available in the current session.
Checks performed:
- `list_mcp_resources` returned no resources
- `list_mcp_resource_templates` returned no templates
- MCP server name `Notion` is not registered in this session

Because of that, this PRD is prepared locally first and is ready to be copied into Notion once the Notion app is connected.

## Executive Summary

DuaDuaInterior currently runs as a marketing website with project content stored directly in code. Hero copy lives in `components/sections/hero.tsx`, portfolio cards and filters rely on `lib/projects-data.ts`, project listing behavior is implemented in `components/projects/projects-page-client.tsx`, and the project detail page renders from the same file-based dataset in `app/projects/[slug]/page.tsx`.

The vision for the CMS dashboard is to move DuaDuaInterior from code-managed content into an internal content operating system that allows admins to create, edit, preview, optimize, and publish interior project pages without touching the codebase. The dashboard should support high-quality visual storytelling, preserve the premium minimal aesthetic of the public website, and keep performance standards high even as the media library grows.

The CMS will be built with Next.js, PostgreSQL, Prisma, Shadcn UI, and the internal dashboard shell from Antigravity Kit. It will use Server Actions as the primary mutation mechanism so forms, validation, preview, and publish flows stay close to the component tree and avoid unnecessary API boilerplate.

## Product Vision

Build a premium internal CMS that gives the DuaDuaInterior team full control over:
- Hero section messaging on the homepage
- Featured project cards and category narratives
- Project detail storytelling including concept, function, and visual impression
- Media gallery upload, optimization, cover image selection, and ordering
- Draft preview and one-click publishing with low operational overhead

## Problem Statement

The current content model is static and code-bound. That creates several business and operational constraints:
- Content updates require developer involvement
- New projects cannot be published quickly by the admin team
- Gallery asset management is manual and error-prone
- Image quality and file size optimization depend on engineering workflows
- There is no draft preview or structured publish state
- There is no central dashboard for content health, missing fields, or media readiness

## Goals

- Reduce time-to-update for homepage or project content from code deployment cycles to under 10 minutes
- Let an admin create a new project page end to end without editing source files
- Standardize project structure so every project page contains a strong narrative and visual hierarchy
- Ensure uploaded images are optimized into web-friendly variants before publish
- Preserve or improve frontend performance after CMS adoption
- Make the admin workflow intuitive enough for non-technical content operators

## Non-Goals

- Public user-generated submissions
- Complex multi-tenant permissions in v1
- Full marketing automation or CRM features
- AI content generation as a required publishing step
- Direct customer booking workflows from the CMS dashboard

## Current State Analysis

### Content Surfaces Already Present

The current website already exposes the core surfaces the CMS needs to control:

1. Hero section
- Eyebrow badge
- Main heading
- Supporting copy
- Primary CTA label and action
- Secondary CTA label and action
- Right-side visual panel and trust badge text

2. Project cards
- Category label
- Project title
- Short teaser or description
- Featured flag
- Cover image
- Category-based filtering

3. Project detail specifications
- Title
- Long description
- Concept
- Function value
- Visual tone
- Category link
- Related project recommendations

4. Media gallery behavior
- A single main image is currently rendered
- The future CMS needs multi-image support per project
- Cover selection, ordering, alt text, and responsive derivatives are not yet structured

### Key CMS-Controlled Elements

#### Hero Section Control Requirements

The homepage hero should become editable through a dedicated "Homepage Settings" form with:
- Eyebrow text
- Heading line 1
- Heading line 2
- Supporting paragraph
- Primary CTA label
- Primary CTA target
- Secondary CTA label
- Secondary CTA target
- Quality badge title
- Quality badge subtitle
- Optional background theme preset
- Optional desktop visual media asset

#### Project Card Control Requirements

Each project card should expose:
- Project title
- Slug
- Category
- Card teaser
- Card description
- Cover image
- Featured status
- Display order
- Publish status
- Whether the card appears on homepage featured section

#### Detail Specification Control Requirements

Each project detail page should expose structured content blocks:
- Project overview title
- Narrative summary
- Concept
- Function
- Visual impression
- Location
- Optional completion year
- Optional client type such as residential or commercial
- Related project category
- CTA label and destination
- SEO title and meta description

#### Media Gallery Control Requirements

The media manager should support:
- Upload multiple images per project
- Automatic WebP conversion on upload
- Thumbnail generation
- Cover image selection
- Drag-and-drop gallery ordering
- Alt text editing
- Image caption editing
- Focal point support for smart cropping
- Image replace without breaking project association
- Preview of desktop and mobile aspect ratios

## Users and Permissions

### Primary Role in v1

Admin
- Manage all project content
- Edit homepage settings
- Upload and order media
- Save drafts
- Preview unpublished changes
- Publish and unpublish projects

### Optional Future Roles

Editor
- Create and edit draft content
- Upload media
- Cannot publish without approval

Approver
- Review and publish draft content

For v1, a single Admin role is enough, but the schema should not block future role expansion.

## User Stories

- Sebagai admin, saya ingin login ke dashboard agar hanya tim internal yang bisa mengelola konten.
- Sebagai admin, saya ingin melihat daftar project lengkap dengan status draft atau published agar saya tahu konten mana yang siap tayang.
- Sebagai admin, saya ingin membuat project baru dari form terstruktur agar saya tidak perlu mengubah file TypeScript secara manual.
- Sebagai admin, saya ingin mengubah teks narasi agar konten web selalu update tanpa koding.
- Sebagai admin, saya ingin mengatur `slug` project agar URL tetap rapi dan SEO-friendly.
- Sebagai admin, saya ingin memilih kategori project agar kartu dan halaman detail otomatis masuk ke kelompok yang tepat.
- Sebagai admin, saya ingin menandai project sebagai featured agar otomatis muncul di homepage portfolio section.
- Sebagai admin, saya ingin mengunggah banyak gambar sekaligus agar pembuatan halaman project lebih cepat.
- Sebagai admin, saya ingin sistem otomatis mengonversi gambar ke WebP agar page load tetap cepat.
- Sebagai admin, saya ingin mengurutkan galeri dengan drag-and-drop agar urutan cerita visual sesuai presentasi desain.
- Sebagai admin, saya ingin memilih cover image agar kartu project tampil paling representatif.
- Sebagai admin, saya ingin melihat live preview sebelum publish agar saya bisa mengecek copy, layout, dan kualitas gambar.
- Sebagai admin, saya ingin publish dengan satu aksi agar perubahan cepat tampil di website publik.
- Sebagai admin, saya ingin mengedit Hero Section homepage agar kampanye, headline, dan CTA dapat berubah tanpa deploy.
- Sebagai admin, saya ingin melihat validasi field wajib agar project tidak terbit dengan data yang belum lengkap.

## Workflow and User Journey

### Primary Journey

1. Login
- Admin membuka `/cms/login`
- Menggunakan UI block `login-01`
- Sistem memvalidasi kredensial dan membuat session aman
- Admin diarahkan ke `/cms/dashboard`

2. Dashboard
- Menggunakan shell `dashboard-01`
- Menampilkan total project, jumlah draft, jumlah published, jumlah media belum ber-alt-text, dan quick actions

3. Create Project
- Admin memilih `New Project`
- Form project membuka field inti:
  - title
  - slug
  - category
  - teaser
  - description
  - concept
  - function
  - visual impression
  - location
  - featured toggle
  - publish status
- Saat save pertama, project dibuat sebagai `draft`

4. Image Optimization
- Admin upload media ke section galeri
- Server Action menerima file
- Server memvalidasi mime type dan ukuran
- Image pipeline menghasilkan:
  - original reference
  - WebP master
  - thumbnail
  - optional blurred placeholder
- Metadata disimpan ke tabel `Media`

5. Live Preview
- Admin klik `Preview`
- Sistem mengaktifkan Draft Mode atau signed preview session
- Halaman preview menampilkan data draft, bukan hanya published data
- Admin memeriksa desktop dan mobile rendering

6. Publish
- Admin klik `Publish`
- Sistem memastikan field wajib lengkap dan ada cover image
- Record `status` berubah menjadi `published`
- `published_at` diset
- Cache halaman terkait di-revalidate
- Halaman publik menampilkan versi terbaru

## Functional Requirements

### FR-1 Authentication and Session

- CMS harus memiliki halaman login berbasis `login-01`
- CMS dapat memiliki halaman signup berbasis `signup-03`, tetapi akses publik harus dimatikan; dipakai untuk bootstrap owner atau invite-only flow
- Session harus disimpan aman di server
- Route `/cms/*` harus dilindungi middleware atau server-side auth guard
- User yang belum login harus diarahkan ke `/cms/login`

### FR-2 Dashboard Overview

- Dashboard home menggunakan `dashboard-01` sebagai layout dasar
- Harus menampilkan:
  - total projects
  - draft projects
  - published projects
  - total media assets
  - assets missing alt text
  - recently updated projects
- Harus ada quick actions:
  - create project
  - open media library
  - edit homepage hero
  - review drafts

### FR-3 Project Listing

- Admin bisa melihat tabel atau card list project
- Harus bisa filter berdasarkan:
  - category
  - status
  - featured
- Harus bisa search berdasarkan title atau slug
- Harus bisa sort berdasarkan:
  - updated_at
  - title
  - publish date
  - custom order

### FR-4 Project Editor

- Admin bisa create, edit, duplicate, archive, dan publish project
- Project editor harus memiliki section:
  - Basic Info
  - Card Content
  - Detail Specs
  - Narrative Content
  - Media Gallery
  - SEO
  - Publish Settings
- Field wajib minimum:
  - title
  - slug
  - category
  - teaser
  - description
  - concept
  - function
  - visual impression
  - cover image
- Slug harus unik
- Featured toggle harus mempengaruhi homepage section
- Status enum minimal:
  - draft
  - published
  - archived

### FR-5 Category and Narrative Management

- Admin bisa mengelola kategori seperti `bedroom`, `kitchen`, `wardrobe`
- Setiap kategori memiliki:
  - key
  - label
  - headline
  - narrative body
  - sort order
  - active status
- Homepage and listing filters harus mengambil dari data kategori, bukan hardcoded constants

### FR-6 Homepage Hero Settings

- Admin dapat mengedit hero homepage tanpa menyentuh kode
- Harus tersedia preview langsung untuk:
  - eyebrow text
  - heading
  - subheading
  - CTA labels
  - CTA links
  - trust badge
  - hero visual asset
- Sistem harus menyimpan versi draft sebelum publish global settings

### FR-7 Media Management

- Admin dapat upload gambar satuan atau bulk upload
- Format upload minimum: JPG, PNG, WebP
- Sistem harus otomatis menghasilkan format WebP
- Sistem harus membuat thumbnail untuk dashboard
- Admin dapat:
  - memilih cover image
  - memberi alt text
  - memberi caption
  - mengurutkan media
  - menghapus relasi media dari project
  - mengganti file asset
- Drag-and-drop ordering wajib untuk galeri project

### FR-8 Validation and Publishing Guardrails

- Publish harus diblok jika:
  - field wajib kosong
  - slug duplikat
  - tidak ada cover image
  - category belum dipilih
- Warning non-blocking:
  - alt text kosong
  - meta description kosong
  - terlalu banyak gambar berukuran besar

### FR-9 Preview

- Admin harus dapat melihat preview halaman project draft
- Preview harus mencerminkan:
  - hero image terpilih
  - urutan galeri terkini
  - copy terbaru
  - badge featured dan kategori
- Preview sebaiknya tersedia sebagai:
  - internal route `/cms/preview/project/[id]`
  - optional draft-mode preview for public page shell

### FR-10 Audit and Content Health

- Sistem menyimpan `updated_at` dan `updated_by`
- Dashboard menandai project dengan konten belum lengkap
- Dashboard menampilkan jumlah media tanpa alt text
- Dashboard menampilkan status publish per project

## Form and Control Specification

### Project Form Fields

| Group | Field | Type | Validation | Notes |
| --- | --- | --- | --- | --- |
| Basic | title | text | required, 3-120 chars | tampil di card dan detail |
| Basic | slug | text | required, unique, kebab-case | dipakai di URL |
| Basic | category_id | select | required | relasi ke Categories |
| Basic | featured | switch | optional | untuk homepage |
| Card | teaser | textarea | required, <= 180 chars | tampil di card hover/list |
| Detail | description | textarea | required | intro detail page |
| Detail | concept | text/textarea | required | blok Konsep Desain |
| Detail | function_value | text/textarea | required | blok Fungsi Ruang |
| Detail | visual_tone | text/textarea | required | blok Kesan Visual |
| Detail | location | text | optional | untuk kredibilitas proyek |
| Narrative | narrative_body | rich text | recommended | blok Narasi Proyek |
| SEO | meta_title | text | optional | fallback ke title |
| SEO | meta_description | textarea | optional | fallback ke teaser |
| Publish | status | select | required | draft/published/archived |
| Publish | published_at | datetime | auto | diset saat publish |

### Homepage Hero Form Fields

| Field | Type | Validation | Notes |
| --- | --- | --- | --- |
| eyebrow | text | required | contoh: Studio Interior Premium |
| heading_line_1 | text | required | baris utama |
| heading_line_2 | text | optional | baris kedua |
| supporting_copy | textarea | required | deskripsi hero |
| primary_cta_label | text | required | contoh: Jelajahi Portfolio |
| primary_cta_href | text | required | anchor atau URL |
| secondary_cta_label | text | required | contoh: Dapatkan Konsultasi Gratis |
| secondary_cta_href | text | required | anchor atau URL |
| badge_title | text | optional | contoh: Premium |
| badge_subtitle | text | optional | contoh: Kualitas Terjamin |
| hero_media_id | relation | optional | jika visual panel ingin berbasis gambar |
| theme_preset | select | optional | brand gradient preset |

### Media Form Fields

| Field | Type | Validation | Notes |
| --- | --- | --- | --- |
| file | upload | required | original upload |
| alt_text | text | recommended | aksesibilitas dan SEO |
| caption | text | optional | untuk storytelling |
| sort_order | number | auto/manual | drag-and-drop updates |
| is_cover | boolean | optional | satu cover per project |
| focal_x | number | optional | 0-100 |
| focal_y | number | optional | 0-100 |

## Technical Architecture

### Recommended Stack

- Frontend and admin shell: Next.js App Router
- Internal dashboard layout and starter patterns: Antigravity Kit
- Database ORM: Prisma
- Database: PostgreSQL
- UI primitives and blocks: Shadcn UI
- Image optimization: Sharp on the server
- Validation: Zod
- Optional drag-and-drop: `@dnd-kit`
- Storage: local during development, object storage in production

### Why Server Actions

Server Actions should be the default mutation path because they:
- keep form handling close to the UI
- reduce API route boilerplate
- centralize validation and authorization
- lower client-side payload and serialization overhead
- simplify cache revalidation after save or publish
- make draft preview and publish logic easier to trace

### Recommended Server Actions

| Action | Purpose | Input | Output |
| --- | --- | --- | --- |
| `loginAction` | authenticate admin | email, password | session + redirect |
| `createProjectAction` | create new draft project | structured project payload | project id |
| `updateProjectAction` | update project content | project id + payload | success + timestamp |
| `saveProjectDraftAction` | lightweight save while editing | project id + partial payload | draft saved |
| `uploadProjectMediaAction` | upload and optimize images | project id + files | media records |
| `setProjectCoverAction` | choose cover image | project id + media id | success |
| `reorderProjectMediaAction` | persist drag ordering | ordered media ids | success |
| `updateCategoryAction` | manage category narratives | category payload | success |
| `updateHeroSettingsAction` | edit homepage hero | settings payload | success |
| `previewProjectAction` | prepare preview state | project id | preview token/url |
| `publishProjectAction` | publish content | project id | published_at + revalidate |
| `unpublishProjectAction` | rollback public visibility | project id | status updated |

### Request and Rendering Logic

Public site rendering:
- Public pages read only `published` projects and published settings
- `generateStaticParams` or cached dynamic fetching can be used for project slugs
- Project list and detail pages should fetch from PostgreSQL rather than `lib/projects-data.ts`

CMS rendering:
- Admin pages fetch draft-capable records
- Forms submit through Server Actions
- On save, CMS returns compact validation state instead of reloading entire datasets

Preview rendering:
- Prefer Next.js Draft Mode for realistic preview
- Preview URL should read the draft version of a project and related settings

Publish rendering:
- On publish, use `revalidatePath("/projects")`, `revalidatePath("/projects/[slug]")`, and homepage revalidation when featured state changes

## Technical Schema

### Core Tables

#### 1. Projects

Purpose:
- Store the main content for portfolio projects

Recommended columns:
- `id` UUID primary key
- `title` string
- `slug` string unique
- `category_id` UUID foreign key
- `teaser` text
- `description` text
- `concept` text
- `function_value` text
- `visual_tone` text
- `narrative_body` text
- `location` string nullable
- `cover_media_id` UUID nullable
- `featured` boolean default false
- `status` enum `draft | published | archived`
- `sort_order` integer default 0
- `published_at` timestamp nullable
- `created_at` timestamp
- `updated_at` timestamp
- `created_by` UUID nullable
- `updated_by` UUID nullable

#### 2. Categories

Purpose:
- Replace hardcoded category labels, filter tabs, and narrative cards

Recommended columns:
- `id` UUID primary key
- `key` string unique
- `label` string
- `headline` string
- `body` text
- `sort_order` integer default 0
- `is_active` boolean default true
- `created_at` timestamp
- `updated_at` timestamp

#### 3. Media

Purpose:
- Store project image metadata and optimization outputs

Recommended columns:
- `id` UUID primary key
- `project_id` UUID foreign key nullable
- `storage_key` string
- `original_filename` string
- `mime_type` string
- `width` integer
- `height` integer
- `file_size` integer
- `webp_key` string nullable
- `thumbnail_key` string nullable
- `blur_data_url` text nullable
- `alt_text` string nullable
- `caption` string nullable
- `sort_order` integer default 0
- `is_cover` boolean default false
- `focal_x` decimal nullable
- `focal_y` decimal nullable
- `created_at` timestamp
- `updated_at` timestamp

#### 4. Settings

Purpose:
- Store homepage hero settings and other global CMS-controlled content

Recommended columns:
- `id` UUID primary key
- `scope` string
- `key` string unique
- `value_json` JSONB
- `status` enum `draft | published`
- `published_value_json` JSONB nullable
- `updated_at` timestamp
- `updated_by` UUID nullable

### Recommended Supporting Tables

#### 5. AdminUsers

Purpose:
- Internal CMS authentication and audit

Recommended columns:
- `id` UUID primary key
- `name` string
- `email` string unique
- `password_hash` string
- `role` enum `admin | editor | approver`
- `is_active` boolean
- `created_at` timestamp
- `updated_at` timestamp

#### 6. AuditLogs

Purpose:
- Track important content mutations

Recommended columns:
- `id` UUID primary key
- `actor_id` UUID
- `entity_type` string
- `entity_id` UUID
- `action` string
- `payload_json` JSONB
- `created_at` timestamp

## Prisma Modeling Notes

Suggested relation map:
- One `Category` has many `Projects`
- One `Project` has many `Media`
- One `Project` has one optional `cover_media_id`
- `Settings` should store grouped documents such as `homepage.hero`
- `AdminUsers` link to `created_by` and `updated_by`

If reuse of media across multiple sections becomes important later, introduce a join table such as `MediaUsage`.

## Data Migration Strategy

The current static dataset in `lib/projects-data.ts` should be treated as seed content.

Migration approach:
1. Seed categories from existing constants
2. Seed projects from `PROJECTS`
3. Map existing `image` paths into initial `Media` records
4. Seed homepage hero settings from `components/sections/hero.tsx`
5. Replace hardcoded fetches with database-backed queries

## UI and Information Architecture

### CMS Navigation

Recommended internal routes:
- `/cms/login`
- `/cms/signup` for owner bootstrap or invite-only setup
- `/cms/dashboard`
- `/cms/projects`
- `/cms/projects/new`
- `/cms/projects/[id]`
- `/cms/media`
- `/cms/settings/homepage`
- `/cms/preview/project/[id]`

### Screen Breakdown

#### Login
- Use Shadcn `login-01`
- Brand-neutral premium styling derived from existing site tokens

#### Signup
- Use Shadcn `signup-03`
- Disabled from public access by default
- Used only for initial owner setup or invitation redemption

#### Dashboard
- Use Shadcn `dashboard-01`
- Replace generic analytics widgets with content operations widgets:
  - Draft count
  - Published count
  - Incomplete content count
  - Media warnings
  - Recent edits

#### Project Editor
- Split layout:
  - left: form sections in tabs or accordions
  - right: preview card, publish panel, content health status

#### Media Library
- Grid plus side drawer editor
- Drag-and-drop reorder inside project context
- Bulk upload status chips

## UI/UX Roadmap

### Phase 1 Foundation

- Implement auth pages with `login-01` and `signup-03`
- Establish CMS shell with `dashboard-01`
- Reuse existing brand tokens from `app/globals.css`
- Create data tables and seed initial content

### Phase 2 Content Operations

- Project listing and project editor
- Category narrative manager
- Homepage hero settings editor
- Draft save flow

### Phase 3 Media and Preview

- Bulk upload
- WebP conversion pipeline
- Cover image selection
- Drag-and-drop gallery ordering
- Live preview with Draft Mode

### Phase 4 Publish and Governance

- Publish guardrails
- Audit logs
- Content health dashboard
- Role expansion beyond admin

### Brand and Theme Guidance

The dashboard should not look like a generic SaaS admin. It should feel aligned with DuaDuaInterior's premium minimal brand language:
- Primary palette from current tokens:
  - warm cream
  - walnut-inspired neutrals
  - accent gold
- Typography should continue using the current display and body font pairing
- Surfaces should stay clean, soft, and editorial rather than neon or enterprise-blue
- The admin shell can be brighter than the public project pages, but should preserve luxury cues through spacing, muted contrast, and restrained accent usage

## Success Metrics

### Content Operations

- Time from login to publish new project <= 15 minutes
- Time to update homepage hero <= 5 minutes
- 90 percent of routine content edits completed without developer help
- 100 percent of published projects have cover image and required detail fields

### Performance and Quality

- Lighthouse Performance >= 90 on homepage and project detail pages
- Lighthouse Accessibility >= 90
- Lighthouse Best Practices >= 95
- Lighthouse SEO >= 95
- LCP <= 2.5s on key public pages
- CLS <= 0.1
- INP <= 200ms
- 100 percent of newly uploaded project images have WebP variant before publish

### Editorial Consistency

- 100 percent of published projects include:
  - concept
  - function
  - visual impression
  - narrative summary
  - cover image

## Risks and Dependencies

### Risks

- If image optimization runs synchronously on very large files, save latency can become noticeable
- If preview and publish use different fetch paths, admins may see inconsistent output
- If media storage abstraction is delayed, migration from local storage to object storage may become costly
- If category narratives stay duplicated between code and DB during transition, content drift can occur

### Dependencies

- Auth strategy for internal admins
- Storage target for production media assets
- Server-side image processing capability
- Prisma migrations and seed scripts
- Draft preview architecture decision

## Open Questions

- Will v1 allow only one Admin, or do we need Editor and Approver from day one?
- What production storage provider will be used for media?
- Does the project detail page need a fully rich-text narrative editor, or is structured textarea enough for the first release?
- Should homepage featured projects be selected manually, by `featured=true`, or by curated ordering plus featured flag?
- Is there a need for bilingual content in the future?

## Recommended Delivery Sequence

1. Build auth and CMS shell
2. Create PostgreSQL schema and Prisma models
3. Seed current categories and projects from static files
4. Replace homepage hero and project data reads with database queries
5. Implement project CRUD via Server Actions
6. Implement media upload and WebP pipeline
7. Add live preview and publish flow
8. Add dashboard health widgets and audit logs

## Launch Readiness Checklist

- Auth guards enabled
- Prisma schema migrated
- Seed content loaded
- Project CRUD stable
- Hero settings editable
- Media upload and optimization tested
- Preview path verified
- Publish revalidation verified
- Lighthouse targets checked
- Admin documentation written

## Recommendation Summary

The best v1 for DuaDuaInterior is a focused internal CMS with one high-trust Admin role, database-backed project content, media optimization on upload, draft preview, and one-click publish. The implementation should stay close to the existing public site structure so migration risk stays low: hero settings replace `hero.tsx` literals, category narratives replace hardcoded constants, and `Projects` plus `Media` replace the current static dataset in `lib/projects-data.ts`.

This keeps the CMS aligned with the actual public experience while giving the team full editorial control and preserving the premium brand presentation.
