import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ahmed Hameem',
      position: 'Coach',
      image: '/images/coaches/1.png',
      description: 'Former professional player with 5+ years of coaching experience'
    },
    {
      name: 'Arshad',
      position: 'Coach',
      image: '',
      description: 'Specializes in youth development and tactical analysis'
    },
    // {
    //   name: 'Mike Chen',
    //   position: 'Fitness Coach',
    //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    //   description: 'Expert in sports science and performance optimization'
    // },
    // {
    //   name: 'Emma Davis',
    //   position: 'Team Manager',
    //   image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    //   description: 'Handles team logistics and player welfare'
    // }
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Championship Winners',
      description: 'Won the Premier League Championship',
      icon: <Trophy size={24} />
    },
    {
      year: '2022',
      title: 'Cup Champions',
      description: 'Victory in the National Cup Competition',
      icon: <Trophy size={24} />
    },
    {
      year: '2021',
      title: 'Youth League Champions',
      description: 'Under-21 team won the Youth League',
      icon: <Trophy size={24} />
    },
    {
      year: '2020',
      title: 'Community Award',
      description: 'Recognized for community outreach programs',
      icon: <Heart size={24} />
    }
  ];

  const values = [
    {
      icon: <Target size={40} />,
      title: 'Excellence',
      description: 'Striving for excellence in everything we do'
    },
    {
      icon: <Users size={40} />,
      title: 'Teamwork',
      description: 'Building strong bonds and working together'
    },
    {
      icon: <Heart size={40} />,
      title: 'Passion',
      description: 'Playing with heart and determination'
    },
    {
      icon: <Trophy size={40} />,
      title: 'Success',
      description: 'Achieving our goals through hard work'
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        padding: '100px 0 60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1rem',
            }}>
              <Users size={40} color="#ffffff" />
              <h1>About Us</h1>
            </div>
            <p style={{ fontSize: '1.2rem', color: '#cccccc' }}>
              Learn more about our team, mission, and achievements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#cccccc' }}>
                At footballlab.lk, we are passionate about developing the next generation of football talent. 
                Our mission is to provide world-class training, facilities, and opportunities for players 
                to reach their full potential.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#cccccc' }}>
                We believe in the power of football to bring people together, build character, and create 
                lasting memories. Through dedication, hard work, and a love for the beautiful game, 
                we strive to achieve excellence both on and off the field.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ marginBottom: '1rem', color: '#cccccc' }}>
                To become the leading football development center in Sri Lanka, recognized for:
              </p>
              <ul style={{ color: '#cccccc', paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Excellence in player development</li>
                <li style={{ marginBottom: '0.5rem' }}>Innovative training methods</li>
                <li style={{ marginBottom: '0.5rem' }}>Community engagement</li>
                <li style={{ marginBottom: '0.5rem' }}>Professional standards</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{
        background: 'rgba(255, 255, 255, 0.02)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-2">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card"
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  color: '#ffffff',
                  marginBottom: '1rem',
                }}>
                  {value.icon}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{value.title}</h3>
                <p style={{ color: '#cccccc' }}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2>Our Team</h2>
            <p>Meet the dedicated professionals behind our success</p>
          </motion.div>

          <div className="grid grid-2">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid rgba(255, 255, 255, 0.2)',
                  }}
                />
                <div>
                  <h3 style={{ marginBottom: '0.5rem' }}>{member.name}</h3>
                  <p style={{ 
                    color: '#ffffff', 
                    fontWeight: '600',
                    marginBottom: '0.5rem' 
                  }}>
                    {member.position}
                  </p>
                  <p style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section" style={{
        background: 'rgba(255, 255, 255, 0.02)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2>Our Achievements</h2>
            <p>Celebrating our milestones and victories</p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card"
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  color: '#ffffff',
                  marginBottom: '1rem',
                }}>
                  {achievement.icon}
                </div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '1rem',
                }}>
                  {achievement.year}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{achievement.title}</h3>
                <p style={{ color: '#cccccc' }}>{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {[
              { number: '150+', label: 'Players Trained' },
              { number: '25+', label: 'Years Experience' },
              { number: '50+', label: 'Trophies Won' },
              { number: '1000+', label: 'Happy Families' }
            ].map((stat, index) => (
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
      <section style={{
        background: 'rgba(255, 255, 255, 0.02)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '60px 0',
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{ marginBottom: '1rem' }}>Join Our Team!</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#cccccc' }}>
              Ready to be part of something special? Contact us to learn more about joining our program.
            </p>
            <button className="btn">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 