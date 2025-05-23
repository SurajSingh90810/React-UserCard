import React from 'react';
import './App.css';
import UserProfileCard from './UserProfileCard';

function App() {
  const usersData = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      gender: "Male",
      address: "123 Main St, New York, NY 10001",
      number:"455487844555",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      hobbies: ["Reading", "Hiking", "Photography"],
      education: [
        { degree: "Bachelor of Science", field: "Computer Science", university: "MIT" },
      ]
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      gender: "Female",
      address: "456 Oak Ave, Los Angeles, CA 90001",
       number:"455487844555",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      hobbies: ["Painting", "Yoga", "Traveling"],
      education: [
        { degree: "Bachelor of Arts", field: "Graphic Design", university: "RISD" }
      ]
    },
    {
      name: "Robert Johnson",
      email: "robert.j@example.com",
      gender: "Male",
      address: "789 Pine Rd, Chicago, IL 60601",
       number:"455487844555",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      hobbies: ["Cooking", "Gaming", "Music"],
      education: [
        { degree: "MBA", field: "Business Administration", university: "Harvard" }
      ]
    },
    {
      name: "Emily Davis",
      email: "emily.d@example.com",
      gender: "Female",
      address: "321 Elm St, Seattle, WA 98101",
       number:"455487844555",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      hobbies: ["Dancing", "Writing", "Swimming"],
      education: [
        { degree: "Bachelor of Science", field: "Biology", university: "UCLA" }
      ]
    },
    {
      name: "Michael Brown",
      email: "michael.b@example.com",
      gender: "Male",
      address: "654 Maple Dr, Austin, TX 73301",
       number:"455487844555",
      image: "https://randomuser.me/api/portraits/men/53.jpg",
      hobbies: ["Cycling", "Photography", "Chess"],
      education: [
        { degree: "Bachelor of Science", field: "Physics", university: "Caltech" },
      ]
    },
    {
      name: "Sarah Wilson",
      email: "sarah.w@example.com",
      gender: "Female",
      address: "987 Cedar Ln, Boston, MA 02101",
       number:"455487844555",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      hobbies: ["Reading", "Hiking", "Baking"],
      education: [
        { degree: "Bachelor of Arts", field: "English Literature", university: "Yale" },
      ]
    },
    {
      name: "Sarah Wilson",
      email: "sarah.w@example.com",
      gender: "Female",
      address: "987 Cedar Ln, Boston, MA 02101",
       number:"455487844555",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      hobbies: ["Reading", "Hiking", "Baking"],
      education: [
        { degree: "Bachelor of Arts", field: "English Literature", university: "Yale" },
      ]
    }
  ];

 return (
    <div className="app-container">
      <h1 className="page-title">User Profiles</h1>
      <div className="users-grid">
        {usersData.map((user) => (
          <UserProfileCard  user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;