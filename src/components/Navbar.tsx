"use client";

import React, { useState } from "react";
import { SiAerlingus } from "react-icons/si";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <SiAerlingus className="text-amber-400 text-2xl" />
              <span className="font-bold text-xl text-gray-800 dark:text-white">
                Mentory
              </span>
            </motion.div>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-6">
            {["Features", "Community", "Support"].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-transform duration-300"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-transform duration-300"
            >
              Sign Up
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose className="text-2xl" />
              ) : (
                <AiOutlineMenu className="text-2xl" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {["Features", "Community", "Support"].map((item, index) => (
                <motion.a
                  key={item}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{
                    delay: index * 0.1,
                  }}
                  href="#"
                  className="block text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 0.3 }}
                className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-transform duration-300 hover:scale-105">
                  Login
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-transform duration-300 hover:scale-105">
                  Sign Up
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
