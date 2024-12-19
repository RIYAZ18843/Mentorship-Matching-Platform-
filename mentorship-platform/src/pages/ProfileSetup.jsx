// src/pages/ProfileSetup.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProfileSetup = () => {
  const [profile, setProfile] = useState({
    bio: '',
    skills: '',
    interests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    if (!profile.bio || !profile.skills || !profile.interests) {
      toast.error('Please fill in all profile fields!');
      return;
    }
    toast.success('Profile saved successfully!');
  };

  return (
    <div className="profile-setup">
      <h2>Set Up Your Profile</h2>
      <textarea
        name="bio"
        placeholder="Write a short bio..."
        value={profile.bio}
        onChange={handleChange}
      />
      <input
        type="text"
        name="skills"
        placeholder="Enter your skills"
        value={profile.skills}
        onChange={handleChange}
      />
      <input
        type="text"
        name="interests"
        placeholder="Enter your interests"
        value={profile.interests}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
};

export default ProfileSetup;
