import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Image, Users, Trophy } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Calendar size={40} />,
      title: 'Match Schedule',
      description: 'Stay updated with all upcoming matches and events',
      link: '/schedule'
    },
    {
      icon: <Image size={40} />,
      title: 'Photo Gallery',
      description: 'Explore amazing moments captured on and off the field',
      link: '/gallery'
    },
    {
      icon: <Users size={40} />,
      title: 'Team Profiles',
      description: 'Meet our talented players and coaching staff',
      link: '/about'
    },
    {
      icon: <Trophy size={40} />,
      title: 'Achievements',
      description: 'Celebrate our victories and milestones',
      link: '/about'
    }
  ];

  const stats = [
    { number: '50+', label: 'Matches Played' },
    { number: '1000+', label: 'Happy Fans' },
    { number: '25+', label: 'Team Members' },
    { number: '10+', label: 'Trophies Won' }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container">
          <div className="hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}>
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ zIndex: 2 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                style={{ marginBottom: '1.5rem' }}
              >
                Welcome to the Future of
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(45deg, #ffffff, #cccccc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Football
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                style={{
                  fontSize: '1.3rem',
                  color: '#cccccc',
                  marginBottom: '2rem',
                  lineHeight: 1.6,
                }}
              >
                Experience the passion, skill, and excitement of football like never before. 
                Join us on this incredible journey as we redefine the beautiful game.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <Link to="/schedule" className="btn">
                  View Schedule
                  <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                </Link>
                <Link to="/gallery" className="btn btn-outline">
                  Explore Gallery
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  width: '300px',
                  height: '300px',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <motion.img
                  src={process.env.PUBLIC_URL + '/images/football.png'}
                  alt="Football"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 60px rgba(255, 255, 255, 0.2))',
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2>What We Offer</h2>
            <p>Discover everything footballlab.lk has to offer</p>
          </motion.div>

          <div className="grid grid-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card"
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{
                    color: '#ffffff',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                  }}>
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                </div>
                <p style={{ marginBottom: '1.5rem' }}>{feature.description}</p>
                <Link to={feature.link} className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
                  Learn More
                  <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{
        background: 'rgba(255, 255, 255, 0.02)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #ffffff, #cccccc)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.number}
                </motion.div>
                <p style={{ color: '#cccccc', fontSize: '1.1rem' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{ marginBottom: '1rem' }}>Ready to Join the Action?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Don't miss out on the latest matches, updates, and exclusive content.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/schedule" className="btn">
                View Schedule
                <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 