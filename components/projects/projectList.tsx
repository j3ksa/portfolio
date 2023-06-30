import { projects } from "info/projects"
import Project from "./project"

const ProjectList = (  ) => {

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-orange-300 from-[80%] to-red-400 space-y-8 w-full lg:w-[80%] lg:rounded-b-[20px] lg:rounded-t-[2px] py-4 h-[600px] overflow-y-auto">
            <p className="text-xl lg:text-3xl text-center">Here you can find all the projects i have participated or written myself:</p>
            <div className="space-y-3 h-[80%]">
                {projects.map(project => (
                    <Project info={project}/>
                ))}
            </div>

        </div>
    )
}
export default ProjectList