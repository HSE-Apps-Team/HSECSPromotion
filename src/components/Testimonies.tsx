import React from 'react';
import { testimonies } from '../data/data';
import { Typography, List } from 'antd';

export default function Testimonies() {
  return (
    <div>
      <Typography.Title level={2}>Testimonies</Typography.Title>
      <List
        dataSource={testimonies}
        renderItem={(testimony) => (
          <List.Item>
            <strong>{testimony.author}</strong>: {testimony.content}
          </List.Item>
        )}
      />
    </div>
  );
}