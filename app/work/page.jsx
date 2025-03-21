"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolorem ipsa quae!",
        stack: [{ name: "ReactJS" }, { name: "tailwindcss" }, { name: "Shadcn" }],
        image: "/restaurant.jpg",
        live: "",
        github: ""
    },
    {
        num: "02",
        category: "frontend",
        title: "project 2",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolorem ipsa quae!",
        stack: [{ name: "NextJS" }, { name: "tailwindcss" }],
        image: "/university.jpg",
        live: "",
        github: ""
    },
    {
        num: "03",
        category: "frontend",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolorem ipsa quae!",
        stack: [{ name: "NextJS" }, { name: "tailwindcss" }],
        image: "/e-commerce.jpg",
        live: "",
        github: ""
    },
    {
        num: "04",
        category: "frontend",
        title: "project 4",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolorem ipsa quae!",
        stack: [{ name: "ReactJS" }, { name: "tailwindcss" }],
        image: "/dashboard.jpg",
        live: "",
        github: ""
    },
]

export default function Work() {
    const [project, setProject] = useState(projects[0]);

    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div>
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className="text-[42px] font-bold leading-none text-white capitalize group-hover:text-blue-500 transition-all duration-500">{project.category} project</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {
                                    project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className="text-xl text-blue-500">
                                                {item.name}
                                                {index !== project.stack.length -1 && ","}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-blue-500" />
                                            </TooltipTrigger>

                                            <TooltipContent>
                                                <p>live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-blue-500" />
                                            </TooltipTrigger>

                                            <TooltipContent>
                                                <p>Github Repo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">Slider</div>
                </div>
            </div>
        </motion.section>
    )
}