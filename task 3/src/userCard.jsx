import React from 'react';

function UserCard({ user }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <li style={cardStyle}>
      <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{user.name}</h3>
      <p style={{ margin: '5px 0', color: '#555' }}>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p style={{ margin: '5px 0', color: '#555' }}>
        <strong>City:</strong> {user.address.city}
      </p>
    </li>
  );
}

export default UserCard;