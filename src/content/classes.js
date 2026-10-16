// Class descriptions and timetable from /book-a-class/ (verbatim; content-verbatim.md).

export const classes = [
  {
    name: 'Rasa Vinyasa Flow',
    image: 'class-rasa-vinyasa',
    description:
      'A fluid, breath-centred practice that cultivates strength, flexibility, and mindfulness. This morning practice is designed to guide you into a moving meditation, harmonising breath and movement through intentional sequencing. Gentle yet energising, this class is open to all levels.',
  },
  {
    name: 'Power Yoga',
    image: 'class-power-yoga',
    description:
      'A dynamic and steady-paced practice that focuses on building both strength and flexibility. Through mindful sequencing and breath awareness, this class encourages endurance, stability, and presence on the mat. Open to all levels.',
  },
  {
    name: 'Ashtanga Inspired',
    image: 'class-ashtanga-inspired',
    description:
      'Rooted in the traditional Ashtanga primary series, this practice integrates structured sequencing with inversions and arm balances to strengthen and refine your practice. A grounding yet uplifting experience for those seeking to deepen their journey in their sadhana. Open to all levels.',
  },
  {
    name: 'Yin & Somatics',
    image: 'class-yin-somatics',
    description:
      'A gentle, grounding class to soothe your nervous system and reconnect with your body. We blend meditation, breathwork, somatic movement, and Yin postures to release tension, calm the mind, and invite deep rest. Come as you are. Leave nourished, soft, and centered. All levels welcome.',
  },
  {
    name: 'Soulful Ceremonies & Workshops',
    image: 'class-soulful-ceremonies',
    description:
      'Experience transformative sessions that honour both inner and outer exploration. From cacao ceremonies and breathwork to creative expression and movement workshops these offerings are designed to support connection, self-inquiry, and holistic well-being.',
  },
];

/*
 * Timetable: every non-empty cell from the five published TablePress tabs, unchanged.
 * Empty rows (7:45 am, 10:00 am, 6:00 pm) and empty tabs carried no sessions and are omitted.
 *
 * ⚠ OWNER TO CONFIRM (07 §4.3, §4.5): the grid is sparse, the "All Classes" tab omitted the Pilates
 * and Yin sessions shown on their own tabs, and "Power Yoga" had no sessions. Here, "All Classes"
 * shows every published session. Momoyoga remains the live source of truth.
 */
export const timetableFilters = ['All Classes', 'Vinyasa', 'Power Yoga', 'Pilates', 'Yin Class'];

export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const sessions = [
  { day: 'Monday', time: '9:00 am', title: 'Ashtanga Mysore', note: 'Booking is mandatory, no walk in', filter: null },
  { day: 'Monday', time: '9:30 am', title: 'DONATION Mat Pilates', filter: 'Pilates' },
  { day: 'Tuesday', time: '9:30 am', title: 'Vinyasa All Levels', filter: 'Vinyasa' },
  { day: 'Wednesday', time: '9:30 am', title: 'Vinyasa All Levels', filter: 'Vinyasa' },
  { day: 'Thursday', time: '9:30 am', title: 'private events', filter: null, muted: true },
  { day: 'Friday', time: '9:30 am', title: 'private events', filter: null, muted: true },
  { day: 'Friday', time: '4:30 pm', title: 'Yin class', note: '75 Mins', filter: 'Yin Class' },
  { day: 'Saturday', time: '9:30 am', title: 'private event', filter: null, muted: true },
  { day: 'Sunday', time: '9:30 am', title: 'private event', filter: null, muted: true },
];
