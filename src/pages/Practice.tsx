import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Target } from 'lucide-react';

const Practice: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');

  const months = [
    { value: 'all', label: 'All Months' },
    { value: 'jan', label: 'January' },
    { value: 'feb', label: 'February' },
    { value: 'mar', label: 'March' },
    { value: 'apr', label: 'April' },
    { value: 'may', label: 'May' },
    { value: 'jun', label: 'June' },
  ];

  const practiceSessions = [
    {
      id: 1,
      date: '2024-01-15',
      time: '16:00',
      duration: '2 hours',
      sessionType: 'Technical Training',
      coach: 'Coach Silva',
      venue: 'Training Ground A',
      maxParticipants: 20,
      currentParticipants: 15,
      status: 'upcoming',
      month: 'jan',
      description: 'Focus on ball control, passing accuracy, and shooting techniques'
    },
    {
      id: 2,
      date: '2024-01-18',
      time: '17:30',
      duration: '1.5 hours',
      sessionType: 'Tactical Training',
      coach: 'Coach Ahmed',
      venue: 'Main Field',
      maxParticipants: 25,
      currentParticipants: 22,
      status: 'upcoming',
      month: 'jan',
      description: 'Team formation, positioning, and game strategy'
    },
    {
      id: 3,
      date: '2024-01-22',
      time: '15:00',
      duration: '2.5 hours',
      sessionType: 'Fitness Training',
      coach: 'Coach Arshad',
      venue: 'Gym & Field',
      maxParticipants: 18,
      currentParticipants: 12,
      status: 'upcoming',
      month: 'jan',
      description: 'Strength training, endurance, and speed work'
    },
    {
      id: 4,
      date: '2024-02-02',
      time: '16:30',
      duration: '2 hours',
      sessionType: 'Goalkeeper Training',
      coach: 'Coach Ahmed',
      venue: 'Goalkeeper Zone',
      maxParticipants: 8,
      currentParticipants: 6,
      status: 'upcoming',
      month: 'feb',
      description: 'Specialized training for goalkeepers'
    },
    {
      id: 5,
      date: '2024-02-08',
      time: '18:00',
      duration: '1.5 hours',
      sessionType: 'Youth Development',
      coach: 'Coach Ahmed',
      venue: 'Youth Training Area',
      maxParticipants: 15,
      currentParticipants: 14,
      status: 'upcoming',
      month: 'feb',
      description: 'Age-specific training for young players'
    },
    {
      id: 6,
      date: '2024-02-15',
      time: '17:00',
      duration: '2 hours',
      sessionType: 'Match Practice',
      coach: 'Coach Silva',
      venue: 'Main Stadium',
      maxParticipants: 30,
      currentParticipants: 28,
      status: 'upcoming',
      month: 'feb',
      description: 'Full match simulation and practice games'
    },
    {
      id: 7,
      date: '2024-03-01',
      time: '16:00',
      duration: '2 hours',
      sessionType: 'Advanced Skills',
      coach: 'Coach Rodriguez',
      venue: 'Training Ground B',
      maxParticipants: 20,
      currentParticipants: 18,
      status: 'upcoming',
      month: 'mar',
      description: 'Advanced dribbling, free kicks, and set pieces'
    },
    {
      id: 8,
      date: '2024-03-08',
      time: '17:30',
      duration: '1.5 hours',
      sessionType: 'Recovery Session',
      coach: 'Coach Johnson',
      venue: 'Recovery Center',
      maxParticipants: 25,
      currentParticipants: 20,
      status: 'upcoming',
      month: 'mar',
      description: 'Light training and recovery exercises'
    }
  ];

  const filteredSessions = selectedMonth === 'all' 
    ? practiceSessions 
    : practiceSessions.filter(session => session.month === selectedMonth);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#10b981';
      case 'live': return '#ef4444';
      case 'upcoming': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'live': return 'Live Now';
      case 'upcoming': return 'Upcoming';
      default: return 'TBD';
    }
  };

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
              <Target size={40} color="#ffffff" />
              <h1>Practice Schedule</h1>
            </div>
            <p style={{ fontSize: '1.2rem', color: '#cccccc' }}>
              Stay updated with all our upcoming practice sessions and training programs
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
            <h3 style={{ marginBottom: '2rem' }}>Filter by Month</h3>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              {months.map((month) => (
                <motion.button
                  key={month.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedMonth(month.value)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: selectedMonth === month.value ? '#ffffff' : 'transparent',
                    color: selectedMonth === month.value ? '#000000' : '#ffffff',
                    border: '2px solid #ffffff',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {month.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <div className="timeline-container" style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div className="timeline-line" style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, #ffffff, #cccccc, #ffffff)',
              transform: 'translateX(-50%)',
              zIndex: 1,
            }} />

            {filteredSessions.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="timeline-item"
                style={{
                  position: 'relative',
                  width: '45%',
                  marginBottom: '3rem',
                  marginLeft: index % 2 === 0 ? '0' : 'auto',
                  marginRight: index % 2 === 0 ? 'auto' : '0',
                }}
              >
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: index % 2 === 0 ? 'calc(100% + 2rem)' : '-2rem',
                  top: '2rem',
                  width: '1rem',
                  height: '1rem',
                  background: getStatusColor(session.status),
                  borderRadius: '50%',
                  border: '3px solid #ffffff',
                  zIndex: 2,
                }} />

                {/* Session Card */}
                <motion.div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '2rem',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Session Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                  }}>
                    <div>
                      <h3 style={{ marginBottom: '0.5rem', color: '#ffffff' }}>
                        {session.sessionType}
                      </h3>
                      <p style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                        {session.description}
                      </p>
                    </div>
                    <div style={{
                      padding: '0.5rem 1rem',
                      background: getStatusColor(session.status),
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      color: '#ffffff',
                    }}>
                      {getStatusText(session.status)}
                    </div>
                  </div>

                  {/* Session Details */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={16} color="#cccccc" />
                      <span style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                        {new Date(session.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={16} color="#cccccc" />
                      <span style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                        {session.time} ({session.duration})
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={16} color="#cccccc" />
                      <span style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                        {session.venue}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Users size={16} color="#cccccc" />
                      <span style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                        {session.currentParticipants}/{session.maxParticipants} participants
                      </span>
                    </div>
                  </div>

                  {/* Coach Info */}
                  <div style={{
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                      }}>
                        {session.coach.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div style={{ color: '#ffffff', fontWeight: '600' }}>
                          {session.coach}
                        </div>
                        <div style={{ color: '#cccccc', fontSize: '0.8rem' }}>
                          Head Coach
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {filteredSessions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: 'center',
                padding: '4rem 0',
                color: '#cccccc',
              }}
            >
              <h3>No practice sessions found for the selected month</h3>
              <p>Check back later for updated schedules</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
        padding: '80px 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ marginBottom: '1rem' }}>Ready to Join Our Training?</h2>
            <p style={{ fontSize: '1.1rem', color: '#cccccc', marginBottom: '2rem' }}>
              Book your spot in our upcoming practice sessions and take your skills to the next level
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(45deg, #ffffff, #cccccc)',
                color: '#000000',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              Book Session
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Practice; 