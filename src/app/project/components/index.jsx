import SectionHeading from "@/components/elements/SectionHeading";
import ProjectLists from "./ProjectLists";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import DashedDivider from "@/constants/Project/DashedDivider";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default function Index() {
  return (
    <div className="h-full">
      <div className="space-y-6">
        <div className="space-y-2">
          <SectionHeading title="Projects" />
          <SectionSubHeading>
            <p className="dark:text-neutral-400">
              Showcasing my passion for technology, design, and problem-solving
              through code.
            </p>
          </SectionSubHeading>
        </div>
        <DashedDivider />

        <ProjectLists />
      </div>
    </div>
  );
}
