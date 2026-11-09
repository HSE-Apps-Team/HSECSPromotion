// Student built apps. Set "former: true" for apps that are no longer running.

export interface Project {
  name: string;
  desc: string;
  image: string;
  imageAlt: string;
  link?: string;
  former?: boolean;
  fit?: 'cover' | 'contain';
  imagePosition?: string;
  background?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'HSE Schedule',
    desc: 'Live bell schedule',
    image: '/images/app-schedule.jpg',
    imageAlt: 'HSE Schedule app showing a countdown until period 3 ends',
    link: 'https://hseschedule.app/',
    fit: 'contain',
    background: '#181B24',
  },
  {
    name: 'Royal Rumble App',
    desc: "Runs the logistics for Royal Rumble, HSE's freshman orientation",
    image: '/images/app-royal-rumble.jpg',
    imageAlt: 'Royal Rumble app home page',
    link: 'https://hseroyalrumble.com/',
    imagePosition: 'center 45%',
  },
  {
    name: 'HSE Courses',
    desc: 'Helped students plan their four years',
    image: '/images/app-courses.jpg',
    imageAlt: 'HSE Courses app',
    former: true,
    imagePosition: 'top',
  },
  {
    name: 'HSE Clubs',
    desc: 'Helped students find clubs',
    image: '/images/app-clubs.jpg',
    imageAlt: 'HSE Clubs app',
    former: true,
    imagePosition: 'top',
  },
];
