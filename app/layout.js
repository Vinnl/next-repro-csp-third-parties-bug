import { headers } from 'next/headers'
import { GoogleTagManager } from './GoogleTagManager'

export default function RootLayout({ children }) {
  const nonce = headers().get('x-nonce')

  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleTagManager gtmId={process.env.GA_TOKEN} nonce={nonce}/>
    </html>
  );
}
