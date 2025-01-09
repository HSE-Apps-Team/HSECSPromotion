import React from 'react';
import { clubs } from '../data/data';
import { Card } from 'antd';

export default function Clubs({ onSelectClub }: { onSelectClub: (id: string) => void }) {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Clubs</h2>
      <div className="card-container">
        {clubs.map((club) => (
            <Card
              key={club.id}
              onClick={() => onSelectClub(club.id)}
            >
              <div style={{textAlign:'center'}}><strong>{club.name}</strong></div><div>{club.description}</div>
            </Card>
          ))}
        </div>
      </div>
  );
}