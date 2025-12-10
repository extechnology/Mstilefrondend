import { ShoppingCart, Layers, Zap, CheckCircle } from "lucide-react";
import HeroBanner from "@/components/common/HeroBanner";
import { PRODUCTS } from "@/lib/mockdata";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



export default function PorothermProductPage() {


    return (


        <div className="w-full bg-linear-to-b from-white to-gray-50 text-gray-900">


            {/* ---------------- HERO ---------------- */}
            <HeroBanner
                title="Products"
                desc="Kerala's trusted distributor of Porotherm Smart Bricks — Building greener, stronger, and smarter future-ready walls."
                image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
            />



            <section className="px-0 sm:px-10 lg:px-16 pb-5 font-serif">


                {/* ---------------- HEADER ---------------- */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <header className="p-6 md:p-12 border rounded-2xl bg-white shadow-md font-serif">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                            <div className="flex items-center gap-4">
                                <div className="rounded-full bg-green-100 p-3 shadow-md">
                                    <Layers className="w-6 h-6 text-green-700" />
                                </div>

                                <div>
                                    <h1 className="text-2xl md:text-3xl font-extrabold">Build smarter with Porotherm Bricks</h1>
                                    <p className="text-sm md:text-base text-gray-600 mt-1 max-w-xl">
                                        Lightweight, durable, eco-friendly, and thermally efficient — built for faster construction & long-lasting strength.
                                    </p>
                                </div>
                            </div>

                            <a
                                href={`https://wa.me/919847603333?text=${encodeURIComponent(
                                    "Hi, I would like to know more about your product: "
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="hidden hover:cursor-pointer md:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full shadow-lg transition-all">
                                    <ShoppingCart className="w-4 h-4" /> Order Now
                                </button>
                            </a>

                        </div>

                    </header>

                </motion.div>



                {/* ---------------- PRODUCTS LIST ---------------- */}
                <main className="p-2 sm:p-6 space-y-12">

                    {PRODUCTS.map((p, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            viewport={{ once: true, amount: 0.2 }}
                            key={index}
                        >

                            <section id={`${p.id}-details`} className="bg-white rounded-2xl border shadow-lg overflow-hidden">


                                <div className="md:flex">


                                    {/* LEFT CONTENT */}
                                    <div className="md:w-1/2 p-6 md:p-10">

                                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">{p.title}</h2>
                                        <p className="text-sm text-gray-600 mb-4">{p.subtitle}</p>

                                        <p className="text-base text-gray-700 leading-relaxed text-justify">{p.heroDescription}</p>


                                        {/* ADVANTAGES */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5, duration: 0.7 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                        >
                                            <div className="mt-6">
                                                <h3 className="text-lg font-semibold mb-2">Key Advantages</h3>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none">
                                                    {p.advantages.map((a, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-1" />
                                                            <span className="text-sm text-gray-700">{a}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>


                                        {/* BUTTONS */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5, duration: 0.7 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                        >

                                            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">


                                                <a
                                                    href={`https://wa.me/919847603333?text=${encodeURIComponent(
                                                        "Hi, I would like to know more about your product: " + p.title
                                                    )}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <button className="bg-emerald-600 hover:cursor-pointer hover:bg-emerald-700 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all">
                                                        <ShoppingCart className="w-5 h-5" /> Order {p.title.split(" ")[0]}
                                                    </button>
                                                </a>



                                                <Link to={'/contact'} className="text-emerald-600 hover:cursor-pointer hover:underline flex items-center gap-2">
                                                    <Zap className="w-4 h-4" /> Request Quote
                                                </Link>

                                            </div>

                                        </motion.div>

                                    </div>


                                    {/* RIGHT IMAGE + TABLE */}
                                    <div className="md:w-1/2 bg-linear-to-tr from-amber-50 to-white p-6 md:p-10">

                                        {/* IMAGE */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5, duration: 0.7 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                        >
                                            <div className="rounded-lg overflow-hidden shadow-inner">
                                                <img
                                                    src={p.image}
                                                    alt={`${p.title} image`}
                                                    loading="lazy"
                                                    className="w-full h-56 sm:h-72 md:h-full object-cover"
                                                />
                                            </div>
                                        </motion.div>

                                        {/* VARIANT TABLE */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5, duration: 0.7 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                        >
                                            <div className="mt-6 overflow-auto">
                                                <h4 className="text-md font-semibold mb-2">Variants & Dimensions</h4>

                                                <table className="w-full text-left border-collapse min-w-[520px]">
                                                    <thead>
                                                        <tr className="text-xs text-gray-500 border-b">
                                                            <th className="py-2">Name</th>
                                                            <th className="py-2">Length</th>
                                                            <th className="py-2">Width</th>
                                                            <th className="py-2">Height</th>
                                                            <th className="py-2">Weight</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {p.variants.map((v, i) => (
                                                            <tr key={i} className="text-sm border-b last:border-b-0">
                                                                <td className="py-3 font-medium">{v.name}</td>
                                                                <td className="py-3">{v.length ?? "-"}</td>
                                                                <td className="py-3">{v.width ?? "-"}</td>
                                                                <td className="py-3">{v.height ?? "-"}</td>
                                                                <td className="py-3">{v.weight ?? "-"}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </motion.div>

                                    </div>
                                </div>

                            </section>
                        </motion.div>
                    ))}


                    {/* ---------------- CTA SECTION ---------------- */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <section className="bg-emerald-600 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-bold">Ready to order?</h3>
                                <p className="text-sm opacity-90 mt-1 max-w-lg">
                                    Select product variants above and click Order. We deliver high-quality certified Porotherm bricks for modern construction.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

                                <Link to="/contact">
                                    <button className="bg-white hover:cursor-pointer text-emerald-600 px-5 py-3 rounded-full font-semibold shadow w-full sm:w-auto">
                                        Contact Sales
                                    </button>
                                </Link>

                                <a
                                    href={`https://wa.me/919847603333?text=${encodeURIComponent(
                                        "Hi, I would like to know more about your product: "
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="bg-emerald-800/90 hover:cursor-pointer px-5 py-3 rounded-full font-semibold shadow w-full sm:w-auto">
                                        Get Best Price
                                    </button>
                                </a>

                            </div>
                        </section>
                    </motion.div>
                </main>
            </section>
        </div >
    );
}
