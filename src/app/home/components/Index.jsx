import { Divider } from "@nextui-org/react";
import HeaderHome from './Head'

import Career from './Career'
import SkillLists from './SkillList'
import ContainerAOS from "@/components/elements/ContainerAOS";
export default function Index() {
  return(
    <ContainerAOS>
      <div className=''>
      <HeaderHome/>
      <Divider orientation='horizontal' className='my-6'/>
      <Career/>
      <Divider orientation='horizontal' className='my-6'/>
      <SkillLists/>
      <Divider orientation='horizontal' className='my-6'/>
    </div>
    </ContainerAOS>
    
  )
}