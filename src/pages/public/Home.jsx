import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, Users, Trophy, Clock, Zap, Lightbulb, 
  Network, Rocket, ChevronDown, Calendar, MapPin,
  ArrowRight, Star, Sparkles
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-glow-overlay pointer-events-none" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-neon-cyan" />
          <span className="text-sm text-gray-300 font-mono tracking-wide">INDIA'S PREMIER INTER-COLLEGE HACKATHON</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-8xl lg:text-9xl font-heading font-bold mb-6 tracking-tighter"
        >
          <span className="text-white">INNO</span>
          <span className="text-gradient">HACKS</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500"> 2.0</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-body"
        >
          24 Hours of <span className="text-neon-cyan">Innovation</span>, <span className="text-neon-purple">Code</span> & <span className="text-neon-highlight">Creativity</span>
        </motion.p>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mb-12 font-mono"
        >
          <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
            <Calendar className="w-5 h-5 text-neon-cyan" />
            <span>MARCH 15-16, 2025</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
            <MapPin className="w-5 h-5 text-neon-purple" />
            <span>SVCE TIRUPATI</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 mb-12"
        >
          <div className="text-center group">
            <div className="text-3xl sm:text-5xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors stats-number">500+</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest">Hackers</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl sm:text-5xl font-bold text-gradient mb-1 stats-number">₹3L+</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest">Prize Pool</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl sm:text-5xl font-bold text-white mb-1 group-hover:text-neon-purple transition-colors stats-number">24</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest">Hours</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link to="/register">
            <Button size="lg" className="btn-cyber px-10 py-7 text-lg rounded-xl">
              REGISTER NOW
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 px-10 py-7 text-lg rounded-xl backdrop-blur-sm">
              LEARN MORE
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Scroll to Explore</span>
          <ChevronDown className="w-5 h-5 text-neon-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Why Attend Section
const WhyAttend = () => {
  const reasons = [
    {
      icon: Trophy,
      title: '₹3L+ Prize Pool',
      description: 'Compete for cash prizes, gadgets, and exclusive internship opportunities.',
      color: 'text-neon-highlight'
    },
    {
      icon: Network,
      title: 'Expert Network',
      description: 'Connect with industry leaders, mentors, and fellow innovators.',
      color: 'text-neon-cyan'
    },
    {
      icon: Lightbulb,
      title: 'Learn & Grow',
      description: 'Attend workshops, tech talks, and hands-on learning sessions.',
      color: 'text-neon-purple'
    },
    {
      icon: Rocket,
      title: 'Launch It',
      description: 'Turn your concepts into working prototypes with expert guidance.',
      color: 'text-neon-blue'
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 font-heading">
            WHY <span className="text-gradient">ATTEND?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
            Join hundreds of passionate innovators for an unforgettable experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-cyber p-8 hover-lift group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${reason.color} border border-white/10 group-hover:border-neon-cyan/30`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading uppercase tracking-wide">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Domains Section
const Domains = () => {
  const domains = [
    {
      title: 'AI/ML GEN',
      description: 'Build intelligent solutions using LLMs, Generative AI, and Neural Networks.',
      icon: Zap,
      color: 'text-neon-cyan',
    },
    {
      title: 'WEB3 / DEFI',
      description: 'Create decentralized applications and explore the future of the internet.',
      icon: Code2,
      color: 'text-neon-purple',
    },
    {
      title: 'FINTECH',
      description: 'Innovate in financial technology and revolutionize digital payments.',
      icon: Trophy,
      color: 'text-neon-highlight',
    },
    {
      title: 'HEALTHTECH',
      description: 'Develop solutions for healthcare challenges and patient care.',
      icon: Users,
      color: 'text-neon-blue',
    },
    {
      title: 'EDTECH',
      description: 'Transform education with innovative learning platforms and tools.',
      icon: Lightbulb,
      color: 'text-yellow-400',
    },
    {
      title: 'OPEN INNOVATION',
      description: 'Work on any problem statement that excites you and your team.',
      icon: Rocket,
      color: 'text-pink-500',
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 font-heading">
            HACKATHON <span className="text-gradient">TRACKS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
            Choose from 6 exciting domains and build something amazing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl from-neon-cyan/20 to-neon-purple/20" />
                <div className="relative card-cyber p-8 h-full border border-white/5 hover:border-neon-cyan/50">
                  <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${domain.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-heading uppercase tracking-wider">{domain.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{domain.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Timeline Section
const Timeline = () => {
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    { id: 1, label: 'DAY 01', date: 'March 15' },
    { id: 2, label: 'DAY 02', date: 'March 16' },
  ];

  const schedule = {
    1: [
      { time: '08:00 AM', title: 'REGISTRATION', description: 'Check-in, badges, and swag kits.' },
      { time: '10:00 AM', title: 'OPENING CEREMONY', description: 'Keynote speakers and rules.' },
      { time: '11:00 AM', title: 'HACKING BEGINS', description: 'Start building! Mentors available.' },
      { time: '02:00 PM', title: 'LUNCH BREAK', description: 'Refuel and network.' },
      { time: '04:00 PM', title: 'WORKSHOP: AI/ML', description: 'Fundamentals of AI integration.' },
      { time: '08:00 PM', title: 'DINNER', description: 'Relax, eat, and meet others.' },
    ],
    2: [
      { time: '12:00 AM', title: 'MIDNIGHT SNACK', description: 'Late night refreshments.' },
      { time: '08:00 AM', title: 'BREAKFAST', description: 'Morning energy boost.' },
      { time: '11:00 AM', title: 'HACKING ENDS', description: 'Stop coding. Submission opens.' },
      { time: '12:00 PM', title: 'PROJECT DEMOS', description: 'Present to judges.' },
      { time: '03:00 PM', title: 'JUDGING', description: 'Final evaluation.' },
      { time: '05:00 PM', title: 'CLOSING', description: 'Winners announcement.' },
    ]
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 font-heading">
            EVENT <span className="text-gradient">TIMELINE</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Follow the schedule to make the most of your 24 hours
          </p>
        </motion.div>

        {/* Day Tabs */}
        <div className="flex justify-center gap-6 mb-16">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`relative px-8 py-3 rounded-lg font-mono font-bold tracking-widest transition-all duration-300 ${
                activeDay === day.id
                  ? 'text-black bg-neon-cyan shadow-glow shadow-neon-cyan/50'
                  : 'text-gray-400 hover:text-white bg-white/5 border border-white/10'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Timeline Events */}
        <div className="relative min-h-[600px]">
          {/* Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 timeline-line-gradient hidden sm:block rounded-full opacity-50" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {schedule[activeDay].map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} pl-12 sm:pl-0`}>
                    <div className="group relative inline-block text-left sm:text-inherit w-full sm:w-auto">
                      <div className="card-cyber p-6 hover:border-neon-cyan/50 hover:shadow-glow-sm transition-all duration-300 group-hover:-translate-y-1 bg-black/40">
                        <span className="inline-block px-3 py-1 rounded border border-neon-cyan/30 text-neon-cyan text-xs font-mono mb-3">
                          {event.time}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2 font-heading tracking-wide">
                          {event.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-black border-2 border-neon-cyan rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,245,255,0.8)]">
                    <div className="absolute inset-0 bg-neon-cyan rounded-full animate-ping opacity-40" />
                  </div>

                  {/* Empty Space for symmetrical layout */}
                  <div className="flex-1 hidden sm:block" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Prizes Section
const Prizes = () => {
  const prizes = [
    {
      place: '1st Place',
      prize: '₹1,00,000',
      perks: ['Trophy', 'Certificates', 'Internship Opportunities', 'Cloud Credits'],
      highlight: true,
      color: 'text-gradient',
      border: 'border-neon-cyan/50',
      shadow: 'shadow-glow'
    },
    {
      place: '2nd Place',
      prize: '₹60,000',
      perks: ['Trophy', 'Certificates', 'Goodies', 'Cloud Credits'],
      highlight: false,
      color: 'text-white',
      border: 'border-white/10',
      shadow: ''
    },
    {
      place: '3rd Place',
      prize: '₹40,000',
      perks: ['Trophy', 'Certificates', 'Goodies', 'Cloud Credits'],
      highlight: false,
      color: 'text-white',
      border: 'border-white/10',
      shadow: ''
    },
  ];

  const trackPrizes = [
    { track: 'Best AI/ML Project', prize: '₹25,000' },
    { track: 'Best Web3 Project', prize: '₹25,000' },
    { track: 'Best FinTech Project', prize: '₹25,000' },
    { track: 'Best HealthTech Project', prize: '₹25,000' },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-4 font-heading">
            PRIZE <span className="text-gradient">POOL</span>
          </h2>
          <p className="text-gray-400 text-lg font-body">
            Over ₹3,00,000 in prizes and rewards
          </p>
        </motion.div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {prizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group flex flex-col"
            >
              <div className={`card-cyber p-8 flex-1 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${prize.border} ${prize.shadow}`}>
                <div className="text-center h-full flex flex-col justify-between">
                  <div>
                    <Trophy className={`w-16 h-16 mx-auto mb-6 ${prize.highlight ? 'text-neon-cyan drop-shadow-[0_0_15px_rgba(0,245,255,0.5)]' : 'text-gray-500'}`} />
                    <h3 className="text-2xl font-bold text-white mb-2 font-heading uppercase">{prize.place}</h3>
                    <div className={`text-5xl font-bold mb-6 font-mono tracking-tighter ${prize.color}`}>
                      {prize.prize}
                    </div>
                  </div>
                  <ul className="space-y-3 text-left w-full pl-4">
                    {prize.perks.map((perk) => (
                      <li key={perk} className="text-gray-300 text-sm flex items-start gap-3">
                        <Star className="w-4 h-4 text-neon-purple mt-0.5 shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Track Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-cyber p-10 border-neon-purple/30"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center font-heading">TRACK PRIZES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackPrizes.map((track) => (
              <div key={track.track} className="bg-white/5 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-neon-cyan/30 border border-transparent cursor-pointer group">
                <div className="text-neon-cyan font-bold text-2xl mb-2 font-mono group-hover:text-neon-highlight transition-colors">{track.prize}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide group-hover:text-white transition-colors">{track.track}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Sponsors Section
const Sponsors = () => {
  const sponsors = {
    platinum: [
      { name: 'TechCorp', logo: 'TC' },
      { name: 'InnovateLabs', logo: 'IL' },
    ],
    gold: [
      { name: 'CloudSys', logo: 'CS' },
      { name: 'DataFlow', logo: 'DF' },
      { name: 'CodeBase', logo: 'CB' },
    ],
    silver: [
      { name: 'DevTools', logo: 'DT' },
      { name: 'GitPro', logo: 'GP' },
      { name: 'StackHub', logo: 'SH' },
      { name: 'ByteWise', logo: 'BW' },
    ],
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading tracking-tight">
          <span className="text-gradient">InnoHacks 2.0</span>
        </h1>
          <p className="text-gray-400 text-lg">
            Powered by industry leaders
          </p>
        </motion.div>

        {/* Platinum */}
        <div className="mb-16">
          <h3 className="text-center text-neon-cyan font-bold mb-8 uppercase tracking-widest text-sm">Platinum Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.platinum.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-64 h-32 card-cyber flex items-center justify-center hover:shadow-glow-purple group"
              >
                <span className="text-4xl font-bold text-white group-hover:text-neon-cyan transition-colors">{sponsor.logo}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gold */}
        <div className="mb-16">
          <h3 className="text-center text-yellow-400 font-bold mb-8 uppercase tracking-widest text-sm">Gold Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.gold.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-48 h-24 card-cyber flex items-center justify-center hover:border-yellow-400/50"
              >
                <span className="text-2xl font-bold text-gray-300">{sponsor.logo}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Silver */}
        <div>
          <h3 className="text-center text-gray-500 font-bold mb-8 uppercase tracking-widest text-sm">Silver Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.silver.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <span className="text-lg font-semibold text-gray-500">{sponsor.logo}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQ = () => {
  const faqs = [
    {
      question: 'Who can participate in InnoHacks 2.0?',
      answer: 'InnoHacks 2.0 is open to all college students across India. Whether you\'re a beginner or experienced hacker, everyone is welcome to participate. You can join as an individual or as a team of up to 4 members.',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No, participation in InnoHacks 2.0 is completely free! We believe in making innovation accessible to everyone. Food, refreshments, and swag will be provided to all participants.',
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Bring your laptop, charger, student ID, and any other hardware you might need for your project. We\'ll provide the internet, power outlets, food, and a comfortable hacking environment.',
    },
    {
      question: 'Can I start working on my project before the event?',
      answer: 'No, all coding must be done during the 24-hour hackathon period. However, you can come prepared with ideas, designs, and plans. We encourage research and conceptualization beforehand.',
    },
    {
      question: 'What are the judging criteria?',
      answer: 'Projects will be judged based on innovation (30%), technical complexity (25%), presentation (20%), impact (15%), and completeness (10%). Our panel of expert judges will evaluate all submissions fairly.',
    },
    {
      question: 'Will there be mentors available?',
      answer: 'Yes! We have industry experts and experienced mentors from various tech domains who will be available throughout the event to guide you, answer questions, and help you overcome challenges.',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-heading">
            FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Got questions? We've got answers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-cyber border-none px-6"
              >
                <AccordionTrigger className="text-white hover:text-neon-cyan text-left font-heading text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 font-heading tracking-tighter">
            READY TO <span className="text-gradient">HACK?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-body">
            Join 500+ innovators for 24 hours of coding, creativity, and collaboration. 
            Register now and secure your spot!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/register">
              <Button size="lg" className="btn-cyber px-10 py-7 text-lg rounded-xl">
                REGISTER NOW
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 px-10 py-7 text-lg rounded-xl backdrop-blur-sm">
                CONTACT US
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <WhyAttend />
      <Domains />
      <Timeline />
      <Prizes />
      <Sponsors />
      <FAQ />
      <CTASection />
    </main>
  );
};

export default Home;
