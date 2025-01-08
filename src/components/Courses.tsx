import React from 'react';
import { courses } from '../data/data';
import { Card } from 'antd';

export default function Courses({ onSelectCourse }: { onSelectCourse: (id: string) => void }) {
  return (
    <div>
  <h2>Courses</h2>
  <div className="card-container">
    {courses.map((course) => (
        <Card
          key={course.id}
          onClick={() => onSelectCourse(course.id)}
        >
          <strong>{course.name}</strong>: {course.description}
        </Card>
      ))}
    </div>
  </div>
  );
}