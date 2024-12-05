import React from "react";
import ProfileData from "../components/ProfileData";
import ProfileGuitarData from "../components/ProfileGuitarData";

const profilePage = () => {
  return (
    <div className="space-y-4 mx-2">
      <ProfileData />
      <ProfileGuitarData />
    </div>
  );
};

export default profilePage;
