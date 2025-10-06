// src/pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  // Day 3 of 30 Days Code Snippet Challenge
  return <Layout>
      <Component {...pageProps} />
  </Layout>;
}
