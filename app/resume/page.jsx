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
    description: "Lorem ipsum dolor. Eaque nostrum enim magni non. Sequi, vero.",
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
                    <TabsList>
                        <TabsTrigger>Experience</TabsTrigger>
                        <TabsTrigger>Education</TabsTrigger>
                        <TabsTrigger>Skills</TabsTrigger>
                        <TabsTrigger>About me</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </motion.div>
    )
}