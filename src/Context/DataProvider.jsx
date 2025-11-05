import React, { useState, useEffect } from "react";
import { DataContext } from "./DataContext.";

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    // Fetch portfolio data from public folder
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((portfolioData) => {
        // Process the portfolio data
        console.log(portfolioData);
        const userInfo = portfolioData.find((item) => item._id === "user_001");
        const socialLinks = portfolioData.find((item) => item._id === "social_001");
        const about = portfolioData.find((item) => item._id === "about_001");
        const skills = portfolioData.find((item) => item._id === "skill_001");
        const projects = portfolioData.find((item) => item._id === "project_000");
        const education = portfolioData.find((item) => item._id === "edu_001");
        const certifications = portfolioData.find((item) => item._id === "certifications_001");
        const experience = portfolioData.find((item) => item._id === "exp_001");

        setData({
          userInfo,
          socialLinks: socialLinks?.links || [],
          about,
          skills: skills?.categories || [],
          projects: projects?.projects || [],
          education,
          certifications: certifications?.certificates || [],
          experience,
        });
      })
      .catch((error) => {
        console.error("Error loading portfolio data:", error);
      });
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
