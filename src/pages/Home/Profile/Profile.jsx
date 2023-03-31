import { useQuery } from "@tanstack/react-query";
import React from "react";
import BigSpinner from "../../../components/BigSpinner";
import SingleProfileCard from "./SingleProfileCard";

const Profile = () => {
  const { data: profiles = [], isLoading } = useQuery({
    queryKey: ["allTeamMember"],
    queryFn: async () => {
      const res = await fetch("https://law-firm-server.vercel.app/profile");
      const data = await res.json();
      return data;
    },
  });


  if(isLoading){
    return <BigSpinner></BigSpinner>
  }

  return (
    <div className="container mx-auto px-3 lg:py-20 py-6">
      <div className="text-center">
        <div className="">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Profile
          </p>
        </div>
        <h2 className="text-3xl font-bold uppercase lg:pb-8 pb-3">Our Team</h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {profiles.map((profile) => (
          <SingleProfileCard
            key={profile._id}
            profile={profile}
          ></SingleProfileCard>
        ))}
      </div>
    </div>
  );
};

export default Profile;
