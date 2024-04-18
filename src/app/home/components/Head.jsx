import Coffee from "./elements/Coffee"


export default function HeaderHome() {
  return (
    <div className="flex flex-col">
      <div className='flex flex-row justify-between'>
      <h1 className="md:text-3xl text-2xl font-medium flex gap-1">Welcome to my portfolio pages </h1>
        <Coffee/>
      </div>
      <ul className='flex md:space-x-8 space-x-0 px-5 py-2 md:flex-row flex-col '>
        <li className='list-disc text-md'>Junior FullStack Web Developer</li>
        <li className='list-disc text-md'>From Riau, Indonesia </li>
      </ul>
\      
    </div>
  )
}