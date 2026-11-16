import { FileText, Users, Target, TrendingUp, Database, CheckCircle, ExternalLink, Star, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import article1 from 'figma:asset/2ccc8614ee2563a325e0742c8292598bfb7cd396.png';
import article2 from 'figma:asset/5eb50557031bff0480d1ade2d4adeee293ad2ae5.png';
import article3 from 'figma:asset/6ca98fcf2d2d93efdad714cd6d399a94e22167e3.png';
import kolList from 'figma:asset/81f4aff902f3cee434a8bef58a9c03afe70e0723.png';
import basfLogo from 'figma:asset/c35099463aa6173cb9692160560f2f311b4b8da0.png';

export function ProjectHighlights() {
  const seoArticles = [
    {
      image: article1,
      title: 'Top 5 Heavy Equipment for Food Estate Projects',
      date: 'September 25, 2025',
      url: 'https://products.unitedtractors.com/en/berita/5-alat-berat-food-estate-paling-sering-digunakan/'
    },
    {
      image: article2,
      title: 'Scania P460: The Best Truck for Hauling Large-Capacity Coal Loads',
      date: 'October 01, 2025',
      url: 'https://products.unitedtractors.com/en/berita/scania-p460-truk-terbaik-untuk-angkutan-batu-bara-kapasitas-raksasa/'
    },
    {
      image: article3,
      title: 'BW 131 AD-5: 4-Ton Roller for High Productivity',
      date: 'October 03, 2025',
      url: 'https://products.unitedtractors.com/en/berita/bw-131-vibro-roller-4-ton-andal-untuk-produktivitas-tinggi/'
    }
  ];
  
  const projects = [
    {
      title: 'SEO Article Writing for United Tractors',
      icon: FileText,
      color: '#D92B5A',
      accent: '#78BF91',
      challenge: 'Increase organic traffic to the client\'s blog through relevant and optimized content.',
      actions: [
        'Wrote more than 10 SEO articles averaging 1,000 words',
        'Industry-specific keyword research',
        'On-page SEO optimization for each article',
        'Ensured content aligned with United Tractors brand voice'
      ],
      results: [
        'Contributed to a 20% increase in organic traffic',
        'Improved organic search visibility within 3 months',
        'Articles became references for UT products and services'
      ]
    },
    {
      title: 'KOL (Key Opinion Leader) Research & Vetting',
      icon: Users,
      color: '#78BF91',
      accent: '#D92B5A',
      challenge: 'Identify the right KOLs for the BASF Petani Sejahtera KOL Activation Campaign targeting farmers and agricultural communities in Indonesia.',
      actions: [
        'Identified and vetted over 30 potential KOLs',
        'Analyzed engagement rate and audience demographics for each KOL',
        'Compiled database with key metrics for selection',
        'Evaluated alignment between KOLs and BASF brand values',
        'Focused on KOLs with agricultural content, agritech, and farmer lifestyle'
      ],
      results: [
        'Verified KOL database for BASF campaign',
        'Ensured alignment between KOLs and farmer target audience',
        'Improved influencer marketing campaign effectiveness'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-40 h-40 border-4 border-[#D92B5A]/10 rounded-full rotate-slow"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <Star className="absolute top-32 left-20 w-8 h-8 text-[#D92B5A]/20 sparkle" />
      <Sparkles className="absolute bottom-32 right-40 w-6 h-6 text-[#78BF91]/20 sparkle" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-2 bg-[#D92B5A] text-white rounded-full text-sm mb-4 font-medium">
            ✦ Project Showcase
          </div>
          <h1 className="text-[#2A2A2A] mb-4">
            Project Highlights
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#D92B5A] to-[#78BF91] mx-auto mb-6"></div>
          <p className="text-[#2A2A2A]/70 max-w-2xl mx-auto accent-text text-xl">
            In-depth case studies showcasing strategic capabilities
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(217,43,90,0.3)] transition-all duration-500 border-4 cursor-pointer"
              style={{ borderColor: project.color }}
            >
              {/* Decorative header bar */}
              <div 
                className="h-3 relative overflow-hidden"
                style={{ background: `linear-gradient(90deg, ${project.color} 0%, ${project.accent} 100%)` }}
              >
                <div className="absolute inset-0 opacity-50" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
                }}></div>
              </div>
              
              <div className="p-10 relative">
                {/* Decorative corner accent */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                  style={{ backgroundColor: project.accent }}
                ></div>
                
                {/* Project Header */}
                <div className="flex items-start space-x-6 mb-8">
                  <motion.div 
                    className="p-5 rounded-2xl flex-shrink-0 shadow-2xl relative overflow-hidden group text-white"
                    style={{ background: `linear-gradient(135deg, ${project.color} 0%, ${project.accent} 100%)` }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <project.icon 
                      className="w-10 h-10 relative z-10"
                    />
                    <Sparkles className="absolute top-1 right-1 w-4 h-4 text-white/50 sparkle" />
                  </motion.div>
                  <div className="flex-1">
                    <h2 className="text-[#2A2A2A] mb-3">
                      {project.title}
                    </h2>
                    <div className="h-0.5 w-24 bg-gradient-to-r to-transparent" style={{ backgroundColor: project.color }}></div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${project.color}20` }}
                    >
                      <Target className="w-5 h-5" style={{ color: project.color }} />
                    </div>
                    <h3 className="text-[#2A2A2A]">Challenge</h3>
                  </div>
                  <p className="text-[#2A2A2A]/80 pl-12 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Actions */}
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${project.accent}20` }}
                    >
                      <TrendingUp className="w-5 h-5" style={{ color: project.accent }} />
                    </div>
                    <h3 className="text-[#2A2A2A]">Actions</h3>
                  </div>
                  <motion.ul 
                    className="space-y-3 pl-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.actions.map((action, actionIdx) => (
                      <motion.li 
                        key={actionIdx} 
                        className="flex items-start space-x-3 group/item"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                      >
                        <Star className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: project.color }} fill={project.color} />
                        <span className="text-[#2A2A2A]/80 group-hover/item:text-[#2A2A2A] transition-colors">{action}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${project.color}20` }}
                    >
                      <CheckCircle className="w-5 h-5" style={{ color: project.color }} />
                    </div>
                    <h3 className="text-[#2A2A2A]">Results</h3>
                  </div>
                  <motion.div 
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.results.map((result, resultIdx) => (
                      <motion.div 
                        key={resultIdx}
                        variants={itemVariants}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="p-5 rounded-xl border-l-4 hover:shadow-lg transition-all cursor-pointer"
                        style={{ 
                          backgroundColor: `${project.color}10`,
                          borderColor: project.color
                        }}
                      >
                        <p className="text-[#2A2A2A] text-sm leading-relaxed font-medium">{result}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Mock-up or Visual Content */}
                {idx === 0 ? (
                  // SEO Articles Mock-up for United Tractors
                  <div className="bg-gradient-to-br from-[#D92B5A]/5 to-transparent rounded-2xl p-8 border-2 border-[#D92B5A]/20">
                    <div className="flex items-center space-x-3 mb-6">
                      <FileText className="w-6 h-6 text-[#D92B5A]" />
                      <h4 className="text-[#2A2A2A]">SEO Article Examples</h4>
                      <Sparkles className="w-4 h-4 text-[#D92B5A] sparkle" />
                    </div>
                    <motion.div 
                      className="grid md:grid-cols-3 gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {seoArticles.map((article, articleIdx) => (
                        <motion.a
                          key={articleIdx}
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={itemVariants}
                          whileHover={{ y: -10, scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-[#D92B5A]"
                        >
                          <div className="relative overflow-hidden">
                            <img 
                              src={article.image}
                              alt={article.title}
                              className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                              <ExternalLink className="w-4 h-4 text-[#D92B5A]" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                          <div className="p-5">
                            <p className="text-xs text-[#D92B5A] mb-2 uppercase tracking-wider font-semibold">{article.date}</p>
                            <h5 className="text-sm text-[#2A2A2A] line-clamp-2 leading-snug group-hover:text-[#D92B5A] transition-colors font-medium">
                              {article.title}
                            </h5>
                          </div>
                        </motion.a>
                      ))}
                    </motion.div>
                    <p className="text-xs text-[#2A2A2A]/60 mt-6 italic flex items-center space-x-2">
                      <Star className="w-3 h-3" fill="#D92B5A" />
                      <span>These articles are optimized with keyword research, good SEO structure, and high-quality content relevant to the heavy equipment industry.</span>
                    </p>
                  </div>
                ) : idx === 1 ? (
                  // KOL Database Mock-up for BASF Campaign
                  <div className="bg-gradient-to-br from-[#78BF91]/5 to-transparent rounded-2xl p-8 border-2 border-[#78BF91]/20">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <Database className="w-6 h-6 text-[#78BF91]" />
                        <h4 className="text-[#2A2A2A]">BASF Campaign KOL Database</h4>
                        <Sparkles className="w-4 h-4 text-[#78BF91] sparkle" />
                      </div>
                      <div className="bg-white p-3 rounded-xl shadow-md">
                        <img src={basfLogo} alt="BASF Logo" className="h-6" />
                      </div>
                    </div>
                    
                    <motion.div 
                      className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl mb-6 hover:shadow-[0_20px_40px_rgba(120,191,145,0.3)] transition-shadow"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <img 
                        src={kolList}
                        alt="KOL List for BASF Petani Sejahtera Campaign"
                        className="w-full h-auto"
                      />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-white rounded-2xl border-l-4 border-[#78BF91] shadow-lg hover:shadow-xl transition-shadow">
                        <h5 className="text-sm text-[#2A2A2A] mb-3 flex items-center space-x-2 font-semibold">
                          <Star className="w-4 h-4 text-[#78BF91]" fill="#78BF91" />
                          <span>Selection Criteria</span>
                        </h5>
                        <ul className="text-xs text-[#2A2A2A]/80 space-y-2">
                          <li className="flex items-start space-x-2">
                            <span className="text-[#78BF91]">✦</span>
                            <span>Minimum 5% engagement rate</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-[#78BF91]">✦</span>
                            <span>Content focused on agriculture/farming</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-[#78BF91]">✦</span>
                            <span>Audience matches target demographics</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-6 bg-white rounded-2xl border-l-4 border-[#D92B5A] shadow-lg hover:shadow-xl transition-shadow">
                        <h5 className="text-sm text-[#2A2A2A] mb-3 flex items-center space-x-2 font-semibold">
                          <Star className="w-4 h-4 text-[#D92B5A]" fill="#D92B5A" />
                          <span>Platform Coverage</span>
                        </h5>
                        <ul className="text-xs text-[#2A2A2A]/80 space-y-2">
                          <li className="flex items-start space-x-2">
                            <span className="text-[#D92B5A]">✦</span>
                            <span>Instagram, TikTok, YouTube</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-[#D92B5A]">✦</span>
                            <span>Multi-platform for maximum reach</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-[#D92B5A]">✦</span>
                            <span>30+ verified KOLs</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-xs text-[#2A2A2A]/60 mt-6 italic flex items-center space-x-2">
                      <Star className="w-3 h-3" fill="#78BF91" />
                      <span>Database includes comprehensive analysis: KOL Name, Social Media Platform, Follower Count, Engagement Rate, KOL Tier, and Update SC & Date (contract status & date).</span>
                    </p>
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
