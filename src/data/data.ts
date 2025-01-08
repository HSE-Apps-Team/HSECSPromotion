import Club from '../models/Club';
import Course from '../models/Course';
import Testimony from '../models/Testimony';
import Affiliation from '../models/Affiliation';

export const clubs: Club[] = [];

//sample
addClub('Chess Club', 'Sharpen your strategy skills', 'We meet weekly to improve...');
addClub('Mathletes', 'Competitive mathematics team', 'Join our competitions...');
addClub('Robotics Club', 'Innovate and build robots', 'Join us to design, build, and program robots for various competitions and projects. We provide resources and mentorship to help you bring your ideas to life.');
addClub('Art Society', 'Express your creativity', 'A space for artists of all levels to collaborate, create, and showcase artwork. We host workshops, exhibitions, and provide materials for diverse art forms.');
addClub('Code Warriors', 'Competitive Programming', 'Join our elite team of competitive programmers. Regular practice sessions, contest participation, and algorithm study groups.');
addClub('Cybersecurity Club', 'Explore Digital Security', 'Learn about network security, ethical hacking, and cyber defense. Participate in CTF competitions and security workshops.');
addClub('Game Dev Studio', 'Create Your Own Games', 'Design and develop games using modern engines and tools. Weekly game jams and industry mentor sessions.');
addClub('AI/ML Society', 'Explore Artificial Intelligence', 'Dive into machine learning, neural networks, and AI applications. Work on real-world projects and research.');

export function addClub(name: string, description: string, longDesc?: string) {
  const newId = clubs.length + 1;
  clubs.push(new Club(newId, name, description, longDesc));
}

export const courses: Course[] = [];

// sample
addCourse('Intro to Programming', 'Learn the basics', 'In-depth coverage of variables...');
addCourse('Data Structures', 'In-depth data handling', 'Covers arrays, trees, etc.');
addCourse('Advanced Algorithms', 'Deep dive into algorithm design', 'Explore complex algorithms, optimization techniques, and their applications in solving real-world problems. Topics include graph algorithms, dynamic programming, and more.');
addCourse('Web Development', 'Build modern web applications', 'Comprehensive coverage of front-end and back-end technologies. Learn HTML, CSS, JavaScript, frameworks like React and Node.js, and database management.');
addCourse('Mobile App Development', 'Build iOS and Android apps', 'Learn Swift, Kotlin, and cross-platform development frameworks. Create portfolio-ready mobile applications.');
addCourse('Cloud Computing', 'Master cloud technologies', 'AWS, Azure, and Google Cloud platforms. Learn scalability, deployment, and cloud-native development.');
addCourse('Cybersecurity Fundamentals', 'Essential security concepts', 'Network security, cryptography, and security best practices for modern applications.');
addCourse('Game Programming', 'Create interactive experiences', 'Unity and Unreal Engine development, game physics, AI, and optimization techniques.');
addCourse('Database Systems', 'Data management mastery', 'SQL and NoSQL databases, data modeling, and database administration skills.');

export function addCourse(title: string, desc: string, longDesc?: string) {
  const newId = courses.length + 1;
  courses.push(new Course(newId, title, desc, longDesc));
}

export const testimonies: Testimony[] = [];

// sample
addTestimony(new Testimony('John Doe', 'Fantastic club!'),"B1");  // Chess Club testimony
addTestimony(new Testimony('Jane Smith', 'Loved the course!'),"A1");  // Intro to Programming testimony
addTestimony(new Testimony('Mike Johnson', 'The robotics club helped me land my dream internship!'), 'B3');
addTestimony(new Testimony('Sarah Lee', 'Incredible learning experience in the robotics club!'), 'B3');
addTestimony(new Testimony('Alex Chen', 'Best decision I made was joining Code Warriors!'), 'B5');
addTestimony(new Testimony('Emily Wang', 'Code Warriors helped me ace my coding interviews.'), 'B5');
addTestimony(new Testimony('David Kim', 'The AI/ML Society opened so many doors for me.'), 'B8');
addTestimony(new Testimony('Lisa Park', 'Advanced Algorithms course was challenging but worth it!'), 'A3');
addTestimony(new Testimony('Tom Wilson', 'Web Development course gave me practical skills I use daily.'), 'A4');
addTestimony(new Testimony('Maria Garcia', 'The Game Dev Studio is like a second family.'), 'B7');
addTestimony(new Testimony('Chris Murphy', 'Cybersecurity Club events are amazing!'), 'B6');
addTestimony(new Testimony('Rachel Kim', 'Mobile App Development course was exactly what I needed.'), 'A5');
addTestimony(new Testimony('James Lee', 'Cloud Computing changed my career trajectory.'), 'A6');
addTestimony(new Testimony('Emma Thompson', 'The Database Systems course is incredibly comprehensive.'), 'A9');
addTestimony(new Testimony('Ryan Patel', 'Game Programming course taught me industry-standard practices.'), 'A8');
addTestimony(new Testimony('Sophie Chen', 'The Art Society helped me combine creativity with tech.'), 'B4');
addTestimony(new Testimony('Kevin Wu', 'Cybersecurity Fundamentals is essential knowledge.'), 'A7');

// Additional testimonies for existing clubs and courses
addTestimony(new Testimony('Peter Zhang', 'Chess Club tournaments are super engaging!'), 'B1');
addTestimony(new Testimony('Amanda Lee', 'Chess helped improve my analytical thinking.'), 'B1');

addTestimony(new Testimony('Lucas Rivera', 'Mathletes competitions are thrilling!'), 'B2');
addTestimony(new Testimony('Nina Patel', 'Found my passion for math here.'), 'B2');
addTestimony(new Testimony('Derek Chang', 'Great prep for math competitions!'), 'B2');

addTestimony(new Testimony('Olivia Chen', 'Built my first robot here!'), 'B3');
addTestimony(new Testimony('Marcus Johnson', 'Amazing mentorship in robotics.'), 'B3');

addTestimony(new Testimony('Isabella Kim', 'Art Society exhibitions are incredible.'), 'B4');
addTestimony(new Testimony('Jordan Taylor', 'Found my artistic voice here.'), 'B4');
addTestimony(new Testimony('Aisha Patel', 'Great creative community!'), 'B4');

addTestimony(new Testimony('Victor Martinez', 'Code Warriors made me a better programmer.'), 'B5');
addTestimony(new Testimony('Sophia Lee', 'Won my first coding competition here!'), 'B5');

addTestimony(new Testimony('Nathan Brown', 'Learning ethical hacking was eye-opening.'), 'B6');
addTestimony(new Testimony('Lily Chen', 'CTF competitions are so much fun!'), 'B6');

addTestimony(new Testimony('Carlos Rodriguez', 'Published my first game!'), 'B7');
addTestimony(new Testimony('Hannah Kim', 'Great game dev community.'), 'B7');

addTestimony(new Testimony('Michael Wu', 'AI projects are cutting-edge.'), 'B8');
addTestimony(new Testimony('Priya Shah', 'Built amazing ML models here.'), 'B8');

// Additional course testimonies
addTestimony(new Testimony('Tony Stark', 'Perfect intro to coding.'), 'A1');
addTestimony(new Testimony('Steve Rogers', 'Great foundation course!'), 'A1');

addTestimony(new Testimony('Diana Prince', 'Data Structures changed how I think.'), 'A2');
addTestimony(new Testimony('Bruce Wayne', 'Essential knowledge for interviews.'), 'A2');

addTestimony(new Testimony('Natasha Lee', 'Advanced Algorithms opened many doors.'), 'A3');
addTestimony(new Testimony('Peter Parker', 'Complex concepts explained well.'), 'A3');

addTestimony(new Testimony('Wade Wilson', 'Built my portfolio website here!'), 'A4');
addTestimony(new Testimony('Carol Danvers', 'Modern web dev techniques covered well.'), 'A4');

addTestimony(new Testimony('Scott Lang', 'Published my first mobile app!'), 'A5');
addTestimony(new Testimony('Hope van Dyne', 'Cross-platform development is fascinating.'), 'A5');

addTestimony(new Testimony('Stephen Strange', 'Cloud architectures demystified.'), 'A6');
addTestimony(new Testimony('Wanda Maximoff', 'AWS certification prep was great.'), 'A6');

addTestimony(new Testimony('Sam Wilson', 'Security fundamentals are crucial.'), 'A7');
addTestimony(new Testimony('Bucky Barnes', 'Comprehensive security coverage.'), 'A7');

addTestimony(new Testimony('Miles Morales', 'Game engine mastery achieved!'), 'A8');
addTestimony(new Testimony('Gwen Stacy', 'Unity projects were fun.'), 'A8');

addTestimony(new Testimony('Charles Xavier', 'Database design skills are invaluable.'), 'A9');
addTestimony(new Testimony('Jean Grey', 'NoSQL concepts well explained.'), 'A9');

export function addTestimony(testimony: Testimony, affiliationId: string) {
  testimony.affiliationId = affiliationId;
  testimonies.push(testimony);
}

export function getTestimoniesForAffiliation(affiliation: Affiliation): Testimony[] {
  return testimonies.filter(t => t.affiliationId === affiliation.id);
}