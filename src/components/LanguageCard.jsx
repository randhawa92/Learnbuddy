import { motion } from "framer-motion";

function LanguageCard({ language, onClick }) {

  return (

    <motion.div
      className="language-card"

      whileHover={{ scale: 1.05 }}

      whileTap={{ scale: 0.95 }}

      onClick={onClick}
    >

      <h2>{language}</h2>

    </motion.div>

  );
}

export default LanguageCard;