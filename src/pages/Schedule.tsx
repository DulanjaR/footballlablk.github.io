import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Trophy } from 'lucide-react';

const Schedule: React.FC = () => {
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

  const matches = [
    {
      id: 1,
      date: '2024-01-15',
      time: '19:00',
      homeTeam: 'FootballLab FC',
      awayTeam: 'City Rivals',
      venue: 'Main Stadium',
      competition: 'Premier League',
      status: 'upcoming',
      month: 'jan'
    },
    {
      id: 2,
      date: '2024-01-22',
      time: '20:30',
      homeTeam: 'United Stars',
      awayTeam: 'FootballLab FC',
      venue: 'Away Ground',
      competition: 'Premier League',
      status: 'upcoming',
      month: 'jan'
    },
    {
      id: 3,
      date: '2024-02-05',
      time: '18:00',
      homeTeam: 'FootballLab FC',
      awayTeam: 'Champions Elite',
      venue: 'Main Stadium',
      competition: 'Cup Competition',
      status: 'upcoming',
      month: 'feb'
    },
    {
      id: 4,
      date: '2024-02-12',
      time: '19:30',
      homeTeam: 'Local Heroes',
      awayTeam: 'FootballLab FC',
      venue: 'Community Arena',
      competition: 'Premier League',
      status: 'upcoming',
      month: 'feb'
    },
    {
      id: 5,
      date: '2024-03-01',
      time: '20:00',
      homeTeam: 'FootballLab FC',
      awayTeam: 'Top Performers',
      venue: 'Main Stadium',
      competition: 'Championship',
      status: 'upcoming',
      month: 'mar'
    },
    {
      id: 6,
      date: '2024-03-15',
      time: '17:30',
      homeTeam: 'Rising Stars',
      awayTeam: 'FootballLab FC',
      venue: 'Youth Center',
      competition: 'Youth League',
      status: 'upcoming',
      month: 'mar'
    }
  ];

  const filteredMatches = selectedMonth === 'all' 
    ? matches 
    : matches.filter(match => match.month === selectedMonth);

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
              <Calendar size={40} color="#ffffff" />
              <h1>Match Schedule</h1>
            </div>
            <p style={{ fontSize: '1.2rem', color: '#cccccc' }}>
              Stay updated with all our upcoming Match sessions and events
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

            {filteredMatches.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="timeline-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '3rem',
                  position: 'relative',
                }}
              >
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '20px',
                  height: '20px',
                  background: getStatusColor(match.status),
                  borderRadius: '50%',
                  border: '4px solid #000000',
                  zIndex: 2,
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                }} />

                {/* Match Card */}
                <div style={{
                  width: '45%',
                  marginLeft: index % 2 === 0 ? '0' : 'auto',
                  marginRight: index % 2 === 0 ? 'auto' : '0',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '2rem',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  {/* Date and Time */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#cccccc',
                    }}>
                      <Calendar size={16} />
                      <span>{new Date(match.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#cccccc',
                    }}>
                      <Clock size={16} />
                      <span>{match.time}</span>
                    </div>
                  </div>

                  {/* Teams */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <h4 style={{ marginBottom: '0.5rem' }}>{match.homeTeam}</h4>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #cccccc 50%, #999999 100%)',
                        borderRadius: '50%',
                        margin: '0 auto',
                        border: '2px solid #000000',
                      }} />
                    </div>
                    <div style={{
                      padding: '0 1rem',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: '#ffffff',
                    }}>
                      VS
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <h4 style={{ marginBottom: '0.5rem' }}>{match.awayTeam}</h4>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #cccccc 50%, #999999 100%)',
                        borderRadius: '50%',
                        margin: '0 auto',
                        border: '2px solid #000000',
                      }} />
                    </div>
                  </div>

                  {/* Venue and Competition */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    color: '#cccccc',
                  }}>
                    <MapPin size={16} />
                    <span>{match.venue}</span>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    color: '#cccccc',
                  }}>
                    <Trophy size={16} />
                    <span>{match.competition}</span>
                  </div>

                  {/* Status */}
                  <div style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    background: getStatusColor(match.status),
                    color: '#ffffff',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                  }}>
                    {getStatusText(match.status)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredMatches.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: 'center',
                padding: '4rem 0',
                color: '#cccccc',
              }}
            >
              <h3>No matches found for the selected month</h3>
              <p>Check back later for updated schedules</p>
            </motion.div>
          )}
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
            <h2 style={{ marginBottom: '1rem' }}>Don't Miss a Match!</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#cccccc' }}>
              Get notifications for upcoming matches and stay connected with the team.
            </p>
            <button className="btn">
              Subscribe to Updates
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Schedule; 