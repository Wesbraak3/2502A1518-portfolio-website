import { ProjectCard } from '@/components/molecules/ProjectCard'

export default function Home() {
  return (
    <>
      <div className="grid items-center justify-items-center mb-8">
        <div className="mb-2">
          about me
        </div>
        read more here
      </div>

      <div className="grid justify-items-center">  
        <div className="w-[80%] max-w-full"> 
          <ProjectCard title='Project Title' image='/' description='d aaaa aaaaas ss sssss s sssss sssss sss sssss ssssss ss sss sssaaa a aaa aa aa aaa escription of the project no what if the text here is a bit long would this matter with the way t sset up right now becouse there is goung to be an intire project desctiption here' link='/'/>
          <ProjectCard title='Project Title' image='/' description='description of the project' link='/'/>
        </div>
      </div>
    </>
  );
}