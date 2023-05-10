import { motion } from "framer-motion";

export default ({ toggle, isOpen }) => (
  <div
    onClick={toggle}
    className="flex flex-col justify-between cursor w-8 cursor-pointer gap-1 select-none mx-5"
  >
    <motion.div
      className="bg-light-text dark:bg-dark-text rounded-md h-1 w-8"
      animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
    />
    <motion.div
      className="bg-light-text dark:bg-dark-text rounded-md h-1 w-8"
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
    />
    <motion.div
      className="bg-light-text dark:bg-dark-text rounded-md h-1 w-8"
      animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
    />
  </div>
);
