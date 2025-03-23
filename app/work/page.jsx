"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import WorkSliderBtns from "@/components/WorkSliderBtns"

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

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
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
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <SwiperSlide className="w-full">
                                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                                <div className="w-full h-full absolute top-0 bottom-0 bg-black/10 z-10"></div>
                                                <div className="relative w-full h-full">
                                                    <Image src={project.image} alt="" fill className="object-cover" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-blue-500 hover:bg-blue-600 text-[#1c1c23] text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper> 
                    </div>
                </div>
            </div>
        </motion.section>
    )
}