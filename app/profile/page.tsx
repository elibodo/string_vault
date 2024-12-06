"use client";

import React from "react";
import ProfileData from "../../components/ProfileData";
import ProfileGuitarData from "../../components/ProfileGuitarData";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push("/");
    }
  }, [loading, session, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-4 mx-2">
      <ProfileData />
      <ProfileGuitarData />
    </div>
  );
};

export default ProfilePage;
