import HeroBanner from "@/components/common/HeroBanner";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";




const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};





export default function About() {


    return (


        <div className="w-full text-gray-900 overflow-hidden">



            {/* ---------------- HERO ---------------- */}
            <HeroBanner
                title="About Us"
                desc="Kerala's trusted distributor of Porotherm Smart Bricks — Building greener, stronger, and smarter future-ready walls."
                image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-fotoaibe-1571460.jpg&fm=jpg"
            />



            <div className="px-2 sm:px-10 lg:px-20 pb-5">


                {/* ---------------- INTRO ---------------- */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-7xl mx-auto py-2 sm:py-8 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
                        Smart Bricks for a Smarter Tomorrow
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-serif">
                        MS Tiles Agencies brings the internationally acclaimed Porotherm Smart Bricks to Kerala,
                        offering sustainable, energy-efficient, and durable solutions for modern construction.
                    </p>
                </motion.section>


                {/* ---------------- FOUNDER ---------------- */}
                <section className="py-5 sm:py-14 border-t-2 border-dashed border-gray-300">
                    <div className="grid md:grid-cols-2 gap-5 sm:gap-12 items-center">

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://media.istockphoto.com/id/629163938/photo/successful-senior-businessman-standing-in-office.jpg?s=612x612&w=0&k=20&c=Xyxtfzb-z4-6AF93f24LtnN6xQ2uyj4oSYg3B2AsZ9I="
                                alt="Founder Muhammed Bappu"
                                loading="lazy"
                                className="rounded-2xl sm:shadow-2xl w-full object-cover"
                            />
                        </motion.div>

                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Stand with Experience & Vision</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed text-justify font-serif">
                                Founded by <strong>Muhammed Bappu</strong>,the visionary founder of MS Tiles Agencies, has dedicated over 50 years to pioneering excellence within the highly competitive hot clay distribution industry.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed text-justify font-serif">
                                His distinguished career includes collaboration with legendary companies such as Feroke Tile, Hollow Bricks, and BTW, providing him with an unparalleled depth of knowledge regarding material quality and construction needs in Kerala
                            </p>
                            <p className="text-gray-700 leading-relaxed text-justify font-serif">
                                This profound legacy of experience ensures MS Tiles Agencies provides expert, reliable consultation and superior building materials, positioning the company as the definitive distributor of innovative solutions like Porotherm Smart Bricks. We are committed to continuing this tradition of quality and trust for every project we support.
                            </p>
                        </motion.div>
                    </div>
                </section>


                {/* ---------------- CHAIRMAN ---------------- */}
                <section className="py-5 sm:py-14 border-t-2 border-dashed border-gray-300">

                    <div className="grid md:grid-cols-2 gap-5 sm:gap-12 items-center">

                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <h3 className="text-3xl md:text-4xl font-bold mb-2 font-serif">Md. Mujeeb Reham</h3>
                            <p className="text-md font-semibold text-red-600 mb-4 font-serif">
                                Chairman & Managing Director
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed text-justify font-serif">
                                It is with immense pride that I address you as the Chairman of MS Tiles Agencies. Building on the strong foundation and five-decade legacy established by our founder, Muhammed Bappu, we remain steadfast in our pursuit of excellence.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-justify font-serif">
                                Our partnership as the trusted distributor of Wienerberger Porotherm Smart Bricks reflects our commitment to bringing global innovation to Kerala. We don't just supply blocks; we deliver superior thermal efficiency, speed, and sustainability. Our aim is to empower every builder and homeowner to construct high-quality, green buildings that are built to last. Thank you for placing your trust in MS Tiles as we shape the future of construction together.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://media.istockphoto.com/id/629163938/photo/successful-senior-businessman-standing-in-office.jpg?s=612x612&w=0&k=20&c=Xyxtfzb-z4-6AF93f24LtnN6xQ2uyj4oSYg3B2AsZ9I="
                                alt="Chairman Mujeeb Reham"
                                loading="lazy"
                                className="rounded-2xl shadow-2xl w-full object-cover"
                            />
                            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-blue-300 blur-3xl opacity-40"></div>
                        </motion.div>

                    </div>
                </section>


                {/* ---------------- MARKETING TEAM ---------------- */}
                <section className="py-5 sm:py-14 border-t-2 border-dashed border-gray-300">
                    <div className="grid md:grid-cols-2 gap-5 sm:gap-10 items-center">

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
                                alt="Marketing Team"
                                loading="lazy"
                                className="rounded-2xl w-full object-cover shadow-xl"
                            />
                            <div className="absolute -top-6 -left-4 w-24 h-24 bg-pink-300 blur-3xl opacity-40"></div>
                        </motion.div>

                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-serif">
                                Our Marketing Team: Driving Innovation Forward
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed text-justify font-serif">
                                The MS Tiles Marketing Team is dedicated to showcasing how Porotherm Smart Bricks redefine modern construction. We work closely with architects, builders, and agencies, providing detailed resources on the sustainability, technical advantages, and cost efficiencies of the full Wienerberger range.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-justify font-serif">
                                Our mission is to educate the market, promote green building practices, and ensure every stakeholder understands the value of choosing high-quality, innovative walling solutions supplied by MS Tiles.
                            </p>
                        </motion.div>

                    </div>
                </section>


                {/* ---------------- QUALITY & DELIVERY ---------------- */}
                <section className="py-5 sm:py-10 px-2 sm:px-10 bg-linear-to-br from-gray-50 to-gray-100 rounded-3xl shadow-inner">

                    <div className="max-w-5xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 font-serif">Quality & Delivery Commitment</h2>
                        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed font-serif">
                            At MS Tiles Agencies, our top priority is ensuring both uncompromising Quality and reliable Delivery for every project in Kerala. We exclusively provide certified Porotherm Smart Bricks, backed by five decades of logistical expertise, guaranteeing your materials arrive on time, every time, ready for seamless, efficient construction
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 sm:gap-10">
                        {/* Quality */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-3 sm:p-6 text-center"
                        >
                            <img
                                src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
                                alt="Quality Assurance"
                                loading="lazy"
                                className="rounded-xl w-full shadow-md mb-5"
                            />
                            <h4 className="text-xl font-semibold mb-2 font-serif">Quality Assurance</h4>
                            <p className="text-gray-700 font-serif">
                                Only certified Porotherm Smart Bricks backed by decades of trust.
                            </p>
                        </motion.div>

                        {/* Delivery */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-center"
                        >
                            <img
                                src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
                                alt="Delivery Punctuality"
                                loading="lazy"
                                className="rounded-xl w-full shadow-md mb-5"
                            />
                            <h4 className="text-xl font-semibold mb-2 font-serif">Punctual Delivery</h4>
                            <p className="text-gray-700 font-serif">
                                Strong logistics ensure timely delivery for every project.
                            </p>
                        </motion.div>
                    </div>
                </section>


                {/* ---------------- CTA SECTION ---------------- */}
                <section className="px-0 md:px-10 lg:px-20 py-8">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="relative w-full rounded-3xl overflow-hidden shadow-xl"
                    >


                        {/* Background Image */}
                        <img
                            src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?cs=srgb&dl=pexels-pixabay-276724.jpg&fm=jpg"
                            alt="Living room CTA background"
                            loading="lazy"
                            className="w-full h-[350px] sm:h-[420px] md:h-[480px] object-cover"
                        />


                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>


                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

                            {/* Heading */}
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-serif"
                            >
                                Ready to Build Smarter?
                            </motion.h2>


                            {/* Subtext */}
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-white/90 text-sm sm:text-base mt-4 max-w-2xl font-serif"
                            >
                                Explore Kerala’s finest Porotherm Smart Bricks and make your next project
                                stronger, greener, and more efficient.
                            </motion.p>


                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.7 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="mt-6"
                            >
                                <Link to="/products" className="group">
                                    <button
                                        className="px-6 py-3 text-sm md:text-base font-serif font-medium rounded-full bg-[#3EE5B1] text-[#062B22] shadow-lg flex items-center gap-2 hover:bg-[#33d2a1] hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:cursor-pointer"
                                    >
                                        Explore Products
                                        <MoveUpRight size={18} className="transition-transform group-hover:translate-x-1" />
                                    </button>
                                </Link>
                            </motion.div>

                        </div>

                    </motion.div>

                </section>

            </div>
        </div>
    );
}
