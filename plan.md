# Content Update Plan - Estie Woreda Website

Update the website with detailed overview and demographic data for Estie Woreda.

## 1. Asset Generation
- Generate images for:
    - "Sabero Dilde Bridge over the Abay River, connecting Estie and Hulet Ej Enese"
    - "Estie Densa mountain with Chena and Wanka rivers flowing around it"
    - "Agricultural market in Estie Woreda, Ethiopia"

## 2. Translation Updates (`src/lib/translations.ts`)
- Add new keys to `Translations` interface for detailed overview and demographic stats.
- Populate `en` and `am` objects with the provided textual data.
- Structure:
    - `about.overviewTitle`, `about.overviewText`
    - `about.bridgeTitle`, `about.bridgeText`
    - `about.incidentTitle`, `about.incidentText`
    - `kebeles.statsTitle`
    - `kebeles.stats2005`
    - `kebeles.stats1994`
    - `kebeles.demographics` (detailed breakdown)

## 3. About Page Update (`src/pages/About.tsx`)
- Replace/Extend sections with the new Overview data.
- Add a section for the Sabero Dilde bridge.
- Add a section for the historical 2002 incident.
- Use the newly generated images.

## 4. Kebeles Page Update (`src/pages/Kebeles.tsx`)
- Add a "Demographics" section before or after the Kebele list/map.
- Display stats in a visually appealing card-based or grid-based layout using `shadcn/ui` components.
- Include icons for male/female distribution, urban/rural split, and religion/ethnicity.

## 5. Verification
- Validate the build.
- Ensure language toggle correctly switches all new content.
- Verify responsive layout on mobile.
