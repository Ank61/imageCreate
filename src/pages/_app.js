import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <Script src="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,500;1,500&display=swap" />
  </>)
}
