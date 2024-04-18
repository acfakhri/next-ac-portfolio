import ContainerAOS from "@/components/elements/ContainerAOS";
import Index from "./components/index";

export const metadata = {
  title: "Projects ",
  description: "Software Engineer portfolio ideas",
  keywords: "portfolio frontend developer",
};

export default function Projects() {
  return (
    <>
      <ContainerAOS>
        <Index />
      </ContainerAOS>
    </>
  );
}
