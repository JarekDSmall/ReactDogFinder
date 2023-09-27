import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

  // Check if the dog object is defined
  if (!dog) {
    // Render an error message or redirect to the list of dogs
    return <Navigate to="/dogs" />;
  }

  // Render the dog details
  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.src} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
