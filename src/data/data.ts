import Club from '../models/Club';
import Course from '../models/Course';
import Testimony from '../models/Testimony';
import Affiliation from '../models/Affiliation';
import Project from '../models/Project';
import coursesData from './Courses.json';
import clubsData from './Clubs.json';


export const clubs: Club[] = [];

export function addClub(name: string, description: string, longDesc?: string, icon?: string, testimonyArr?: Testimony[], images?: string[], projects?: Project[]) {
  const newId = clubs.length + 1;
  clubs.push(new Club(newId, name, description, longDesc, icon, testimonyArr, images, projects));
}

export const courses: Course[] = [];

export function addCourse(id: number, title: string, desc: string, longDesc?: string, icon?: string, testimonyArr?: Testimony[], images?: string[], projects?: Project[]) {
  courses.push(new Course(id, title, desc, longDesc, icon, testimonyArr, images, projects));
}

for (const course of coursesData) {
  addCourse(course.id, course.title, course.description, course.longDesc, course.icon, course.testimonyArr, course.images, course.projects);
}
for (const club of clubsData) {
  addClub(club.title, club.description, club.longDesc, club.icon, club.testimonyArr, club.images, club.projects);
}

export const testimonies: Testimony[] = [];

export function addTestimony(testimony: Testimony, affiliation: Affiliation) {
  testimonies.push(testimony);
}