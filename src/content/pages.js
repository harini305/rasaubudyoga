// Page copy. Verbatim from docs/source-audit/content-verbatim.md unless a field is marked EDITED.
// EDITED fields keep the published original alongside, so the owner can approve or revert.

export const home = {
  meta: {
    title: 'Rasa Ubud Yoga Coliving',
    description:
      'A community living space and yoga shala in the heart of Ubud, Bali. Book a room, join a class, or come to an event at Rasa.',
  },
  heading: 'Your home away from home',
  subtitle: 'In the heart of Ubud',
  intro:
    'A community living space for long-term and short-term travellers seeking a place to call home, solitude to explore, a remote working sanctuary, and a desire to discover the local culture while being inspired by the magic of the island.',
  pillars: [
    { label: 'Yoga + Movement', icon: 'movement', href: '/book-a-class/' },
    { label: 'Soulful Workshops', icon: 'workshops', href: '/events/' },
    { label: 'Community Living', icon: 'living', href: '/yoga-home/' },
    { label: 'Host Your Own Event', icon: 'host', href: '/events/#host' },
  ],
  // Verbatim sentence from the About Us story.
  life: 'Soak in the island’s essence—through art, wellness, and shared experiences.',
  ctas: [
    { label: 'Book a Room', href: '/yoga-home/' },
    { label: 'Book a Class', href: '/book-a-class/' },
    { label: 'Upcoming Event', href: '/events/' },
    { label: 'Host Your Event', href: '/events/#host' },
  ],
  shala: {
    heading: ['ON - SITE', 'SHALA'],
    // EDITED: "daily" removed. The published timetable does not show classes every day (07 §4.3).
    text: 'We offer Yoga, Pilates, soulful ceremonies, workshops, and cultural activities to help you move, grow, and live well—inside and out.',
    original:
      'We offer daily Yoga, Pilates, soulful ceremonies, workshops, and cultural activities to help you move, grow, and live well—inside and out.',
  },
};

export const about = {
  meta: {
    title: 'About Us',
    description:
      'Rasa means "flavours" or "feelings" in Bahasa Indonesia. A coliving space and yoga studio in Ubud bringing together yoga, culture, and community.',
  },
  // EDITED: "Join daily yoga" → "Join yoga" (see home.shala). Otherwise verbatim, including the
  // source's mix of straight and curly quotes/apostrophes.
  story:
    'Rasa means "flavours" or "feelings" in Bahasa Indonesia, and that’s exactly what we’re all about. Our coliving space and studio in Ubud is a place to connect, move, and immerse in Bali\'s rich traditions — to truly feel. Rasa brings together yoga, culture, and community. Whether you\'re here to work remotely or take a break, it\'s a home to recharge, dream, self-discover, and be inspired. Join yoga, Pilates, soulful ceremonies, and creative workshops. Soak in the island’s essence—through art, wellness, and shared experiences. Unwind, connect, and feel at home at Rasa!',
  storyOriginalFragment: 'Join daily yoga, Pilates, soulful ceremonies, and creative workshops.',
  gallery: [
    { image: 'guest-reading-rattan', alt: 'A guest reading in a rattan chair beside the open doors' },
    { image: 'coworking-laptop', alt: 'Two guests working together on a laptop' },
    { image: 'class-warrior-line', alt: 'Students holding warrior pose in a class at the shala' },
  ],
  living: {
    heading: 'About Our Living Space',
    text: 'Our private bedrooms blend modern design with a touch of local charm, featuring ensuite bathrooms and open spaces that overlook the dreamy Ubud rice fields and poolside hangouts. Enjoy cosy communal areas to relax and connect, plus a fully equipped modern kitchen that makes you feel right at home + access to pool during your stay.',
  },
  classes: {
    heading: 'Our Classes',
    // EDITED: "a variety of daily yoga" → "a variety of yoga" (07 §4.3).
    text: 'Our shala offers a variety of yoga and Pilates classes designed for all levels. Whether you’re looking for a dynamic flow, deep relaxation, or mindful movement, our classes create a space for transformation and self-discovery. Led by experienced teachers, our offerings include:',
    original: 'Our shala offers a variety of daily yoga and Pilates classes designed for all levels.',
    // As published on About (note "Yin & Somatic" vs "Yin & Somatics" on Book a Class; 07 §4.2).
    list: ['Rasa Vinyasa Flow', 'Power Yoga', 'Ashtanga Inspired', 'Yin & Somatic', 'Soulful Ceremonies & Workshops'],
  },
};

export const rooms = {
  meta: {
    title: 'Book a Room',
    description:
      'Five thoughtfully designed rooms in Ubud with air conditioning, a double bed, ensuite bathroom and rice-field or poolside views. Book via Airbnb or directly.',
  },
  intro:
    'Your Home Away from Home Sanctuary in Ubud: Each of our five thoughtfully designed rooms offers a peaceful retreat with modern comforts and a touch of local charm. Every room includes air conditioning, a double bed, an ensuite bathroom, smart tv, working desks , fresh linens, towels, and stunning views—either overlooking the lush rice fields or the inviting poolside.',
  // Facts drawn from the intro above (in-room) and the About "Living Space" copy (shared).
  inRoom: ['Air conditioning', 'Double bed', 'Ensuite bathroom', 'Smart TV', 'Working desk', 'Fresh linens & towels', 'Rice-field or poolside views'],
  shared: ['Cosy communal areas', 'Fully equipped modern kitchen', 'Access to pool during your stay'],
  categoriesHeading: 'Room Categories',
  // Names (Rasa / Aruna / Lumi / Sari) exist only on an orphan demo page. Not used until confirmed.
  list: [
    { name: 'Room 1', image: 'room-1' },
    { name: 'Room 2', image: 'room-2' },
    { name: 'Room 3', image: 'room-3' },
    { name: 'Room 4', image: 'room-4' },
    { name: 'Room 5', image: 'room-5' },
  ],
  perks: {
    heading: 'YOGA & WELLNESS PERKS:',
    text: 'While yoga classes are not included in the stay, guests receive exclusive discounted vouchers to join our wellness offerings, allowing for a more personalised experience based on their needs.',
    images: [
      { image: 'perk-singing-bowl', alt: 'A brass singing bowl and wooden striker' },
      { image: 'perk-pilates-balls', alt: 'Pilates balls stacked in the shala' },
      { image: 'perk-downward-dog', alt: 'Students in downward-facing dog during a class' },
    ],
  },
  booking: {
    heading: 'Booking Options',
    airbnb: { lead: 'Secure your stay via Airbnb', label: 'Book via AIRBNB' },
    direct: { lead: 'Secure your stay via direct bookings', label: 'Book via this link' },
  },
};

export const bookAClass = {
  meta: {
    title: 'Book a Class',
    description:
      'Yoga and Pilates at Rasa’s shala in Ubud: Rasa Vinyasa Flow, Power Yoga, Ashtanga Inspired, Yin & Somatics and soulful ceremonies. Timetable, prices and booking.',
  },
  marquee: 'The shala and the view',
  gallery: [
    { image: 'shala-downdog-close', alt: 'Students in downward-facing dog, close up' },
    { image: 'shala-marigold-steps', alt: 'Marigold offerings on the steps to the shala' },
    { image: 'shala-cork-blocks', alt: 'Cork yoga blocks stacked in the shala' },
    { image: 'shala-rolled-mats', alt: 'Rolled yoga mats' },
    { image: 'shala-singing-bowl', alt: 'A brass singing bowl' },
    { image: 'shala-class-warrior', alt: 'A class in warrior pose' },
    { image: 'shala-class-downdog', alt: 'A teacher guiding a class through downward-facing dog' },
  ],
  timetableHeading: 'Timetable',
  bookLabel: 'BOOK A CLASS',
  walkIns: '*Walk-ins are always welcome!',
  pricesHeading: 'Prices',
  pricesMore: 'view more',
};

export const events = {
  meta: {
    title: 'Events',
    description:
      'Join events at Rasa in Ubud, or hire the shala for events, workshops, shoots and trainings. See the events schedule and book on Momoyoga.',
  },
  marquee: 'JOIN OUR EVENTS AT RASA',
  gallery: [
    { image: 'event-group-circle', alt: 'A group seated on mats in the shala, facing the rice-field view' },
    { image: 'event-embrace', alt: 'Two friends embracing and smiling at an event' },
    { image: 'event-healing-session', alt: 'A healing session beside a flower mandala' },
    { image: 'event-laughter', alt: 'Guests laughing together in the shala' },
    { image: 'event-gathering', alt: 'Guests gathering and talking after a session' },
    { image: 'event-group-downdog', alt: 'A full group class in downward-facing dog' },
    { image: 'event-low-lunge', alt: 'A group in a low lunge with arms raised' },
  ],
  schedule: {
    heading: 'Events schedule',
    cta: 'Click Here For Schedule',
    walkIns: 'Walk ins always welcome',
    ask: 'Ask a Question',
  },
  upcoming: {
    word: 'Upcoming Events',
    text: 'View our upcoming events and book your spot now!',
    info: 'Event Information',
    chat: 'Chat with us to book',
  },
};
