import Club from '../models/Club';
import Course from '../models/Course';
import Testimony from '../models/Testimony';
import Affiliation from '../models/Affiliation';
import coursesData from './Courses.json';
import clubsData from './Clubs.json';

export const clubs: Club[] = [];

export function addClub(name: string, description: string, longDesc?: string, img?: string, testimonyArr?: Testimony[]) {
  const newId = clubs.length + 1;
  clubs.push(new Club(newId, name, description, longDesc, img, testimonyArr));
}

export const courses: Course[] = [];

export function addCourse(id: number, title: string, desc: string, longDesc?: string, img?: string, testimonyArr?: Testimony[]) {
  courses.push(new Course(id, title, desc, longDesc, img, testimonyArr));
}

for (const course of coursesData) {
  addCourse(course.id, course.title, course.description, course.longDesc, course.img, course.testimonyArr);
}
for (const club of clubsData) {
  addClub(club.title, club.description, club.longDesc, club.img, club.testimonyArr);
}

export const testimonies: Testimony[] = [];

export function addTestimony(testimony: Testimony, affiliation: Affiliation) {
  testimonies.push(testimony);
}