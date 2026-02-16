import React, { useState, useEffect } from 'react';
import UserCard from './userCard'; 

function UserListApp() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('API request failed!');
        }
        const data = await response.json();
        setUsers(data);
        setIsLoading(false); 
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <div style={{ textAlign: 'center', marginTop: '40px' }}>Loading data...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center', marginTop: '40px' }}>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>User List</h2>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default UserListApp;