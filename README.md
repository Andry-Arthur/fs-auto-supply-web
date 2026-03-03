# Fs Auto Supply

Production-ready starter for a simple Fs Auto Supply storefront built with Next.js, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Production build

Run the same checks Vercel will rely on:

```bash
npm run lint
npm run build
npm run start
```

The production server runs at `http://localhost:3000` by default.

## Routes

- `/`
- `/shop`
- `/about`
- `/contact`

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, create a new project and import the repository.
3. Keep the default framework preset as `Next.js`.
4. No environment variables are required.
5. Click Deploy.

## Notes

- The project uses static placeholder visuals instead of external image URLs, so there are no broken image dependencies.
- Metadata and icon assets are included in the app directory for automatic Next.js handling.
