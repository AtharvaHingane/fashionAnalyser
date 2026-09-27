export const GLOBAL_CAPITALS = [
  { id: 'all', name: 'Global Overview', flag: '🌍', activeCount: '48,290 Trends Analyzed' },
  { id: 'paris', name: 'Paris, France', flag: '🇫🇷', keyVibe: 'Haute Couture & Quiet Luxury', topTrend: 'Quiet Luxury Coat Tailoring' },
  { id: 'tokyo', name: 'Tokyo, Japan', flag: '🇯🇵', keyVibe: 'Cyberpunk & Gen-Z Streetwear', topTrend: 'Neo-Tokyo Technical Streetwear' },
  { id: 'milan', name: 'Milan, Italy', flag: '🇮🇹', keyVibe: 'Sculptural Leather & Dopamine Metallics', topTrend: 'Dopamine Chrome & Emerald Drapes' },
  { id: 'copenhagen', name: 'Copenhagen, Denmark', flag: '🇩🇰', keyVibe: 'Eclectic Vintage & Old Money Classic', topTrend: 'Eclectic Grandpa Knitwear' },
  { id: 'newyork', name: 'New York, USA', flag: '🇺🇸', keyVibe: '90s Plaid Grunge & Urban Gorpcore', topTrend: '90s Plaid & Oversized Denim' },
  { id: 'seoul', name: 'Seoul, S. Korea', flag: '🇰🇷', keyVibe: 'Minimalist Gen-Z Soft Balletcore', topTrend: 'Blush Ribbon Balletcore' }
];

export const LIVE_WEB_FASHION_IMAGES = {
  'Old Money': [
    'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80'
  ],
  'Gen-Z': [
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
  ],
  '90s Revival': [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'
  ],
  'Streetwear': [
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80'
  ]
};

export const INITIAL_TRENDS = [
  {
    id: 'trend-1',
    name: 'Quiet Luxury & Bespoke Cashmere',
    category: 'Old Money',
    categoryGroup: 'Old Money',
    status: 'peak',
    statusLabel: 'PEAK TREND ⚡',
    score: 98,
    growthRate: '+44% MoM',
    region: 'paris',
    regionName: 'Paris & Milan',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80',
    description: 'Subtle elegance, unbranded bespoke cashmere outerwear, creamy monochrome palettes, and structured leather craftsmanship auto-fetched from Paris runway feeds.',
    keyHashtags: ['#QuietLuxury', '#OldMoneyAesthetic', '#MinimalistChic', '#CashmereTailoring'],
    dominantColors: ['#D4A373', '#FAF0CA', '#333333', '#8B5A2B'],
    colorNames: ['Warm Sand', 'Cream Silk', 'Obsidian Navy', 'Cognac Leather'],
    runwaySources: ['Paris Fashion Week AW26', 'Vogue Business Index', 'Lyst Global Q3 Report'],
    buyingAdvice: 'STRONG BUY - High retail resale value & long longevity cycle.',
    sentimentScore: {
      elegance: 98,
      avantGarde: 45,
      utility: 70,
      vintageRevival: 80,
      colorVibrancy: 35,
      sustainability: 92
    },
    historyData: [62, 70, 78, 85, 92, 98],
    regionalPopularity: { Paris: 98, Tokyo: 65, NYC: 90, Milan: 95, London: 88 }
  },
  {
    id: 'trend-2',
    name: 'Neo-Tokyo Cyberpunk Techwear',
    category: 'Gen-Z',
    categoryGroup: 'Gen-Z',
    status: 'emerging',
    statusLabel: 'EMERGING 🔥',
    score: 94,
    growthRate: '+78% MoM',
    region: 'tokyo',
    regionName: 'Tokyo & Seoul',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    description: 'Futuristic Gen-Z techwear with liquid silver metallic accents, luminous neon trim, modular harness pockets, auto-fetched from Tokyo Harajuku street feeds.',
    keyHashtags: ['#GenZFashion', '#CyberpunkStreetwear', '#TokyoTechwear', '#LiquidChrome'],
    dominantColors: ['#00F2FE', '#7928CA', '#1A1A24', '#C0C0C0'],
    colorNames: ['Electric Cyan', 'Deep Neon Violet', 'Midnight Matte', 'Reflective Chrome'],
    runwaySources: ['Tokyo Fashion Week', 'TikTok Underground Street Radar', 'Hypebeast Trend Pulse'],
    buyingAdvice: 'HIGH GROWTH - Massive Gen-Z & Urban demographic surge.',
    sentimentScore: {
      elegance: 50,
      avantGarde: 96,
      utility: 95,
      vintageRevival: 30,
      colorVibrancy: 90,
      sustainability: 65
    },
    historyData: [35, 48, 60, 75, 86, 94],
    regionalPopularity: { Paris: 60, Tokyo: 99, NYC: 82, Milan: 55, London: 80 }
  },
  {
    id: 'trend-3',
    name: '90s Plaid Flannel & Distressed Denim',
    category: '90s Revival',
    categoryGroup: '90s Revival',
    status: 'emerging',
    statusLabel: 'EMERGING 🔥',
    score: 92,
    growthRate: '+67% MoM',
    region: 'newyork',
    regionName: 'New York & London',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    description: '90s nostalgia taking over street fashion with oversized vintage plaid flannels, heavily washed distressed denim, and combat leather boots auto-fetched from NYC street style.',
    keyHashtags: ['#90sGrunge', '#90sRevival', '#VintageDenim', '#PlaidFlannel'],
    dominantColors: ['#8B0000', '#2F4F4F', '#D2691E', '#1C1C1C'],
    colorNames: ['Crimson Plaid', 'Deep Slate', 'Washed Leather', 'Vintage Black'],
    runwaySources: ['NYC Fashion Week', 'Depop Vintage Insights', 'TikTok #90sAesthetic'],
    buyingAdvice: 'HIGH DEMAND - High velocity among 90s nostalgia buyers.',
    sentimentScore: {
      elegance: 40,
      avantGarde: 72,
      utility: 88,
      vintageRevival: 98,
      colorVibrancy: 70,
      sustainability: 90
    },
    historyData: [30, 42, 58, 70, 84, 92],
    regionalPopularity: { Paris: 72, Tokyo: 88, NYC: 95, Milan: 65, London: 90 }
  },
  {
    id: 'trend-4',
    name: 'Equestrian Tweed & Heritage Tailoring',
    category: 'Old Money',
    categoryGroup: 'Old Money',
    status: 'peak',
    statusLabel: 'PEAK TREND ⚡',
    score: 96,
    growthRate: '+35% MoM',
    region: 'copenhagen',
    regionName: 'London & Paris',
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=800&q=80',
    description: 'Timeless old money equestrian tailoring featuring heavy wool tweed blazers, crisp white poplin shirts, and silk neck scarves auto-fetched from London runway archives.',
    keyHashtags: ['#OldMoneyStyle', '#HeritageTailoring', '#EquestrianChic', '#TweedBlazer'],
    dominantColors: ['#4A3B32', '#F5F5DC', '#002147', '#8B5A2B'],
    colorNames: ['Deep Houndstooth', 'Ivory Poplin', 'Oxford Navy', 'Saddle Brown'],
    runwaySources: ['London Fashion Week', 'Tatler Country Club Index', 'Vogue Heritage Desk'],
    buyingAdvice: 'EVERGREEN INVEST - High price resilience & classic prestige appeal.',
    sentimentScore: {
      elegance: 97,
      avantGarde: 35,
      utility: 75,
      vintageRevival: 92,
      colorVibrancy: 40,
      sustainability: 88
    },
    historyData: [68, 75, 82, 88, 92, 96],
    regionalPopularity: { Paris: 94, Tokyo: 70, NYC: 85, Milan: 92, London: 98 }
  },
  {
    id: 'trend-5',
    name: 'Coquette Balletcore & Ribbon Corsetry',
    category: 'Gen-Z',
    categoryGroup: 'Gen-Z',
    status: 'peak',
    statusLabel: 'PEAK TREND ⚡',
    score: 91,
    growthRate: '+38% MoM',
    region: 'seoul',
    regionName: 'Seoul & NYC',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    description: 'Gen-Z romantic trend blending delicate tulle layering, blush pink corsetry, wrap cardigans, and silk ribbons auto-fetched from K-Pop stage fashion feeds.',
    keyHashtags: ['#GenZBalletcore', '#CoquetteAesthetic', '#BlushSilk', '#ModernRomance'],
    dominantColors: ['#F3C6D3', '#FFF5F7', '#D4AF37', '#7A6B70'],
    colorNames: ['Blush Rose', 'Pearl Satin', 'Champagne Gold', 'Muted Taupe'],
    runwaySources: ['Seoul Fashion Runway', 'Pinterest Global Insights', 'Bazaar Runway Digest'],
    buyingAdvice: 'STABLE PEAK - Strong social media viral momentum.',
    sentimentScore: {
      elegance: 92,
      avantGarde: 60,
      utility: 40,
      vintageRevival: 88,
      colorVibrancy: 75,
      sustainability: 78
    },
    historyData: [50, 64, 75, 83, 89, 91],
    regionalPopularity: { Paris: 85, Tokyo: 80, NYC: 88, Milan: 70, London: 84 }
  },
  {
    id: 'trend-6',
    name: 'Eclectic Grandpa Retro Knitwear',
    category: 'Old Money',
    categoryGroup: 'Old Money',
    status: 'emerging',
    statusLabel: 'EMERGING 🔥',
    score: 89,
    growthRate: '+62% MoM',
    region: 'copenhagen',
    regionName: 'Copenhagen & London',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    description: 'Chunky vintage argyle sweaters, corduroy relaxed suits, retro loafers, and maximalist pattern mixing auto-fetched from Copenhagen street style.',
    keyHashtags: ['#EclecticGrandpa', '#RetroKnitwear', '#ThriftChic', '#ScandiStreetStyle'],
    dominantColors: ['#B85B14', '#556B2F', '#D4A373', '#4A3B32'],
    colorNames: ['Mustard Rust', 'Forest Moss', 'Oatmeal Wool', 'Espresso Corduroy'],
    runwaySources: ['Copenhagen Fashion Week', 'Vogue Scandinavian Desk', 'Depop Trend Tracker'],
    buyingAdvice: 'SUSTAINABLE BUY - High eco-conscious & vintage resale value.',
    sentimentScore: {
      elegance: 65,
      avantGarde: 75,
      utility: 82,
      vintageRevival: 99,
      colorVibrancy: 80,
      sustainability: 95
    },
    historyData: [28, 40, 55, 68, 80, 89],
    regionalPopularity: { Paris: 75, Tokyo: 82, NYC: 78, Milan: 60, London: 94 }
  },
  {
    id: 'trend-7',
    name: 'Futuristic Gorpcore Utility Outerwear',
    category: 'Streetwear',
    categoryGroup: 'Streetwear',
    status: 'evergreen',
    statusLabel: 'EVERGREEN 🌿',
    score: 93,
    growthRate: '+26% MoM',
    region: 'newyork',
    regionName: 'New York & Berlin',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    description: 'High-performance Gore-Tex trail jackets, waterproof welded zippers, and utility tactical vests auto-fetched from NYC technical outerwear showcases.',
    keyHashtags: ['#Gorpcore', '#TechUtility', '#OutdoorChic', '#TrailRunnerFashion'],
    dominantColors: ['#0A2540', '#00DFA2', '#1B1F23', '#808080'],
    colorNames: ['Cobalt Storm', 'Electric Emerald', 'Matte Obsidian', 'Concrete Slate'],
    runwaySources: ['NYC Fashion Week', 'Complex Style Radar', 'SSENSE Visual Data'],
    buyingAdvice: 'EVERGREEN STAPLE - Constant commercial momentum year-round.',
    sentimentScore: {
      elegance: 45,
      avantGarde: 70,
      utility: 100,
      vintageRevival: 40,
      colorVibrancy: 70,
      sustainability: 85
    },
    historyData: [80, 84, 87, 89, 91, 93],
    regionalPopularity: { Paris: 78, Tokyo: 90, NYC: 96, Milan: 65, London: 92 }
  },
  {
    id: 'trend-8',
    name: 'Liquid Chrome & Dopamine Metallics',
    category: 'Gen-Z',
    categoryGroup: 'Gen-Z',
    status: 'emerging',
    statusLabel: 'EMERGING 🔥',
    score: 95,
    growthRate: '+81% MoM',
    region: 'milan',
    regionName: 'Milan & São Paulo',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    description: 'High-octane reflective silver tops, jewel-toned emerald satin drapes, and iridescent metallic skirts auto-fetched from Milan red carpet feeds.',
    keyHashtags: ['#GenZDopamine', '#LiquidChrome', '#MilanFashionWeek', '#IridescentGlam'],
    dominantColors: ['#0D5C3A', '#E0E0E0', '#FF4D8D', '#D4AF37'],
    colorNames: ['Emerald Luxe', 'Liquid Silver', 'Hot Magenta', 'Imperial Gold'],
    runwaySources: ['Milan Runway Live', 'Elle International Trend Index', 'Instagram Visual AI Filter'],
    buyingAdvice: 'HIGH IMPACT - Great for eveningwear & statement editorial collections.',
    sentimentScore: {
      elegance: 88,
      avantGarde: 92,
      utility: 30,
      vintageRevival: 50,
      colorVibrancy: 100,
      sustainability: 60
    },
    historyData: [30, 45, 62, 75, 88, 95],
    regionalPopularity: { Paris: 90, Tokyo: 85, NYC: 84, Milan: 98, London: 82 }
  }
];

export const LIVE_SIMULATED_LOGS = [
  { time: '01:53:10', city: 'PARIS', message: 'Auto-fetched 18,400 live web fashion feeds. Old Money cashmere search +4.2%' },
  { time: '01:53:15', city: 'TOKYO', message: 'Crawling Harajuku web image clusters. Gen-Z Cyberpunk index updated to 94' },
  { time: '01:53:22', city: 'NEW YORK', message: 'Extracted 90s Plaid Grunge image frequency delta. Vintage denim +14.8%.' },
  { time: '01:53:28', city: 'LONDON', message: 'Auto-fetching Equestrian Tweed lookbook photos. Old money heritage demand strong.' },
  { time: '01:53:35', city: 'SEOUL', message: 'Parsed live K-Pop lookbooks. Gen-Z Balletcore silk ribbons search +12.4%' }
];

export const MONTH_LABELS = ['Apr 2026', 'May 2026', 'Jun 2026', 'Jul 2026', 'Aug 2026', 'Sep 2026'];
