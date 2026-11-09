// Courses and pathways shown on the homepage.
// To change the chart, edit COURSES and the ids listed in each pathway.

export type CourseId =
  | 'poc' | 'apcsp' | 'wdd' | 'itf' | 'sd' | 'csa' | 'nco' | 'pocOrApcsp' | 'swCapstone' | 'cyberCapstone';

export interface Course {
  name: string;
  desc: string;
  recommended?: boolean;
}

export const COURSES: Record<CourseId, Course> = {
  poc: { name: 'Principles of Computing', desc: 'Coding, data, and cybersecurity basics in one year.' },
  apcsp: {
    name: 'AP Computer Science Principles',
    desc: 'How computers, the internet, and code really work. Made for every college bound student.',
    recommended: true,
  },
  wdd: { name: 'Website and Database Development', desc: 'Build websites and databases with HTML, CSS, JavaScript, Python, and SQL.' },
  itf: { name: 'Information Technology Fundamentals', desc: 'Build and fix computers. Prep for the CompTIA A+ exam.' },
  sd: { name: 'Software Development', desc: 'Design and build bigger programs with Object Oriented code.' },
  csa: { name: 'AP Computer Science A (Java)', desc: 'Object Oriented Programming in Java. Ends with the AP exam in May.' },
  nco: { name: 'Networking and Cybersecurity Operations', desc: 'Set up routers and switches and learn how to keep networks secure.' },
  pocOrApcsp: { name: 'Principles of Computing or AP Computer Science Principles', desc: 'Start with either class. Both lead into IT Fundamentals.' },
  swCapstone: { name: 'Software Development Capstone', desc: 'Work as a team to build a real app for a real client.' },
  cyberCapstone: { name: 'Cybersecurity Operations Capstone', desc: 'The final step of the Cybersecurity path.' },
};

export interface Pathway {
  name: string;
  tag?: string;
  tagStyle?: 'blue' | 'red';
  // One course per grade: 9, 10, 11, 12
  courses: [CourseId, CourseId, CourseId, CourseId];
}

export const GRADES = ['9', '10', '11', '12'];

export const PATHWAYS: Pathway[] = [
  { name: 'Software Development', tag: 'Dual credit with Ivy Tech', tagStyle: 'blue', courses: ['poc', 'wdd', 'sd', 'swCapstone'] },
  { name: 'Software Development', tag: 'AP Pathway', tagStyle: 'red', courses: ['apcsp', 'wdd', 'csa', 'swCapstone'] },
  { name: 'Cybersecurity', courses: ['pocOrApcsp', 'itf', 'nco', 'cyberCapstone'] },
];

export const otherCourses = {
  label: 'Also offered for grades 11 and 12:',
  name: 'IU Indy Luddy Scholars Program',
  desc: 'college computing courses through IU Indianapolis.',
};
