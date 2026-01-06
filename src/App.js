import React, { useState, useEffect } from 'react';
import { Code, Briefcase, GraduationCap, Mail, MapPin, Phone, Award, Zap, Layers, Rocket, Database, Cloud, Server, Cpu, Globe, FileCode } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    { name: 'Angular 15+', icon: '🅰️', category: 'Framework', use: 'Enterprise apps & dashboards' },
    { name: 'TypeScript', icon: '📘', category: 'Language', use: 'Type-safe, maintainable code' },
    { name: 'React', icon: '⚛️', category: 'Framework', use: 'Interactive UIs & SPAs' },
    { name: 'RxJS & NgRx', icon: '🔄', category: 'State', use: 'Complex data flows' },
    { name: 'WebSocket', icon: '📡', category: 'Real-time', use: 'Live updates & notifications' },
    { name: 'REST APIs', icon: '🔌', category: 'Integration', use: 'Backend communication' },
    { name: 'HTML5/SCSS', icon: '🎨', category: 'Styling', use: 'Pixel-perfect interfaces' },
    { name: 'Angular Material', icon: '💎', category: 'UI', use: 'Professional components' },
    { name: 'Git/GitHub', icon: '🔀', category: 'Version Control', use: 'Code management' }
  ];

  const experience = [
    {
      company: 'Paysecure',
      role: 'Senior Frontend Engineer',
      period: 'Mar 2024 – Present',
      duration: '1 yr 11 mos',
      location: 'Jaipur, India',
      type: 'Full-time',
      highlights: [
        'Migrated legacy AngularJS payment platform to Angular 15 with zero downtime',
        'Worked on cashier customize, threshold, ruleEngine, themes pages extensively',
        'Built real-time WebSocket system for instant payment notifications',
        'Created multi-brand theming engine allowing clients to customize their payment pages',
        'Developed secure sandbox environment for testing transactions safely',
        'Built analytics dashboards showing revenue trends and transaction insights'
      ],
      achievements: [
        '40% faster page loads = happier users',
        'Zero downtime during full migration',
        'Eliminated 60% of old technical debt',
        'Cut future development time significantly'
      ],
      techStack: ['Angular 15+', 'TypeScript', 'WebSocket', 'RxJS', 'NgRx', 'Angular Material', 'REST APIs', 'Google Charts', 'SCSS']
    },
    {
      company: 'Pytosoft IT Solution Pvt. Ltd.',
      role: 'Frontend Developer',
      period: 'Jul 2021 – Feb 2024',
      duration: '2 yrs 8 mos',
      location: 'Jaipur, India',
      type: 'Full-time',
      highlights: [
        'Built complete accounting system (Pytobooks) handling invoices, payments, and financial tracking',
        'Created GST tax compliance platform helping businesses file returns correctly',
        'Developed subscription management system with payment integration',
        'Built reusable component library speeding up future projects',
        'Connected frontends to Java backend APIs smoothly',
        'Added PDF invoice generation and email sending'
      ],
      achievements: [
        'Delivered 3 apps on time and budget',
        'Built 50+ reusable components',
        '35% faster development for new features',
        'Customers processing 10K+ monthly transactions'
      ],
      techStack: ['Angular', 'TypeScript', 'JavaScript', 'Angular Material', 'Bootstrap', 'REST APIs', 'Git', 'Postman']
    }
  ];

  const projects = [
    {
      title: 'Payment Platform Modernization',
      tech: 'Angular 15, TypeScript, WebSocket',
      description: 'Transformed slow, buggy legacy payment system into modern, fast platform. Added real-time updates and multi-brand customization.',
      impact: 'Zero downtime, 40% faster, users love it',
      icon: <Cpu />
    },
    {
      title: 'Custom Payment Page Builder',
      tech: 'Angular, REST APIs, Google Charts',
      description: 'Built tool letting clients customize their payment pages with their logos, colors, and languages. Real-time preview included.',
      impact: 'Clients set up in minutes, not days',
      icon: <Cloud />
    },
    {
      title: 'Accounting & Invoice System',
      tech: 'Angular, TypeScript, PDF Generation',
      description: 'Complete financial system managing invoices, payments, expenses, and GST compliance for small businesses.',
      impact: '10K+ monthly transactions processed',
      icon: <Database />
    },
    {
      title: 'Tax Filing Platform',
      tech: 'Angular, REST APIs',
      description: 'SaaS helping businesses file GST returns correctly and track payments to avoid penalties.',
      impact: '500+ businesses staying compliant',
      icon: <FileCode />
    }
  ];

  const certifications = [
    { name: 'Angular Advanced', icon: '🎓' },
    { name: 'TypeScript Expert', icon: '📜' },
    { name: 'RxJS Reactive', icon: '🔄' },
    { name: 'Performance Pro', icon: '⚡' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white min-h-screen overflow-hidden relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated Tech Grid Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
          style={{
            right: `${mousePosition.x / 30}px`,
            bottom: `${mousePosition.y / 30}px`,
            transition: 'all 0.5s ease-out'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl top-1/4 left-1/3"
          style={{
            animation: 'float 8s ease-in-out infinite'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center z-10 w-full">
          {/* Status Badge */}
          <div 
            className="inline-block mb-6 px-4 sm:px-6 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm"
            style={{ animation: 'fadeInUp 0.8s ease-out' }}
          >
            <span className="text-purple-300 font-mono text-xs sm:text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for Opportunities
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
            style={{ animation: 'fadeInUp 1s ease-out 0.2s backwards' }}
          >
            Sanjana Bhati
          </h1>
          
          {/* Role with Typing Effect */}
          <div 
            className="text-xl sm:text-2xl md:text-3xl text-purple-200 mb-3 sm:mb-4 font-light"
            style={{ animation: 'fadeInUp 1s ease-out 0.4s backwards' }}
          >
            <span className="text-pink-400">Senior Frontend Engineer</span>
          </div>
          
          {/* Subtitle */}
          <p 
            className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4"
            style={{ animation: 'fadeInUp 1s ease-out 0.6s backwards' }}
          >
            5 years crafting <span className="text-purple-400 font-semibold">enterprise-grade</span> web applications • 
            Specialized in <span className="text-pink-400 font-semibold">Angular</span> & <span className="text-blue-400 font-semibold">TypeScript</span> • 
            Building scalable, high-performance solutions
          </p>

          {/* Tech Stack Badges */}
          <div 
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
            style={{ animation: 'fadeInUp 1s ease-out 0.7s backwards' }}
          >
            {['Angular 15+', 'TypeScript', 'React', 'RxJS', 'WebSocket', 'REST APIs'].map(tech => (
              <span key={tech} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800/50 border border-purple-500/30 rounded-lg text-xs sm:text-sm font-mono text-purple-300 hover:bg-slate-700/50 hover:scale-105 transition-all">
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4"
            style={{ animation: 'fadeInUp 1s ease-out 0.8s backwards' }}
          >
            {/* <a href="mailto:sanjanabhatiwork@gmail.com" className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 font-semibold">
              <Mail size={20} />
              <span>Hire Me</span>
            </a> */}
            <a href="#experience" className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700 rounded-lg transition-all hover:scale-105">
              <Briefcase size={20} />
              <span>View Work</span>
            </a>
            <a href="#projects" className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700 rounded-lg transition-all hover:scale-105">
              <Rocket size={20} />
              <span>Projects</span>
            </a>
          </div>

          {/* Contact Info */}
          <div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-slate-400 text-sm sm:text-base px-4"
            style={{ animation: 'fadeInUp 1s ease-out 1s backwards' }}
          >
            <div className="flex items-center justify-center gap-2">
              <MapPin size={18} />
              <span>Jaipur, India</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={18} />
              <span>+91 8696172484</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe size={18} />
              <span>Remote Available</span>
            </div>
          </div>
        </div>

      </section>

      {/* WHY HIRE ME */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Why Companies Hire Me</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Modernize AngularJS apps without downtime',
              'Build real-world fintech dashboards',
              'Performance, scalability & clean architecture focus',
              'Strong communication & ownership mindset'
            ].map(t => (
              <div key={t} className="flex gap-4 bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <span className="text-green-400 text-xl">✓</span>
                <p className="text-slate-300">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Tech Stack
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">The tools I use to build your solution</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, idx) => (
              <div 
                key={skill.name}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 sm:p-6 hover:border-purple-500/50 transition-all hover:scale-105"
                style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.05}s backwards` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-lg font-semibold text-white">{skill.name}</span>
                </div>
                <div className="text-xs text-purple-400 mb-2">{skill.category}</div>
                <div className="text-sm text-slate-400">{skill.use}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Professional Experience
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">Building scalable solutions at various tech companies</p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {experience.map((exp, idx) => (
              <div 
                key={exp.company}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all hover:scale-[1.01]"
                style={{ animation: `fadeInUp 0.8s ease-out ${idx * 0.2}s backwards` }}
              >
                {/* Company Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{exp.company}</h3>
                    <div className="text-purple-400 text-lg sm:text-xl font-semibold mb-2">{exp.role}</div>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        {exp.type}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="px-4 py-2 bg-purple-500/20 rounded-lg border border-purple-500/30 text-purple-300 font-mono text-sm text-center">
                      {exp.period}
                    </div>
                    <div className="text-center text-slate-400 text-sm">{exp.duration}</div>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                    <Zap size={18} />
                    Key Contributions
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {exp.highlights.map((highlight, hidx) => (
                      <div 
                        key={hidx}
                        className="flex gap-3 items-start group"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 group-hover:scale-150 transition-all flex-shrink-0" />
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-4 border border-green-500/20">
                  <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                    <Award size={18} />
                    Business Impact
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, aidx) => (
                      <div key={aidx} className="flex items-start gap-2">
                        <span className="text-green-400 text-lg flex-shrink-0">✓</span>
                        <span className="text-slate-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-md text-xs font-mono text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Recent Work
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">Real projects solving real business problems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, idx) => (
              <div 
                key={project.title}
                className="bg-gradient-to-br from-purple-900/20 to-slate-900/20 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:scale-105"
                style={{ animation: `fadeInUp 0.8s ease-out ${idx * 0.15}s backwards` }}
              >
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-purple-400">{project.icon}</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{project.title}</h3>
                <div className="text-purple-400 text-xs sm:text-sm font-mono mb-4">{project.tech}</div>
                <p className="text-slate-300 text-sm sm:text-base mb-4 leading-relaxed">{project.description}</p>
                <div className="pt-4 border-t border-slate-800">
                  <div className="text-xs sm:text-sm text-slate-400">Result</div>
                  <div className="text-green-400 font-semibold text-sm sm:text-base">{project.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Contact */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Education */}
            <div 
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all"
              style={{ animation: 'fadeInUp 0.8s ease-out backwards' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-purple-400" size={32} />
                <h3 className="text-2xl sm:text-3xl font-bold">Education</h3>
              </div>
              <div className="space-y-3">
                <div className="text-xl sm:text-2xl font-semibold text-white">B.Tech in Engineering</div>
                <div className="text-purple-400 text-base sm:text-lg">MBM Engineering College, Jodhpur</div>
                <div className="text-slate-400">2017 – 2021</div>
                <div className="text-green-400 font-semibold text-lg">CGPA: 8.34 / 10</div>
              </div>

              {/* Certifications */}
              <div className="mt-8 pt-8 border-t border-slate-800">
                <div className="text-slate-400 mb-4 font-semibold">Always Learning</div>
                <div className="grid grid-cols-2 gap-3">
                  {certifications.map(cert => (
                    <div key={cert.name} className="flex items-center gap-2 text-sm">
                      <span className="text-lg">{cert.icon}</span>
                      <span className="text-slate-300">{cert.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div 
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 sm:p-8"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.2s backwards' }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Let's Work Together</h3>
              <div className="space-y-4 mb-8">
                <a href="mailto:sanjanabhatiwork@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-colors group">
                  <Mail className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base">sanjanabhatiwork@gmail.com</span>
                </a>
                <a href="tel:+918696172484" className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-colors group">
                  <Phone className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base">+91 8696172484</span>
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin />
                  <span className="text-sm sm:text-base">Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Globe />
                  <span className="text-sm sm:text-base">Remote Work Available</span>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-4 sm:p-6 mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">I Can Help You With</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Server className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-slate-300">Building your web app from scratch</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Rocket className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-slate-300">Fixing slow or broken interfaces</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Code className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-slate-300">Updating old AngularJS apps</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-slate-300">Adding real-time features</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-purple-500/30">
                <div className="text-slate-400 mb-3 text-sm">When I'm Not Coding</div>
                <div className="flex flex-wrap gap-2">
                  {['Gym', 'Meditation', 'Journaling', 'Watching Travel Videos', 'Cafe Hopping'].map(interest => (
                    <span key={interest} className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-xs sm:text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-slate-400 text-sm sm:text-base">
              © 2026 Sanjana Bhati • Fast, Reliable Frontend Development
            </p>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              Available for projects • Quick turnaround • Quality guaranteed
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-slate-500 text-xs">
            <a href="#skills" className="hover:text-purple-400 transition-colors">Tech Stack</a>
            <span>•</span>
            <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
            <span>•</span>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Work</a>
            <span>•</span>
            <a href="mailto:sanjanabhatiwork@gmail.com" className="hover:text-purple-400 transition-colors">Hire Me</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;