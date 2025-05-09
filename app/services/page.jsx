"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Lorem ipsum dolor. Eaque nostrum enim magni non. Sequi, vero.",
        href: ""
    },
    {
        num: "02",
        title: "SEO",
        description: "Lorem ipsum dolor. Eaque nostrum enim magni non. Sequi, vero.",
        href: ""
    },
    {
        num: "03",
        title: "UI/UX Design",
        description: "Lorem ipsum dolor. Eaque nostrum enim magni non. Sequi, vero.",
        href: ""
    },
    {
        num: "04",
        title: "Appointment Setter",
        description: "Lorem ipsum dolor. Eaque nostrum enim magni non. Sequi, vero.",
        href: ""
    }
]

export default function Services() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeIn"
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-blue-500 transition-all duration-500">{service.num}
                                    </div>
                                    <Link href={service.href} className="w-[50px] h-[50px] bg-white rounded-full group-hover:bg-blue-500 transition-all duration-500 flex items-center justify-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-[#1c1c22] text-3xl" />
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold group-hover:text-blue-500 transition-all duration-500">{service.title}</h2>
                                <p className="text-white/60">{service.description}</p>
                                <div className="border border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}