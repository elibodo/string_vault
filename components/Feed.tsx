"use client";

import React from "react";
import GuitarCard from "./GuitarCard";
import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect } from "react";

interface Guitar {
  id: string;
  brand: string;
  model: string;
  submodel: string;
  year: number;
  madein: string;
  cost: number;
  value: number;
  serialnumber: string;
  purchasedate: string;
  servicedate: string;
  image_url: string;
  user_id: string;
}

const Feed = () => {
  const [guitars, setGuitars] = useState<Guitar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuitars = async () => {
      try {
        const { data, error } = await supabase.from("guitars").select("*");

        if (error) throw error;
        setGuitars(data || []);
      } catch (err) {
        setError("Failed to load guitars");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGuitars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {guitars.map((guitar) => (
        <GuitarCard key={guitar.id} guitar={guitar} />
      ))}
    </div>
  );
};

export default Feed;
