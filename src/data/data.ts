import Club from '../models/Club';
import Course from '../models/Course';
import Testimony from '../models/Testimony';
import Affiliation from '../models/Affiliation';
import coursesData from './Courses.json';

export const clubs: Club[] = [];

export function addClub(name: string, description: string, longDesc?: string, testimonyArr?: Testimony[]) {
  const newId = clubs.length + 1;
  clubs.push(new Club(newId, name, description, longDesc, testimonyArr));
}

export const courses: Course[] = [];

export function addCourse(id: number, title: string, desc: string, longDesc?: string, testimonyArr?: Testimony[]) {
  courses.push(new Course(id, title, desc, longDesc, testimonyArr));
}

for (const course of coursesData) {
  addCourse(course.id, course.title, course.description, course.longDesc, course.testimonyArr);
}

export const testimonies: Testimony[] = [];

export function addTestimony(testimony: Testimony, affiliation: Affiliation) {
  testimonies.push(testimony);
}