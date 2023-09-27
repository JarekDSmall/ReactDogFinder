
import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }) {
  return (
    <div>
      {dogs.map(dog => (
        <div key={dog.name}>
          <h3><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></h3>
          <img src={dog.src} alt={dog.name} />
        </div>
      ))}
    </div>
  );
}

export default DogList;
