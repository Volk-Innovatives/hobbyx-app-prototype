HobbyX — Production Static Build
================================
Built: 2026-06-18
Source: HobbyX App.html (faithful 1:1 — same screens & controls, no live compiler)

HOW TO USE
----------
Open  index.html  in Chrome (double-click, or host the whole folder).

WHAT'S INSIDE
-------------
index.html    → entry point (open this)
styles.css    → all styles (Tailwind compiled static + app styles)
script.js     → the whole app, precompiled (no Babel/CDN at runtime)
assets/       → logos, card slabs, packet art, fonts' fallbacks, React

NOTES
-----
- Third-party card photos (Pokémon / Yu-Gi-Oh! CDNs) load from their original
  URLs and need internet — they cannot be bundled (the CDNs block copying).
  Everything else is local and works offline.
- This is the LATEST build. Ignore older folders: HobbyX-Production/,
  "Iteration 1 production/", "Iteration 3 Production/".
