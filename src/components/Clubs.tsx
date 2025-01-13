import React from 'react';
import { clubs } from '../data/data';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

export default function Clubs({ onSelectClub }: { onSelectClub: (id: string) => void }) {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Clubs</h2>
      <div className="card-container">
        {clubs.map((club) => (
            <Card
            key={club.id}
            onClick={() => onSelectClub(club.id)}
            cover={<img src={club.icon} alt=''/>}
          >
            <Meta title={club.name} description={club.description} />
          </Card>
          ))}
        </div>
      </div>
  );
}