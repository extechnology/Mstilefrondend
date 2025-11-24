import { motion } from "framer-motion";
import { Check, Truck, Leaf, Star } from "lucide-react";
import CountUp from "../CountUp";



const stats = [
    { value: 2800, symbol: "+", label: "Recommended Engineers" },
    { value: 10, symbol: "K+", label: "Completed Projects" },
    { value: 10, symbol: "+", label: "Showroom Locations" },
    { value: 5, symbol: "LK+", label: "Satisfied Customers" },
];



const features = [
    {
        icon: <Check size={18} strokeWidth={2} />,
        title: "Custom-made options tailored to your space",
    },
    {
        icon: <Leaf size={18} strokeWidth={2} />,
        title: "Sustainably sourced materials",
    },
    {
        icon: <Truck size={18} strokeWidth={2} />,
        title: "Free nationwide shipping",
    },
    {
        icon: <Star size={18} strokeWidth={2} />,
        title: "Designed for long-lasting comfort and durability",
    },
];



export default function Us() {


    return (


        <section className="w-full bg-[#FBFAF6] py-6 sm:py-12 px-4 md:px-10 lg:px-20">


            {/* Top stats pill */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9 }}
                className="w-full mb-10"
            >
                <div
                    className="rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{ backgroundColor: "#053C35" }}
                >

                    {stats.map((s, i) => (
                        <div key={i} className="flex-1 text-center min-w-[120px]">
                            <div className="text-2xl md:text-3xl font-bold text-white">
                                <CountUp
                                    from={0}
                                    to={s.value}
                                    separator=","
                                    direction="up"
                                    startWhen={true}
                                    duration={1}
                                    className="count-up-text"
                                />
                                {s.symbol}
                            </div>
                            <div className="text-sm md:text-base text-white/80 mt-1">
                                {s.label}
                            </div>
                        </div>
                    ))}

                </div>

            </motion.div>


            {/* Main content - 2 columns */}
            <motion.div
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9 }}
            >

                {/* Left image */}
                <motion.div
                    className="w-full"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://homeone.in/wp-content/uploads/2025/01/home-interior-design-1.jpg"
                            loading="lazy"
                            alt="Cozy living room with plants and wooden furniture"
                            className="w-full h-[420px] md:h-[520px] object-cover block"
                        />
                    </div>
                </motion.div>


                {/* Right content */}
                <motion.div className="w-full">

                    <h3 className="text-3xl md:text-4xl font-bold text-[#0f2b25] leading-tight">
                        Why our furniture stands out
                    </h3>

                    <p className="text-sm md:text-base text-[#55615a] mt-4 max-w-xl">
                        We believe great furniture should be both beautiful and functional.
                        Here's why customers love us:
                    </p>

                    {/* Feature list */}
                    <div className="mt-6 space-y-4">
                        {features.map((f, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-start gap-4"
                            >
                                <div
                                    className="flex-none w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                                    style={{ backgroundColor: "#DFF7EC" }}
                                    aria-hidden
                                >
                                    <div className="text-[#0f2b25]">{f.icon}</div>
                                </div>
                                <div className="text-sm md:text-base text-[#254136]">
                                    {f.title}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        whileHover={{ y: -3 }}
                        className="mt-8"
                    >
                        <a
                            href="#contact"
                            className="inline-block rounded-full px-6 py-3 text-sm md:text-base font-medium shadow-md"
                            style={{
                                backgroundColor: "#3EE5B1",
                                color: "#062b22",
                            }}
                        >
                            Call Now for Consultation
                        </a>
                    </motion.div>

                </motion.div>

            </motion.div>

        </section>
    )
}
