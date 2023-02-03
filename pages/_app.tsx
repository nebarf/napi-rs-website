import { Analytics } from '@vercel/analytics/react'

import '../style.css'

export default function Nextra({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  const layout = getLayout(<Component {...pageProps} />)
  return (
    <>
      <Analytics />
      {layout}
    </>
  )
}
