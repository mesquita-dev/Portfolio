import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideUp, opacity } from "./animation";

const words = ["Olá", "Hello", "Bonjour", "Ciao", "Guten tag", "Hallo", "你好"];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  const hasVisitedBefore = sessionStorage.getItem('hasVisitedBefore')

  if (hasVisitedBefore) {
    return null;
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen flex items-center justify-center bg-[#202020] fixed z-50"
    >
      {dimension.width > 0 &&
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="text-5xl flex text-white items-center absolute z-10"
          >
            <span className="block w-[10px] h-[10px] bg-white rounded-full mr-3"></span>
            {words[index]}
          </motion.p>
          <svg className="absolute top-0 w-full h-[calc(100% + 300px)]">
            <motion.path
              variants={curve} initial="initial" exit="exit"
              className="fill-[#202020]"
            ></motion.path>
          </svg>
        </>
      }
    </motion.div>
  );
};

export default Preloader;
