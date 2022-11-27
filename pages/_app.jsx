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
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  ) : null;
}

export default MyApp;
