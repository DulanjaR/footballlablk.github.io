import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      {/* Football Animation */}
      <motion.div
        className="football"
        initial={{ 
          x: '-100vw',
          y: '50vh',
          rotate: 0,
          scale: 0.5
        }}
        animate={{ 
          x: '50vw',
          y: '50vh',
          rotate: 720,
          scale: 1
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 1]
        }}
        style={{
          width: '120px',
          height: '120px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <motion.img
          src="/images/foodball.png"
          alt="Football"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 10px 30px rgba(255, 255, 255, 0.3))',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Logo and Text */}
      <motion.div
        className="loading-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          textAlign: 'center',
          marginTop: '2rem',
        }}
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #ffffff, #cccccc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
          }}
        >
          footballlab.lk
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          style={{
            fontSize: '1.2rem',
            color: '#cccccc',
            marginBottom: '2rem',
          }}
        >
          Welcome to the future of football
        </motion.p>

        {/* Loading Bar */}
        <motion.div
          className="loading-bar"
          initial={{ width: 0 }}
          animate={{ width: '300px' }}
          transition={{ delay: 2.5, duration: 1 }}
          style={{
            width: '300px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '2px',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          <motion.div
            className="loading-progress"
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ delay: 2.5, duration: 1 }}
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #ffffff, #cccccc)',
              borderRadius: '2px',
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          style={{
            fontSize: '1rem',
            color: '#999999',
            marginTop: '1rem',
          }}
        >
          Loading amazing content...
        </motion.p>
      </motion.div>

      {/* Background Elements */}
      <motion.div
        className="background-elements"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      >
        {/* Animated Circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen; 