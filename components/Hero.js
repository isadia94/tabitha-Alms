import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.6,
    },
  },
};

const buttonVariants = {
  hidden: {
    scale: 1.1,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const fadeInUp = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
function Hero() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative h-screen "
    >
      <div className="flex justify-between">
        <div className="h-screen flex flex-col  justify-center pl-6 ">
          <motion.p
            variants={fadeInUp}
            className="font-Poppins text-sm font-bold text-green-800 mb-4"
          >
            COMING TOGETHER TO
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-Magenda font-extrabold text-7xl max-w-[550px]"
          >
            <span className="text-yellow-400 shadow-md">Empower</span> People,
            Help the Needy & Transform{" "}
            <span className="text-yellow-400 shadow-md">Lives</span>
          </motion.h1>
          <motion.div variants={buttonVariants} className="relative mt-6">
            <p className="absolute left-9 text-xs font-Poppins font-medium">
              Learn More
            </p>
            <svg
              width="114"
              height="32"
              viewBox="0 0 114 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="font-bold"
            >
              <circle cx="16" cy="16" r="15.5" stroke="#308a00" />
              <path
                d="M113.354 16.3536C113.549 16.1583 113.549 15.8417 113.354 15.6464L110.172 12.4645C109.976 12.2692 109.66 12.2692 109.464 12.4645C109.269 12.6597 109.269 12.9763 109.464 13.1716L112.293 16L109.464 18.8284C109.269 19.0237 109.269 19.3403 109.464 19.5355C109.66 19.7308 109.976 19.7308 110.172 19.5355L113.354 16.3536ZM16 16.5H113V15.5H16V16.5Z"
                fill="#308a00"
              />
            </svg>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, damping: 10 }}
          className="h-screen w-[50%] relative"
        >
          <Image src="/img4.jpeg" layout="fill" objectFit="cover" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
