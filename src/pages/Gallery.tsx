import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'matches', label: 'Match Photos' },
    { value: 'training', label: 'Training Sessions' },
    { value: 'team', label: 'Team Photos' },
    { value: 'fans', label: 'Fan Moments' },
  ];

  const images = [
    {
      id: 1,
      src: '/images/championships/1.png',
      alt: 'Football match action',
      category: 'matches',
      title: 'Championship Final',
      description: 'The team celebrating after winning the championship',
      date: '2024-01-15'
    },
    {
      id: 2,
      src: '/images/championships/2.png',
      alt: 'Football match action',
      category: 'matches',
      title: 'Championship Final',
      description: 'The team celebrating after winning the championship',
      date: '2024-01-15'
    },
    {
      id: 3,
      src: '/images/training-photos/1.png',
      alt: 'Team training session',
      category: 'training',
      title: 'Morning Training',
      description: 'Players during their morning training session',
      date: '2024-01-10'
    },
    {
      id: 4,
      src: '/images/team-photos/1.png',
      alt: 'Team group photo',
      category: 'team',
      title: 'Team Photo 2024',
      description: 'Official team photo for the 2024 season',
      date: '2024-01-05'
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/images/team-photos/2.png`,
      alt: 'Team group photo',
      category: 'team',
      title: 'Team Photo 2024',
      description: 'Official team photo for the 2024 season',
      date: '2024-01-05'
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/images/team-photos/3.png`,
      alt: 'Team group photo',
      category: 'team',
      title: 'Team Photo 2024',
      description: 'Official team photo for the 2024 season',
      date: '2024-01-05'
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/images/team-photos/4.png`,
      alt: 'Team group photo',
      category: 'team',
      title: 'Team Photo 2024',
      description: 'Official team photo for the 2024 season',
      date: '2024-01-05'
    },
    {
      id: 7,
      src: `${process.env.PUBLIC_URL}/images/team-photos/5.png`,
      alt: 'Team group photo',
      category: 'team',
      title: 'Team Photo 2024',
      description: 'Official team photo for the 2024 season',
      date: '2024-01-05'
    },
    {
      id: 8,
      src: `${process.env.PUBLIC_URL}/images/cheering/1.png`,
      alt: 'Fans cheering',
      category: 'fans',
      title: 'Fan Support',
      description: 'Amazing support from our loyal fans',
      date: '2024-01-12'
    },
    {
      id: 9,
      src: `${process.env.PUBLIC_URL}/images/cheering/2.png`,
      alt: 'Fans cheering',
      category: 'fans',
      title: 'Fan Support',
      description: 'Amazing support from our loyal fans',
      date: '2024-01-12'
    },
    {
      id: 10,
      src: `${process.env.PUBLIC_URL}/images/cheering/3.png`,
      alt: 'Fans cheering',
      category: 'fans',
      title: 'Fan Support',
      description: 'Amazing support from our loyal fans',
      date: '2024-01-12'
    },
    {
      id: 11,
      src: `${process.env.PUBLIC_URL}/images/goal-celebration/1.png`,
      alt: 'Goal celebration',
      category: 'matches',
      title: 'Goal Celebration',
      description: 'Players celebrating a crucial goal',
      date: '2024-01-08'
    },
    {
      id: 12,
      src: `${process.env.PUBLIC_URL}/images/skill-training/1.png`,
      alt: 'Training drills',
      category: 'training',
      title: 'Skill Training',
      description: 'Players working on their technical skills',
      date: '2024-01-03'
    },
    {
      id: 13,
      src: `${process.env.PUBLIC_URL}/images/skill-training/2.png`,
      alt: 'Training drills',
      category: 'training',
      title: 'Skill Training',
      description: 'Players working on their technical skills',
      date: '2024-01-03'
    },
    {
      id: 14,
      src: `${process.env.PUBLIC_URL}/images/skill-training/3.png`,
      alt: 'Training drills',
      category: 'training',
      title: 'Skill Training',
      description: 'Players working on their technical skills',
      date: '2024-01-03'
    },
    {
      id: 15,
      src: `${process.env.PUBLIC_URL}/images/skill-training/4.png`,
      alt: 'Training drills',
      category: 'training',
      title: 'Skill Training',
      description: 'Players working on their technical skills',
      date: '2024-01-03'
    },
    {
      id: 16,
      src: `${process.env.PUBLIC_URL}/images/skill-training/5.png`,
      alt: 'Training drills',
      category: 'training',
      title: 'Skill Training',
      description: 'Players working on their technical skills',
      date: '2024-01-03'
    },
    {
      id: 17,
      src: `${process.env.PUBLIC_URL}/images/skill-training/6.png`,
      alt: 'Training drills',
      category: 'training',
      title: 'Skill Training',
      description: 'Players working on their technical skills',
      date: '2024-01-03'
    },
    {
      id: 18,
      src: `${process.env.PUBLIC_URL}/images/skill-training/7.png`,
      alt: 'Training drills',
      category: 'training',
      title: 'Skill Training',
      description: 'Players working on their technical skills',
      date: '2024-01-03'
    },
    {
      id: 19,
      src: `${process.env.PUBLIC_URL}/images/skill-training/8.png`,
      alt: 'Training drills',
      category: 'training',
      title: 'Skill Training',
      description: 'Players working on their technical skills',
      date: '2024-01-03'
    },
    {
      id: 20,
      src: `${process.env.PUBLIC_URL}/images/skill-training/9.png`,
      alt: 'Training drills',
      category: 'training',
      title: 'Skill Training',
      description: 'Players working on their technical skills',
      date: '2024-01-03'
    },

  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

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
              <Image size={40} color="#ffffff" />
              <h1>Photo Gallery</h1>
            </div>
            <p style={{ fontSize: '1.2rem', color: '#cccccc' }}>
              Relive the best moments from our journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{ padding: '40px 0', background: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textAlign: 'center' }}
          >
            <h3 style={{ marginBottom: '2rem' }}>Filter by Category</h3>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              {categories.map((category) => (
                <motion.button
                  key={category.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.value)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: selectedCategory === category.value ? '#ffffff' : 'transparent',
                    color: selectedCategory === category.value ? '#000000' : '#ffffff',
                    border: '2px solid #ffffff',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="gallery-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => setSelectedImage(index)}
              >
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1.5rem',
                  }}>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem' }}>{image.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: '#cccccc' }}>
                        {new Date(image.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: 'center',
                padding: '4rem 0',
                color: '#cccccc',
              }}
            >
              <h3>No images found for the selected category</h3>
              <p>Check back later for more photos</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
            }}>
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '-60px',
                  right: '0',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#ffffff',
                  padding: '1rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <h2 style={{ marginBottom: '1rem' }}>Share Your Moments!</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#cccccc' }}>
              Tag us in your photos and be featured in our gallery.
            </p>
            {/* <button className="btn">
              Submit Photos
            </button> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery; 