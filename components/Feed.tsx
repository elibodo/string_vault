"use client";

import React, { useState, useEffect } from "react";
import GuitarCard from "./GuitarCard";
import { supabase } from "@/lib/supabaseClient";

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

interface FeedProps {
  searchQuery: string;
  brands: string[];
  models: string[];
  countries: string[];
}

const Feed: React.FC<FeedProps> = ({
  searchQuery,
  brands,
  models,
  countries,
}) => {
  const [guitars, setGuitars] = useState<Guitar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuitars = async () => {
      setLoading(true);
      try {
        let query = supabase.from("guitars").select("*");

        if (searchQuery) {
          query = query.or(
            `brand.ilike.%${searchQuery}%,model.ilike.%${searchQuery}%,madein.ilike.%${searchQuery}%,submodel.ilike.%${searchQuery}%`
          );
        }

        if (brands.length > 0) {
          query = query.in("brand", brands);
        }

        if (models.length > 0) {
          query = query.in("model", models);
        }

        if (countries.length > 0) {
          query = query.in("madein", countries);
        }

        const { data, error } = await query;
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
  }, [searchQuery, brands, models, countries]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {guitars.length === 0 ? (
        <div className="flex justify-center w-full text-xl mt-10">
          Please expand search to view guitars
        </div>
      ) : (
        <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {guitars.map((guitar) => (
            <GuitarCard key={guitar.id} guitar={guitar} />
          ))}
        </div>
      )}
    </>
  );
};

export default Feed;
