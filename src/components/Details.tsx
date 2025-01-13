import React from 'react';
import { clubs, courses } from '../data/data';
import Testimony from '../models/Testimony';
import Affiliation from '../models/Affiliation';
import { Button, Typography, List, Image, Carousel, Card } from 'antd';

interface DetailsProps {
  itemType: 'club' | 'course';
  itemId: string;
  onBack: () => void;
}

export default function Details({ itemType, itemId, onBack }: DetailsProps) {
  const item: Affiliation | undefined = itemType === 'club' 
    ? clubs.find(c => c.id === itemId)
    : courses.find(c => c.id === itemId);

  const testimonies: Testimony[] | undefined = item?.testimonyArr ? item.testimonyArr : [];

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="details-container">
      <Button onClick={onBack}>Back</Button>
      <Typography.Title level={1}>{item.name}</Typography.Title>
      <Typography.Paragraph className='shortdesc'>{item.description}</Typography.Paragraph>
      <Card>
         <div className="long-description">
         <Typography.Title level={3}>More Information</Typography.Title>
        <p>{item.longDesc || 'No detailed description available.'}</p>
      </div>
        </Card>
     
      <div className="meat">
        {item.images ?
      <div className="images">
        <Card>
          <Image.PreviewGroup
    items={item.images}
  >
    <Carousel autoplay>
      {item.images.map((image) => (
    <Image
      src={image}
    />))}
    </Carousel>
    
  </Image.PreviewGroup>
        </Card>
      
      </div>:null
}
      <div className="testimonies" style={item.images ? {} : {width:"100%"}}>
        <Card className='testimony-card'>
        <Typography.Title level={3}>What People Say</Typography.Title>
                  {testimonies.length > 0 ? (
          <Carousel autoplay>
            {testimonies.map((testimony) =>
              <div>
                <p>"{testimony.content}"<strong> - {testimony.author}</strong></p>
              </div>
            )}
          </Carousel>
        ) : (
          <p>No testimonies yet.</p>
        )}
        </Card>

      </div>
      </div>
      
    </div>
  );
}