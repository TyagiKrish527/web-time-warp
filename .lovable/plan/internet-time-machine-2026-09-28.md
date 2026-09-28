# Internet Time Machine

## Goal
Build a responsive, cinematic single-page experience where choosing a year activates a visual transformation and lets visitors explore a recreated internet era.

## Experience
- Open on a dark, neon museum-like landing scene with the title, subtitle, a central animated portal, and three clear actions: enter, explore the timeline, or travel randomly.
- Add a draggable, wheel-scrollable, keyboard-friendly horizontal timeline covering all requested eras, plus selectable years through 2026 and a distinct 2050 future destination.
- Use a brief portal/scan transition when changing eras, then update the full experience’s typography, surfaces, browser chrome, effects, and content to match that period.
- Keep persistent previous/current/next controls and a jump-to-year slider accessible across desktop, tablet, and mobile.

## Era Explorer
- Create an original simulated browser whose controls, tabs, address bar, and fake webpage visibly evolve by era without copying real brands.
- Provide concise “On This Year” cards for developments, technologies, devices, design, communication, and culture.
- Add expandable “What Changed?” panels across design, technology, browsers, search, social media, communication, devices, and trends.
- Build a clickable Internet Evolution path from static HTML through the future web, with stage-specific detail.
- Clearly label 2050 as “SPECULATIVE FUTURE CONCEPT” and phrase all future content as fiction, not prediction.

## Visual and Interaction System
- Define a shared dark-future design system and separate semantic era themes for early web, Web 1.0, dot-com, social, smartphone, modern, AI, and future modes.
- Use restrained scanlines, particles, depth, portal motion, and transition states; support reduced-motion preferences.
- Add an opt-in sound toggle only, with short generated interface tones and no autoplay.
- Ensure controls have accessible labels, focus states, adequate contrast, stable sizing, and touch-friendly behavior.

## Structure
- Keep historical and speculative content in typed static data so it can later be replaced by an API.
- Split the experience into focused reusable pieces: portal, timeline, browser simulation, year facts, change panels, evolution visualization, and persistent controls.
- Keep selection and transition behavior in local React state; persist nothing externally.

## Validation
- Verify the landing-to-era flow, timeline drag/click/keyboard behavior, random travel, year slider, sound opt-in, accordions, and browser interactions.
- Check representative early-web, modern, and 2050 transformations at desktop and mobile widths.
- Confirm metadata, reduced-motion behavior, no runtime errors, and a clean production build.
