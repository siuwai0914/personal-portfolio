import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./style";
import {
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  ExtraCurricular,
  Footer,
  Projects,
  BlogPosts,
  Loading,
} from "./components";

const App = () => {
  // false on the server (prerender) and on the first client render,
  // so the HTML matches and hydration doesn't complain.
  const [showLoader, setShowLoader] = React.useState(false);

  React.useEffect(() => {
    setShowLoader(true);
    const timer = setTimeout(() => setShowLoader(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Loader is only an overlay now; the real content is always in the HTML */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="loading"
            className="fixed inset-0 z-[100] bg-primary"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      <section>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart} pt-[80px]`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <SkillsAndExperience />
            <Education />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Projects />
            <BlogPosts enabled={false} />
            <ExtraCurricular />
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
};

export default App;