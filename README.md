# Mohammad Javad Bahonar — CV site

A small, dependency-free static website for the uploaded CV. It works from any Linux web server and can be deployed directly to GitHub Pages.

## Run locally

From this folder, run one of these commands:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy to GitHub Pages

1. Create a GitHub repository (or use an existing one).
2. Copy all files in this folder into the repository root, keeping `assets/resume.pdf` in place.
3. Commit and push to the default branch.
4. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select the default branch and `/ (root)`, then save.

No build step or package installation is required.

## Deploy to a Linux server

Copy the complete folder to the web root (for example `/var/www/cv`) and point Nginx or Apache at that folder. The entry file is `index.html`.

The PDF is intentionally loaded from `assets/resume.pdf`; keep that relative path when moving the site.
