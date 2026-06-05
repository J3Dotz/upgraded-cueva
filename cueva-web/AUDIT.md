# Hardcoded Content Inventory — La Cueva de Miravet

Every piece of owner-editable content currently hardcoded in Astro source files.
Each item maps to a Sanity schema field in Phase 2.

EN and ES pages contain the same content categories; all copy fields become
`localeString` or `localeText` to cover both languages.

---

## FILE: src/pages/index.astro  (EN homepage)
## FILE: src/pages/es/index.astro  (ES homepage — same structure, different copy)

### HARDCODED

**Meta / SEO**
- `<title>`: "La Cueva de Miravet — Sustainable Luxury Ecolodge, Castellón"
- `<meta description>`: "A restored 19th-century Masia and natural cave…"

**Hero section**
- Location label: "Cabanes · Castellón · Spain"
- H1 main: "Sustainable luxury"
- H1 italic: "in the Valencian mountains."
- Body: "A 19th-century Masia. A natural cave. Seven rooms where the mountain meets the Mediterranean."
- Background: static colour `#3A3228` — no hero image or video

**Intro section**
- Label: "The Lodge"
- H2: "A Masia that remembers everything."
- Body paragraph: "Built in the 19th century, restored without apology…"
- Left arch image: placeholder colour `#C4A882` (no real photo yet)
- Right arch image: placeholder colour `#8A9A7A` (no real photo yet)
- Review badge score: `8.7`
- Review badge source: `Booking.com`
- Review badge word: `"Exceptional"` / `"Excepcional"`

**Amenities section**
- Label: "The Property"
- H2: "What the mountain provides."
- 6 amenity items (label + SVG icon path):
  1. Cave Access
  2. Swimming Pool
  3. Panoramic Hot Tub
  4. Off-Grid & Solar
  5. 7 Rooms
  6. Mountain Terrace

**Reviews marquee**
- 5 testimonials (quote + attribution):
  1. "We came for a weekend. We talked about it for a year." — Maria K. · Netherlands
  2. "There is no wifi strong enough to make you want to leave." — James T. · United Kingdom
  3. "The cave at sunrise. We have no words for it." — Sophie M. · Germany
  4. "Off-grid doesn't mean roughing it. It means something completely different here." — Lena R. · France
  5. "La Cueva se queda contigo." — Carlos V. · España

**Rooms section**
- Label: "Where you sleep"
- H2: "Seven rooms. Each one its own world."
- Body: "Every room opens onto something — a terrace, a view, a particular quality of silence. Book a single room or take the lodge exclusively."

**Activities / Experiences teaser**
- Label: "What you do"
- H2: "The mountain has more to offer than the view."
- 3 teasers (title + description + colour placeholder — no images yet):
  1. "Cave Exploration" / "Guided access into the natural cave on the property grounds." / `#6B5B4A`
  2. "Wine & Olive Tasting" / "Local producers from the valleys below Cabanes." / `#4A5E45`
  3. "Hiking Desert de les Palmes" / "A national park at the edge of the estate." / `#8A7A65`

### ALREADY SANITY
- First 3 room cards (name, slug, image, price, bedConfig, view) — via `roomsQuery`

---

## FILE: src/pages/stay/index.astro
## FILE: src/pages/es/stay/index.astro

### HARDCODED

**Page hero**
- Label: "Seven rooms · Cabanes, Castellón"
- H1: "Where you stay"
- Body: "Each room opens onto something — a terrace, the valley, a particular angle of the Mediterranean…"

**Rooms section header**
- Label: "The Rooms"
- H2: "Seven worlds under one roof."
- Meta line: "Rates are per room, per night. Breakfast and the mountain are included."

**Prompt strip**
- Label: "A small lodge, attentively staffed"
- H2: "Not sure which room?"
- Body: "Tell us a little about your trip — who's coming, what you're after…"

**Wireframe fallbacks** (7 rooms × each has: type, name, feature/tagline, price, colour)
These are shown when Sanity room documents are empty. Once rooms are published in
Sanity, these values are overridden. But the text itself needs to migrate into Sanity
room documents so the wireframe array can be removed.

### ALREADY SANITY
- Room grid (slug, suiteType, name, tagline, priceFrom, swatchColor) via `roomsQuery`

---

## FILE: src/pages/stay/[slug].astro
## FILE: src/pages/es/stay/[slug].astro

### HARDCODED

**Per-room wireframe data** (7 entries, each room):
- `type` (suite type label) → maps to `room.suiteType`
- `name` / `nameEs` → maps to `room.name` / `room.nameTranslation`
- `tagline` → maps to `room.tagline`
- `price` → maps to `room.priceFrom`
- `color` → maps to `room.swatchColor`
- `sleeps` → maps to `room.sleeps`
- `size` → maps to `room.size`
- **`h2`** — decorative headline used in the intro section, e.g. "Rock, candlelight," — NOT YET IN SCHEMA
- **`body`** — two-paragraph room description — maps to `room.description` (schema field exists, but the page still reads from wireframe rather than Sanity)

**Gallery placeholder captions**
- "The bed, the beams.", "The balcony.", "The bathroom."
- These are shown when no Sanity images are uploaded; captions belong on the image objects themselves

**"What's included" section (same text on every room page)**
- H2: "Everything you'd hope for. Nothing you wouldn't."
- Body: "Breakfast from the valley below, mountain WiFi where you want it and none where you don't…"
- 9 amenity tiles: Bed (dynamic), Mountain Terrace / balcony (dynamic), Natural Light, Rain Shower, Breakfast Included, WiFi, Solar-Heated Water, Welcome Carafe, Writing Table

**Booking card (same on every room page)**
- "2-night minimum stay · Breakfast included"
- 3 bullets: "Best rate guaranteed when booking direct", "Flexible cancellation up to 14 days before", "Welcome carafe of valley wine on arrival"
- Note: "No payment until we confirm. Usually within a few hours."

**Adjacent rooms section**
- Label: "Adjacent rooms"
- H2: "Other corners of the masia. All seven, side by side."

### ALREADY SANITY
- name, nameTranslation, suiteType, tagline, priceFrom, swatchColor, bedConfig, view, balcony,
  bathroom, materials, heating, sleeps, size — all from Sanity room document
- Hero image `images[0]`, booking card image `images[1]`, gallery `images[1–3]` from Sanity
- Adjacent rooms grid from Sanity

---

## FILE: src/pages/experiences.astro
## FILE: src/pages/es/experiences.astro
## FILE: src/pages/es/experiencias.astro

### HARDCODED (page makes NO Sanity fetch at all)

**Hero**
- H1: "What you do here."

**Featured / signature experience**
- Label: "The signature experience"
- H2: "Cave Exploration — the original one."
- Description: "Guided access into the natural cave on the property grounds…"
- Meta: Duration "90 min", Group "Up to 6", From "€45 pp"
- Image: placeholder colour `#5C4838`

**Grid section**
- Label: "More to explore"
- H2: "In and around the valley."
- Right text: "A few we run ourselves, a few we recommend, and a few we'll arrange on request…"

**4 experience cards** (tag + colour + name + description + duration + price):
1. Tasting / Wine & Olive Tasting — 2 hrs, €55 pp / `#7C5A3C`
2. Outdoors / Hiking Desert de les Palmes — 3 hrs, €35 pp / `#4A5E45`
3. Movement / Sunrise Yoga — 60 min, €25 pp / `#8E7860`
4. Table / Private Dining on the Terrace — 4 courses, €95 pp / `#6B5544`

**Bespoke section**
- Quote: "If you'd like something we haven't thought of…"
- Sub-text: "Anniversaries, quiet retreats, a particular meal…"
- Contact email: `hola@lacuevademiravet.com`

### ALREADY SANITY
- `experience` schema exists and `experiencesQuery` is defined, but this page never calls either.

---

## FILE: src/pages/location.astro
## FILE: src/pages/es/location.astro
## FILE: src/pages/es/ubicacion.astro

### HARDCODED (page makes NO Sanity fetch at all)

**Hero**
- Label: "The Lodge · Cabanes · Castellón"
- H1: "Find us." + italic "We'll wait."
- Coordinates: `40°07'09.5"N  0°04'47.8"E`
- Elevation: "412 m above the Mediterranean"

**Address section**
- Label: "The Address"
- H2: "End of the road." + italic "Then a little further."
- Full address: "La Cueva de Miravet / La Ferradura, Cabanes / Castellón, Spain — 12595"
- Coordinate line: `40°07'09.5"N · 0°04'47.8"E`
- 4 distance stats: Nearest park 15 min, Valencia 1 h 15, Barcelona 3 hrs, Oropesa del Mar 20 min
- Warning notice: "Google Maps does not provide the correct route…"
- 2 route links: AP-7 (with hardcoded Google Maps URL), CV-10 (with hardcoded Google Maps URL)

**"How to arrive" section**
- Label: "How to arrive"
- H2: "Three ways to the mountain. All of them quiet by the end."
- Note: "However you come, the last fifteen minutes feel like the trip is just beginning…"
- 3 transport modes (By car / By train / By air) — each with: numeral, icon, name, sub-label, body
  paragraph, and 3 key/value detail rows

**Nearby section**
- Label: "While you're here"
- H2: "The neighbours. Worth a half-day each."
- Right text: "Four places we send guests to when they ask…"
- 4 nearby places: Peñíscola, Benicàssim, Castellón, Desert de les Palmes — each with type chip,
  name, subtitle, distance, km, direction (links are currently `#` — no real URLs)

**Ready strip**
- H2: "Now you know the way. Pick a room."

### ALREADY SANITY
- Nothing

---

## FILE: src/pages/journal/index.astro
## FILE: src/pages/es/journal/index.astro
## FILE: src/pages/es/diario/index.astro

### HARDCODED

**Hero**
- H1: "Curated"
- Sub: "Notes from the mountain."

**Featured article placeholder** (shown when Sanity has no posts)
- Category + title + excerpt + byline (author "Javier", date "May 2026", "8 min read")
- Link: goes to `/journal` (self-referential)

**Archive placeholder articles** (6 items — shown when Sanity has no posts)
- Category, title, excerpt, date, read-time, placeholder colour for each

**Archive header text**
- "From the archive. Stories, seasons, and the things worth writing down."
- Count: hardcoded `24` when no posts: "24 entries · since 2022"
- "since 2022" — the founding year

**Filter buttons** — category labels: All, Property, Local Area, Seasonal, Behind the Scenes
(These match the `category` values in `journalPost` schema but are hardcoded in the filter UI)

### ALREADY SANITY
- Posts (title, slug, coverImage, excerpt, category, publishedAt, readingMinutes, author) — `journalPostsQuery`
- Featured article (posts[0]) fully driven by Sanity when content exists
- Archive grid (posts[1+]) from Sanity when content exists

---

## FILE: src/pages/journal/[slug].astro
## FILE: src/pages/es/journal/[slug].astro
## FILE: src/pages/es/diario/[slug].astro

### HARDCODED
- Article body: Portable Text rendering is stubbed out with placeholder text
  `"Article body coming from Sanity Portable Text."` — the `body` field exists in the schema
  and is fetched, but `@portabletext/astro` is not yet installed or wired up.

### ALREADY SANITY
- title, excerpt, coverImage, category, publishedAt, readingMinutes, author — fully from Sanity
- body — fetched but not rendered

---

## FILE: src/pages/book.astro
## FILE: src/pages/es/book.astro
## FILE: src/pages/es/reservar.astro

### HARDCODED (page makes NO Sanity fetch)

**Sidebar**
- Label: "Direct booking · No third parties"
- H1: "Request to book."
- Sub: "We'll confirm availability within a few hours."
- Note: "Each request is handled personally by our Manager Javier, and answered the same day…"
- Contact label: "Or write to us"
- Email: `hola@lacuevademiravet.com`
- Phone: `+34 641 33 09 42`

**Room tile selector** (9 tiles — hardcoded names/types; should read from Sanity room documents)
- 7 individual rooms: Olive Suite / Olivo … Fennel Suite / Hinojo
- "No preference" tile
- "Whole lodge" tile

**"What happens next" section**
- Label: "What happens next"
- H2: "Three quiet steps between request and arrival."
- Step 01: "We review your request" + description
- Step 02: "We confirm by email" + description
- Step 03: "Secure payment link" + description

**Guarantee section**
- Label: "Best rate, guaranteed"
- H2: "Booking direct is always the better price."
- Body paragraph
- 3 bullet points: "Lowest available rate, every time", "Flexible cancellation up to 14 days before arrival", "Complimentary welcome drink on arrival"

**Form success message**
- H3: "Thank you. We'll be in touch within a few hours."
- Body: "A confirmation has been sent to your email…"

**Form fine print**
- "No payment is taken at this stage. We'll confirm by email — usually within a few hours."

### ALREADY SANITY
- Nothing

---

## FILE: src/components/Nav.astro

### HARDCODED
- Logo text: "La Cueva de Miravet"
- Nav link labels (Stay, Experiences, Location, Journal, Book) — from i18n `ui.ts`, not Sanity

### ALREADY SANITY
- Nothing

---

## FILE: src/components/Footer.astro

### HARDCODED
- Logo: "La Cueva de Miravet"
- Tagline: from i18n `t('footer.tagline')` — not Sanity
- Social Instagram URL: `#` (no real URL)
- Social Pinterest URL: `#` (no real URL)
- Contact email: `hola@lacuevademiravet.com`
- Address: "Cabanes, Castellón, Spain"
- Guarantee: "Best rate guaranteed — book direct."
- Copyright credit: "A Nomada project"

### ALREADY SANITY
- Nothing

---

## FILE: src/components/RoomCard.astro

### HARDCODED
- "From €X / night" suffix text (structural)

### ALREADY SANITY
- name, slug, tagline/bedConfig, view, priceFrom, images[0] — all from Sanity room document

---

## Summary — Schema Coverage Needed

| Content area | Current schema | Gap |
|---|---|---|
| Homepage hero, intro, amenities, testimonials, activities teaser, rooms section | `siteSettings` (partial: heroTitle, heroSubtitle) | New `homePage` singleton |
| /stay page-level copy + room-detail shared copy (what's included, booking card bullets) | None | New `stayPage` singleton |
| /experiences page-level copy + all 5 experience cards | `experience` exists but missing: tag, price, priceUnit, groupSize, isFeatured; page never fetches | Extend `experience`; new `experiencesPage` singleton |
| /location entire page | None | New `locationPage` singleton |
| /book page sidebar, steps, guarantee | None | New `bookPage` singleton |
| Room detail `h2` headline | `room` schema — field missing | Extend `room` with `introH2` |
| Room detail `description` body | `room.description` field exists | Wire `[slug].astro` to use it (Phase 3) |
| Journal body (Portable Text) | `journalPost.body` field exists | Install `@portabletext/astro`, wire (Phase 3) |
| Footer tagline, social URLs, phone, guarantee | `siteSettings` partial | Extend `siteSettings` |
