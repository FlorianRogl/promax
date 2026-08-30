import Link from 'next/link';

export default function GlobalNotFound() {
  return (
    <html lang="de-AT">
      <head>
        <title>404 – Seite nicht gefunden | PROMAX Project Management</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ fontFamily: 'sans-serif', display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ fontSize: '3rem', margin: 0 }}>404</h1>
          <p>Seite nicht gefunden.</p>
          <Link href="/de" style={{ color: '#1e3767' }}>Zur Startseite</Link>
        </div>
      </body>
    </html>
  );
}
