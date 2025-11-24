import { motion } from "framer-motion";




const CTASection = () => {


    return (


        <section className="w-full px-4 md:px-10 lg:px-20 py-10">


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative w-full rounded-3xl overflow-hidden shadow-xl"
            >


                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
                    alt="Living room CTA background"
                    loading="lazy"
                    className="w-full h-[350px] sm:h-[420px] md:h-[480px] object-cover"
                />


                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>


                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

                    {/* Small tag */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="mb-4"
                    >
                        <span className="px-4 py-1 text-sm font-medium rounded-full bg-white shadow-md">
                            Get Started Today
                        </span>
                    </motion.div>


                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                    >
                        It All Starts With a <br className="hidden sm:block" /> Simple Call
                    </motion.h2>


                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-white/90 text-sm sm:text-base mt-4 max-w-2xl"
                    >
                        Speak to our furniture experts and find the perfect pieces for your home.
                        We're here to help!
                    </motion.p>


                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-6"
                    >
                        <button
                            className="px-6 py-3 text-sm md:text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                            style={{ backgroundColor: "#3EE5B1", color: "#062B22" }}
                        >
                            Talk to Our Experts
                        </button>
                    </motion.div>

                </div>

            </motion.div>

        </section>

    );

};


export default CTASection;
