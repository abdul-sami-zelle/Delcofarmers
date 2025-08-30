import "./globals.css";

export const metadata = {
  title: "Delco Farmers Market | Weekly Sales | Search In-Store Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/assets/Images/delco-logo.png" />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

