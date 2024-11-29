import { InstagramFollower } from "@/app/api/followers/route";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import axios from "axios";

const useFollowers = () => {
  const [followers, setFollowers] = useState<InstagramFollower[] | null>(null);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  console.log("🚀 ~ useFollowers ~ user:", user);

  const fetchFollowersData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/followers?user_id=${user?.id}`);

      setFollowers(response.data?.followers);
    } catch (error) {
      console.error("Error fetching followers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchFollowersData();

    return () => {
      setFollowers(null);
    };
  }, [user]);

  return {
    followers,
    loading,
  };
};

export default useFollowers;
