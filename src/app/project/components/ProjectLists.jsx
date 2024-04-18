"use client";
import { PROJECTLISTS } from "@/constants/Project/ProjectData";
import ProjectCard from "./ProjectCards";
import { motion } from "framer-motion";

export default function ProjectsLists() {
  return (
<div className="container mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center mb-10">
    {/* Memanggil ProjectCard */}
    {PROJECTLISTS.map((item, index) => (
      
        <ProjectCard
          Index={index}
          key={index}
          description={item.description}
          image={item.image}
          title={item.title}
          slug={item.slug}
          demo_url={item.demo_url}
        />
    ))}
  </div>
</div>
  );
}
