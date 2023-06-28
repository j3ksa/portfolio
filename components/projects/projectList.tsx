import { projects } from "info/projects"
import Project from "./project"

const ProjectList = (  ) => {

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-orange-300 to-purple-400 p-20 w-[80%] rounded-b-[20px] rounded-t-[2px] py-4 max-h-[600px] overflow-y-auto">
            <p className="text-xl lg:text-3xl h-[10%] pb-4">Here you can find all the projects i have participated or written myself:</p>
            <div className="space-y-3 mb-8 h-[90%]">
                {projects.map(project => (
                    <Project info={project}/>
                ))}
            </div>

        </div>
    )
}
export default ProjectList