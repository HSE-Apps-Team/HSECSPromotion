// Clubs and Honor Society activities shown on the homepage.

export interface Club {
  name: string;
  desc: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  logo?: string;
  badge?: { text: string; color: string };
  link?: string;
}

export const CLUBS: Club[] = [
  {
    name: 'HSE Apps',
    desc: 'Providing students a space to collaborate on coding and CS',
    image: '/images/club-hseapps.jpg',
    imageAlt: 'HSE Apps members working together at a computer',
    imagePosition: '50% 38%',
    logo: '/images/hseapps-logo.png',
    link: 'https://hseapps.org/',
  },
  {
    name: 'Girls Who Code',
    desc: 'Building community for women interested in tech',
    image: '/images/club-gwc.jpg',
    imageAlt: 'A Girls Who Code member working on a laptop',
    imagePosition: '48% 20%',
    badge: { text: 'GWC', color: '#1F7A4A' },
  },
];

export interface Activity {
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  dark?: boolean;
}

export const CSHS_ACTIVITIES: Activity[] = [
  {
    title: 'Teach kids to code',
    desc: 'Members visit elementary schools and run coding lessons for younger students.',
    image: '/images/cshs-teach.jpg',
    imageAlt: 'A CSHS member teaching elementary students a coding game',
    imagePosition: '50% 20%',
  },
  {
    title: 'Guide future Royals',
    desc: 'Show 8th graders the CS courses waiting for them at HSE and help them pick a path.',
    image: '/images/cshs-guide.jpg',
    imageAlt: 'CSHS members at a table with an HSE Computer Science pathways poster',
    imagePosition: '50% 35%',
  },
  {
    title: 'Run the Mudsock Hackathon',
    desc: 'CSHS organizes and runs the Mudsock Hackathon for student coders.',
    image: '/images/cshs-hackathon.jpg',
    imageAlt: 'Students coding at round tables during the Mudsock Hackathon',
    imagePosition: '50% 36%',
    dark: true,
  },
];
