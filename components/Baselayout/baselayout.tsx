import React from 'react'
import { Navbar, Footer } from '../Reusables'
// import { motion } from "framer-motion";

interface props{
 children:React.ReactNode
   }
export default function Baselayout ({children}:props) {
  return (
    <>
    {/* <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 50, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  > */}
    <Navbar/>
    {children}
    <Footer/>
    {/* </motion.div> */}
    </>
  )
}
