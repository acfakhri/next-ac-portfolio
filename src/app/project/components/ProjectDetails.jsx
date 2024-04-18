"use client"

import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import BackButton from "@/components/elements/BackButton";
import DashedDivider from "@/constants/Project/DashedDivider";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { PROJECTLISTS } from "@/constants/Project/ProjectData";

export default function ProjectDetail() {
  const _params = useParams();

  const projects = PROJECTLISTS.find((projects) => {
    return projects.slug === _params.slug;
  });

  if (!projects) {
    return <div>Proyek tidak ditemukan.</div>;
  }

  return (
    <>
      <div className="h-screen">
        {projects && (
          <div className="space-y-6 ">
            <div className="space-y-2">
              <BackButton href={"/projects"} />
              <SectionHeading title={projects.title} />
              <SectionSubHeading>
                <p>{projects.description}</p>
              </SectionSubHeading>
            </div>
            <DashedDivider />
            <div className="space-y-2">
              <div className="flex md:justify-between md:flex-row flex-col space-y-6 md:space-y-0">
                <div className="flex  items-center gap-2 text-sm">
                  Tech Stack :
                  <div className="flex items-center  text-2xl gap-4">
                    
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={'/'}
                    className="flex items-center gap-2"
                  >
                    <SiGithub className="text-2xl" /> Source Code
                  </Link>{" "}
                  |{" "}
                  <Link
                    href={projects.demo_url}
                    className="flex items-center gap-2"
                  >
                    <BiLinkExternal className="text-2xl" /> Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <Image
                src={projects.image}
                alt={projects.title}
                width={900}
                height={900}
                priority
                className="w-full hover:scale-105 scale-100 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
