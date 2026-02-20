import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import GitHubStats from "./sections/GitHubStats";
import Hobbies from "./sections/Hobbies";
import Contacts from "./sections/Contacts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black text-gray-100 overflow-x-hidden">
      <Loader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <GitHubStats />
      <Hobbies />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
