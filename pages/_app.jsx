import { useEffect, useState } from "react";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [readyPage, setReadyPage] = useState(false);

  useEffect(() => {
    setReadyPage(true);
  }, []);

  return readyPage ? (
    <AnimatePresence mode="wait">
      <motion.div key={router.route}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  ) : null;
}

export default MyApp;
