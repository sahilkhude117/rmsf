import { motion } from "framer-motion"

export const FadedText = () => {

  return (
    <motion.h1
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5}}
      className="text-3xl font-bold"
    >
      Welcome to my site! 
    </motion.h1>
  )
}