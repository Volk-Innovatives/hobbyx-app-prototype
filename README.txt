
HobbyX — Production Static Build
================================
Built: 2026-06-21 (fresh rebuild — regenerated from source, no build reused)
Source: HobbyX App.html (faithful 1:1 — same screens & controls, no live compiler)

HOW TO USE
----------
Open  index.html  in Chrome (double-click, or host the whole folder).

WHAT'S INSIDE
-------------
index.html    -> entry point (open this)
styles.css    -> all styles (Tailwind compiled static + reveal + app styles)
script.js     -> the whole app, precompiled (no Babel/CDN at runtime)
assets/       -> logos, card slabs, packet art, placeholder, React

NOTES
-----
- Third-party card photos (Pokemon / Yu-Gi-Oh! CDNs) load from their original
  URLs and need internet -- they cannot be bundled. Everything else works offline.
- Cards without a photo show a clean "no image yet" placeholder.
- This is the LATEST build. Ignore older folders.
