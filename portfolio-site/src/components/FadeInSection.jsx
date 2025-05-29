/* eslint-disable no-unused-vars -- motion used in JSX context */


import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FadeInSection({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
