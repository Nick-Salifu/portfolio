"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodejs} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"
import {Tabs, TabsContent, TabsTrigger, TabsList} from "@/components/ui/tabs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {ScrollArea} from "@/components/ui/scroll-area"
import {motion} from "framer-motion"

const about = {
    title: "about me",
    description: "Lorem ipsum dolor. Eaque nostrum enim magni non. Sequi, vero.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Nick Salifu"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+234) 8023603415"
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ Years"
        },
        {
            fieldName: "LinkedIn",
            fieldValue: "Friday Nicodemus Salifu"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Nigerian"
        },
        {
            fieldName: "Email",
            fieldValue: "Nicksalifu@outlook.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Italiano"
        },
    ]
}

const experience = {
    icon: "",
    title: "My experience",
    description: "Lorem ipsum dolor. Eaque nostrum enim magni non. Sequi, vero enim magni non. Sequi, vero enim magni non. Sequi, vero.",
    items: [
        {
            company: "IT Dynamics Limited",
            position: "Front-End Developer",
            duration: "2021-2023",
        },
        {
            company: "HNG Tech",
            position: "Front-End Developer",
            duration: "2023-2024",
        },
    ]
}

const education = {
    icon: "",
    title: "My education",
    description: "Lorem ipsum dolor. Eaque nostrum enim magni non. Sequi, vero.",
    items: [
        {
            institution: "University of Ilorin, Nigeria",
            degree: "Information and Communication Science",
            duration: "2017-2022",
        },
        {
            institution: "Code Academy",
            degree: "Front-End Development",
            duration: "2023",
        },
    ]
}

const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor. Eaque nostrum enim magni non. Sequi, vero.",
    skillsList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css"
        },
        {
            icon: <FaNodejs />,
            name: "node.js"
        },
        {
            icon: <FaFigma />,
            name: "figma"
        },
    ]
}


export default function Resume() {
    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col gap-6 w-full max-w-[380px] mx-auto xl:mx-0">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about me">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-w-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>

                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <span>{item.duration}</span>
                                                    <h3>{item.position}</h3>
                                                    <div>
                                                        <span></span>
                                                        <p>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                            education
                        </TabsContent>

                        <TabsContent value="skills" className="w-full">
                            skills
                        </TabsContent>

                        <TabsContent value="about" className="w-full">
                            about
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}