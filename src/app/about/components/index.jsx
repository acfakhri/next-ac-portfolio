import { Divider } from "@nextui-org/react";
import ContainerAOS from "@/components/elements/ContainerAOS";
import Header from "./Header";
import Education from "./Education";
import Certificates from "./Certificate";

export default function Index() {
  return (
    // <ContainerAOS>
    <div className="h-full ">
      <Header />
      <Divider orientation="horizontal" className="my-4" />
      <Certificates />
      <Divider orientation="horizontal" className="mt-6 mb-4" />
      <Education />
    </div>
    // </ContainerAOS>
  );
}
