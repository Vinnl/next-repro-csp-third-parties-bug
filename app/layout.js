import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleTagManager gtmId={process.env.GA_TOKEN}/>
    </html>
  );
}
