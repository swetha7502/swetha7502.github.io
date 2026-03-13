const timeline = [

    {
        year: "2025-2027",
        title: "M.S Computer Science",
        place: "The Pennsylvania State University",
        logo: "/logos/psu.png"
    },
    {
        year: "2024-2025",
        title: "Associate Applications Developer",
        place: "Oracle",
        logo: "/logos/oracle.png"
    },
    {
        year: "2024-2024",
        title: "Project Intern",
        place: "Oracle",
        logo: "/logos/oracle.png"
    },
    {
        year: "2023-2023",
        title: "Summer Intern",
        place: "Citi",
        logo: "/logos/citi.jpg"
    },
    {
        year: "2020-2024",
        title: "B.Eng Computer Science",
        place: "Anna University",
        logo: "/logos/annauni.png"
    },
    {
        year: "2020-2024",
        title: "B.S Data Science & Programming(Hybrid)",
        place: "IIT Madras",
        logo: "/logos/iitm.png"
    }

]


export default function Timeline() {

    return (

        <section id ="timeline" className="py-28">

            <h2 className="text-4xl font-bold text-center mb-24">
                Experience
            </h2>

            <div className="relative max-w-5xl mx-auto">

                {/* vertical line */}

                <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gray-400 h-full"></div>

                {timeline.map((item, i) => {

                    const left = i % 2 === 0

                    return (

                        <div key={i} className="relative flex items-center mb-24">

                            {/* glowing node */}

                            <div className="absolute left-1/2 -translate-x-1/2">

                                <div className="w-6 h-6 bg-blue-400 rounded-full shadow-[0_0_12px_#f472b6]"></div>

                            </div>

                            {/* LEFT SIDE */}

                            {left && (

                                <div className="w-1/2 flex justify-end items-center gap-6 pr-12">

                                    <div className="text-right">

                                        <p className="text-orange-500 font-bold">
                                            {item.year}
                                        </p>

                                        <h3 className="font-bold text-lg">
                                            {item.place}
                                        </h3>

                                        <p className="text-gray-400">
                                            {item.title}
                                        </p>

                                    </div>

                                    <img
                                        src={item.logo}
                                        className="w-35 h-40 object-contain"
                                    />

                                    <div className="w-16 h-[2px] bg-gray-400"></div>

                                </div>

                            )}

                            {/* RIGHT SIDE */}

                            {!left && (

                                <div className="w-1/2 ml-auto flex items-center gap-6 pl-12">

                                    <div className="w-16 h-[2px] bg-gray-400"></div>

                                    <img
                                        src={item.logo}
                                        className="w-35 h-40 object-contain"
                                    />

                                    <div>

                                        <p className="text-orange-500 font-bold">
                                            {item.year}
                                        </p>

                                        <h3 className="font-bold text-lg">
                                            {item.place}
                                        </h3>

                                        <p className="text-gray-400">
                                            {item.title}
                                        </p>

                                    </div>

                                </div>

                            )}

                        </div>

                    )

                })}

            </div>

        </section>

    )
}