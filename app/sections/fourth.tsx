"use client"

import { useRef, useState } from "react"

const categories = [
    {
        key: "freelancers",
        label: "Freelancers & Creators",
        image: "/freelancer.webp",
        description:
            "Create global accounts and receive international payments easily from Freelance Marketplaces & Global Clients.",
    },
    {
        key: "travelers",
        label: "Travelers",
        image: "/traveler.webp",
        description: "Use your card at Visa merchants worldwide while you travel.",
    },
    {
        key: "shoppers",
        label: "Online Shoppers",
        image: "/onlineshopper.webp",
        description: "Use virtual dollar cards for international shopping.",
    },
    {
        key: "students",
        label: "Students",
        image: "/student.webp",
        description:
            "Easily pay for courses, subscriptions, and study materials via our USD card.",
    },
    {
        key: "social-sellers",
        label: "Social Sellers",
        image: "/socialseller.webp",
        description:
            "Accept payments from customers worldwide through payment links.",
    },
]

export default function FourthSection() {
    const [activeKey, setActiveKey] = useState(categories[0].key)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const panelRefs = useRef<Record<string, HTMLDivElement | null>>({})

    const handlePillClick = (key: string) => {
        setActiveKey(key)

        const container = scrollContainerRef.current
        const panel = panelRefs.current[key]
        if (!container || !panel) return

        // Compute the scroll offset needed to center `panel` inside
        // `container`, and scroll only that container — never the page.
        const containerRect = container.getBoundingClientRect()
        const panelRect = panel.getBoundingClientRect()
        const offset =
            panelRect.left -
            containerRect.left -
            (containerRect.width - panelRect.width) / 2

        container.scrollTo({
            left: container.scrollLeft + offset,
            behavior: "smooth",
        })
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl bg-white py-7 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <h2 className="text-2xl sm:text-3xl lg:text-[45px] text-gray-800 font-semibold">
                        Raenest for everyone
                    </h2>

                    <div className="-mx-4 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0 lg:overflow-visible">
                        <div
                            role="tablist"
                            aria-label="Who Raenest is for"
                            className="flex w-max items-center gap-2 sm:gap-3 rounded-full bg-gray-200 py-2 px-3 font-semibold"
                        >
                            {categories.map((category) => (
                                <button
                                    key={category.key}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeKey === category.key}
                                    aria-controls={`panel-${category.key}`}
                                    onClick={() => handlePillClick(category.key)}
                                    className={`rounded-full py-1 px-2 text-sm sm:text-base cursor-pointer transition-colors whitespace-nowrap ${
                                        activeKey === category.key
                                            ? "bg-black text-white"
                                            : "bg-white text-black"
                                    }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="mx-auto max-w-7xl bg-white py-7 px-4 sm:px-6 lg:px-8 flex items-center gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {categories.map((category) => (
                    <div
                        key={category.key}
                        id={`panel-${category.key}`}
                        role="tabpanel"
                        aria-label={category.label}
                        ref={(el) => {
                            panelRefs.current[category.key] = el
                        }}
                        className="bg-cover bg-center h-[300px] sm:h-[380px] lg:h-[500px] w-[85vw] sm:w-[560px] lg:w-[932px] max-w-[932px] flex-shrink-0 rounded-3xl flex flex-col justify-between snap-center"
                        style={{ backgroundImage: `url('${category.image}')` }}
                    >
                        <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold p-6 sm:p-8 lg:p-12">
                            {category.label}
                        </h3>
                        <p className="text-white text-sm sm:text-base lg:text-[18px] font-semibold p-6 sm:p-8 lg:p-12 leading-relaxed">
                            {category.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}