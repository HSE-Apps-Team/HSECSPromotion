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
            <div className='cardLabel'><strong>{course.name}</strong><img src={course.img} alt='' width={"70px"} height={"70px"}/></div><div className='cardDesc'>{course.description}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}