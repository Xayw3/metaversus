import './navbar.scss';
import { motion } from 'framer-motion';
import { navVariants } from '../../assets/animations/motion';

const Navbar = () => {
  console.log();

  return (
    <motion.nav variants={navVariants} initial="hidden" whileInView="show" className="nav">
      juist text
    </motion.nav>
  );
};

export default Navbar;
