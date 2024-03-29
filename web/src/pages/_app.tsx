import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Metadata } from 'next'
import { ContextProvider } from "@/context";
import { ClientOnly } from "@/config/ClientOnly";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function App({ Component, pageProps }: AppProps) {

  return <ClientOnly>
    <ContextProvider >
      <Component {...pageProps} />
    </ContextProvider>
  </ClientOnly>
}
