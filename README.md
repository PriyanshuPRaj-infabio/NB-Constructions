# NB Constructions Static Clone

This repository contains a static mirror of the NB Constructions site.
The site entrypoint is `nbconstructions.com/index.html`, and the top-level folders contain downloaded asset files for the clone.

## What is included
- `nbconstructions.com/index.html` — main HTML page
- `cdn-cgi/`, `fonts.googleapis.com/`, `fonts.gstatic.com/`, `static.web-repository.com/`, `www.youtube.com/`, etc. — downloaded assets needed by the page
- `missing-assets.txt` — list of files that were not available during capture

## Deploying on GitHub + Vercel
1. Create a new GitHub repository.
2. Push this project to the repo root.
3. In Vercel, import the GitHub repository.
4. For the project settings, use:
   - Framework preset: `Other`
   - Build command: leave empty
   - Output directory: leave empty
   - Remove any custom Python entrypoint or Python project type setting if present
5. Deploy.

Vercel is configured via `vercel.json` to deploy this folder as a static site.
A new root-level `index.html` redirects `/` to `/nbconstructions.com/index.html`.

If you get the Python entrypoint error again, open the Vercel project settings and delete any configured `main.py` entrypoint or Python runtime setting, then re-deploy.

## Notes
- If you see broken images or missing files, inspect `missing-assets.txt`.
- This clone is intended as an independent static copy of the site.
