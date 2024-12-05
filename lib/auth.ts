import { supabase } from "./supabaseClient";

// Sign In with Google
export const signInWithGoogle = async (): Promise<void> => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    console.error("Error signing in with Google:", error.message);
    throw error;
  }
};

// Sign Out
export const signOut = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error.message);
    throw error;
  }
};

// Get Current Session
export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("Error fetching session:", error.message);
    throw error;
  }
  return data.session;
};
