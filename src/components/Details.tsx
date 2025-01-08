import React from 'react';
import { clubs, courses, getTestimoniesForAffiliation } from '../data/data';
import Affiliation from '../models/Affiliation';
import { Button, Typography, List } from 'antd';

interface DetailsProps {
  itemType: 'club' | 'course';
  itemId: string;
  onBack: () => void;
}

export default function Details({ itemType, itemId, onBack }: DetailsProps) {
  const item: Affiliation | undefined = itemType === 'club' 
    ? clubs.find(c => c.id === itemId)
    : courses.find(c => c.id === itemId);

  const testimonies = item ? getTestimoniesForAffiliation(item) : [];

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="details-container">
      <Button onClick={onBack}>Back</Button>
      <Typography.Title level={2}>{item.name}</Typography.Title>
      <Typography.Paragraph>{item.description}</Typography.Paragraph>
      
      <div className="long-description">
        <h3>More Information</h3>
        <p>{item.longDesc || 'No detailed description available.'}</p>
      </div>

      <div className="testimonies">
        <Typography.Title level={3}>What People Say</Typography.Title>
        {testimonies.length > 0 ? (
          <List
            dataSource={testimonies}
            renderItem={(testimony) => (
              <List.Item>
                <p>"{testimony.content}"</p>
                <small>- {testimony.author}</small>
              </List.Item>
            )}
          />
        ) : (
          <p>No testimonies yet.</p>
        )}
      </div>
    </div>
  );
}