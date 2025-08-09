import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['info@footballlab.lk', 'support@footballlab.lk'],
      link: 'mailto:info@footballlab.lk'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: ['+94 11 234 5678', '+94 77 123 4567'],
      link: 'tel:+94112345678'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      details: ['123 Football Street', 'Colombo 03, Sri Lanka'],
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock size={24} />,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 8:00 PM', 'Sat-Sun: 9:00 AM - 6:00 PM'],
      link: null
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
              <Mail size={40} color="#ffffff" />
              <h1>Contact Us</h1>
            </div>
            <p style={{ fontSize: '1.2rem', color: '#cccccc' }}>
              Get in touch with us for any inquiries or support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {contactInfo.map((info, index) => (
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
                  {info.icon}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} style={{ 
                    color: '#cccccc', 
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem'
                  }}>
                    {info.link ? (
                      <a 
                        href={info.link}
                        style={{ 
                          color: '#cccccc', 
                          textDecoration: 'none',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}
                      >
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section" style={{
        background: 'rgba(255, 255, 255, 0.02)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '2rem' }}>Send us a Message</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card"
                  style={{ textAlign: 'center' }}
                >
                  <CheckCircle size={60} color="#10b981" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ marginBottom: '1rem' }}>Message Sent!</h3>
                  <p style={{ color: '#cccccc', marginBottom: '2rem' }}>
                    Thank you for your message. We'll get back to you soon!
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="card">
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#ffffff',
                      fontWeight: '600',
                    }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '1rem',
                      }}
                      placeholder="Your full name"
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#ffffff',
                      fontWeight: '600',
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '1rem',
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#ffffff',
                      fontWeight: '600',
                    }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '1rem',
                      }}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#ffffff',
                      fontWeight: '600',
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '1rem',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                      }}
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="btn"
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>
              
              <div className="card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Visit Our Facility</h3>
                <p style={{ color: '#cccccc', marginBottom: '1rem' }}>
                  Come and experience our world-class training facilities. We offer tours 
                  and trial sessions for interested players and families.
                </p>
                <button className="btn btn-outline">
                  Schedule a Visit
                </button>
              </div>

              <div className="card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Join Our Program</h3>
                <p style={{ color: '#cccccc', marginBottom: '1rem' }}>
                  Ready to take your football skills to the next level? Learn about our 
                  training programs and enrollment process.
                </p>
                <button className="btn btn-outline">
                  Learn More
                </button>
              </div>

              <div className="card">
                <h3 style={{ marginBottom: '1rem' }}>Follow Us</h3>
                <p style={{ color: '#cccccc', marginBottom: '1rem' }}>
                  Stay connected with us on social media for the latest updates, 
                  match highlights, and behind-the-scenes content.
                </p>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                }}>
                  <button className="btn btn-outline" style={{ flex: 1 }}>
                    Facebook
                  </button>
                  <button className="btn btn-outline" style={{ flex: 1 }}>
                    Instagram
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            <h2 style={{ marginBottom: '2rem' }}>Frequently Asked Questions</h2>
            <div className="grid grid-2">
              {[
                {
                  question: 'What age groups do you train?',
                  answer: 'We offer programs for players aged 6-18 years old, with specialized training for different age groups.'
                },
                {
                  question: 'How much does training cost?',
                  answer: 'Our fees vary based on the program and age group. Contact us for detailed pricing information.'
                },
                {
                  question: 'Do you provide equipment?',
                  answer: 'Basic training equipment is provided, but players are encouraged to bring their own football boots.'
                },
                {
                  question: 'Can I try a session before joining?',
                  answer: 'Yes! We offer free trial sessions for new players. Contact us to schedule your trial.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <h3 style={{ marginBottom: '1rem' }}>{faq.question}</h3>
                  <p style={{ color: '#cccccc' }}>{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 