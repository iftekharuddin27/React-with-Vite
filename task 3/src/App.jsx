import React, { useState, useEffect } from 'react';
import UserListApp from './UserList';

function App() {
  return (
    <div>
      <UserListApp />
      <UserListApp />
    </div>
  );
}

export default App;

// function UserListApp() {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (!response.ok) {
//           throw new Error('API request failed!');
//         }
//         const data = await response.json();
//         setUsers(data);
//         setIsLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setIsLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (isLoading) {
//     return <div style={{ textAlign: 'center', marginTop: '40px' }}>Loading data, please wait...</div>;
//   }

//   if (error) {
//     return <div style={{ color: 'red', textAlign: 'center', marginTop: '40px' }}>Error: {error}</div>;
//   }

//   return (
//     <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
//       <h2 style={{ textAlign: 'center' }}>User List</h2>
//       <ul style={{ listStyleType: 'none', padding: 0 }}>
//         {users.map((user) => (
//           <li 
//             key={user.id} 
//             style={{ 
//               border: '1px solid #ccc', 
//               borderRadius: '8px', 
//               padding: '15px', 
//               marginBottom: '10px',
//               backgroundColor: 'orange',
//               color: 'white'
//             }}
//           >
//             <p style={{ margin: '5px 0' }}><strong>Name:</strong> {user.name}</p>
//             <p style={{ margin: '5px 0' }}><strong>Company:</strong> {user.company.name}</p>
//             <p style={{ margin: '5px 0' }}><strong>City:</strong> {user.address.city}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserListApp;