import React from 'react';
import { courses } from '../data/data';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

export default function Courses({ onSelectCourse }: { onSelectCourse: (id: string) => void }) {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Courses</h2>
      <div className="card-container">
        {courses.map((course) => (
          <Card
            key={course.id}
            onClick={() => onSelectCourse(course.id)}
            cover={<img src={course.icon} alt=''/>}
          >
            <Meta title={course.name} description={course.description} />
          </Card>
        ))}
      </div>
    </div>
  );
}