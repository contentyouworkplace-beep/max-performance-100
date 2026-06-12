import Script from "next/script"

// Microsoft Clarity — free heatmaps, session recordings, and analytics.
// Set NEXT_PUBLIC_CLARITY_PROJECT_ID in Vercel env vars (get it from
// https://clarity.microsoft.com → your project → Settings → Overview).
// Renders nothing if the env var is missing, so dev/preview stay clean.

export default function Clarity() {
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID
  if (!projectId) return null
  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${projectId}");`}
    </Script>
  )
}
