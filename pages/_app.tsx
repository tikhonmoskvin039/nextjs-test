import NavBar from "@/components/NavBar/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <div className="pageContainer">
        <Component {...pageProps} />
      </div>
    </>
  );
}
