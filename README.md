
  # Website with Taskbar Navigation

  This is a code bundle for Website with Taskbar Navigation. The original project is available at https://www.figma.com/design/ltVlTLFFmzxUcPxCSSoM5s/Website-with-Taskbar-Navigation.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Hosting (production)

  - **Build:** `npm run build` — outputs static files to `dist/`.
  - **Preview build locally:** `npm run preview` — serves `dist/` (run after `npm run build`).

  ### Hosting on GitHub Pages

  1. Push this project to a **new GitHub repository** (use this folder as the repo root so `.github/workflows` is at the top).
  2. In the repo: **Settings → Pages → Build and deployment**: set **Source** to **GitHub Actions**.
  3. On every push to `main`, the workflow builds the site and deploys it. The site will be at:
     `https://<your-username>.github.io/<repo-name>/`
  4. Ensure `package-lock.json` is committed so the workflow can run `npm ci`.
  