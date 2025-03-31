"use client";

import CountUp from "react-countup"

const stats = [
    {
        num: 8,
        text:"Years of experience"
    },
    {
        num: 10,
        text:"Project Completed"
    },
    {
        num: 6,
        text:"Technology mastered"
    },
    {
        num: 400,
        text:"Codes committed"
    },
]

export default function Stats() {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-[80vw] xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div key={index} className="flex-1 items-center flex gap-4 justify-center xl:justify-start">
                                <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />

                                <p className={`${item.text.length > 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}