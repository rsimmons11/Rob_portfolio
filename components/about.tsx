'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');
 
  return (
    <motion.section
      ref={ref} 
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
      >
      <SectionHeading>About me</SectionHeading>
      <p>
        After years in the{" "}
        <span className="font-medium">logistics</span> game, I decided to spice things up with a side of coding. Now, I'm rocking it as a{" "}
        <span className="font-medium">full-stack web developer</span>.{" "}I thrive on the thrill of problem-solving in programming—it's like  
        <span className="italic"> cracking a code</span> that fuels my endless quest for <span className="underline">knowledge</span>. My go-to tech stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        , and I dabble in TypeScript. Always game for learning new tech tricks. 
      </p>
      <p>
      <span className="italic">Beyond the screen</span>, catch me enjoying sports, music, all forms of carbs, globe-trotting, and of course {" "}
        <span className="font-medium">Dr. Pepper</span>. Eager to level up and soak in more {" "}
        <span className="font-medium">wisdom</span>. Download my resume, and let’s chat it up! 
      </p>
    </motion.section>
  )
}
