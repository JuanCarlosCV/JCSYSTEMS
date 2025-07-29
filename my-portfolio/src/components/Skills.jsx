import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
  // Categorías de habilidades
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillsData = {
    frontend: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'JavaScript', level: 85, icon: '📜' },
      { name: 'HTML5', level: 95, icon: '🖥️' },
      { name: 'CSS3/SASS', level: 90, icon: '🎨' },
      { name: 'TypeScript', level: 80, icon: '🔷' },
      { name: 'Responsive Design', level: 85, icon: '📱' }
    ],
    backend: [
      { name: 'Node.js', level: 75, icon: '🟢' },
      { name: 'Express', level: 70, icon: '🚀' },
      { name: 'MongoDB', level: 65, icon: '🍃' },
      { name: 'REST APIs', level: 80, icon: '🔗' },
      { name: 'Firebase', level: 70, icon: '🔥' }
    ],
    tools: [
      { name: 'Git', level: 85, icon: '🔄' },
      { name: 'Webpack', level: 70, icon: '📦' },
      { name: 'Figma', level: 75, icon: '✏️' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'Testing', level: 65, icon: '🧪' }
    ]
  };

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mis <span>Habilidades</span>
        </motion.h2>

        {/* Selector de categorías */}
        <motion.div 
          className="category-selector"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Lista de habilidades */}
        <motion.div
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData[activeCategory].map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-item"
              variants={itemVariants}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-level"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;