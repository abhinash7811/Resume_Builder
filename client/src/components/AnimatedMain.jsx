import React from 'react'
import { motion } from 'framer-motion'

const MotionMain = motion.main

const AnimatedMain = ({ children, className = '', ...props }) => (
  <MotionMain initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.24, ease: 'easeOut' }} className={className} {...props}>
    {children}
  </MotionMain>
)

export default AnimatedMain
