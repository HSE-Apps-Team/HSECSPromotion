import React from 'react';
import { courses } from '../data/data';
import { Card } from 'antd';

export default function Courses({ onSelectCourse }: { onSelectCourse: (id: string) => void }) {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Courses</h2>
      <div className="card-container">
        {courses.map((course) => (
          <Card
            key={course.id}
            onClick={() => onSelectCourse(course.id)}
          >
            <div style={{textAlign:'center'}}><strong>{course.name}</strong></div><div>{course.description}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}