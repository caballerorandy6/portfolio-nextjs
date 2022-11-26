import { useEffect, useState } from "react";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [readyPage, setReadyPage] = useState(false);

  useEffect(() => {
    setReadyPage(true);
  }, []);

  return readyPage ? <Component {...pageProps} /> : null;
}

export default MyApp;
