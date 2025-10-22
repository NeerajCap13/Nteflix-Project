// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import apiClient from "../API/APIclient.js"; // your axios instance
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  console.log(profile)
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await apiClient.get('/profile');
        setProfile(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        navigate('/')
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await apiClient.post("/logout")
      navigate("/")
    } catch (error) {
      console.log("logout Failed" , error)
    }
  }

  if (loading) return <p>Loading...</p>;

  if (!profile) return <p>Profile not found.</p>;

  const { user, subscription } = profile;

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-info">
        <p><strong>Email:</strong> {user.email}</p>
        {subscription ? (
          <>
            <p><strong>Plan:</strong> {subscription.planName}</p>
            <p><strong>Price:</strong> ₹{subscription.price}</p>
          </>
        ) : (
          <p>No subscription yet.</p>
        )}
      </div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Profile;
