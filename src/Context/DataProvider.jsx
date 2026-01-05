import React, { useState, useEffect } from "react";
import { DataContext } from "./DataContext.";

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  console.log(data);
  const loadData = () => {
    return fetch("https://portfolio-server-tau-kohl.vercel.app/user")
      .then((response) => response.json())
      .then((portfolioData) => {
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
      });
  };
  useEffect(() => {
    loadData()
      .catch((error) => {
        console.error("Error loading portfolio data:", error);
      });
  }, []);

  const value = data
    ? {
        ...data,
        refreshPortfolioData: loadData,
        setUserInfo: (next) =>
          setData((prev) => ({ ...prev, userInfo: typeof next === "function" ? next(prev.userInfo) : next })),
      }
    : null;

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
