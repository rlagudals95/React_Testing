import '../styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <title>react-testing</title>
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-48x48.png"
          sizes="48x48"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-96x96.png"
          sizes="96x96"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-128x128.png"
          sizes="128x128"
          type="image/png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
