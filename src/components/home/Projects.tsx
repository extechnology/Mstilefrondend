import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ImgZoom from "../common/ImgZoom";




// PROJECT DATA
const projects: { id: number; title: string; sub: string; image: string; bg: string; text: string; }[] = [
    {
        id: 1,
        title: "Oakwood Residence",
        sub: "Urban Home | 2025",
        image: "https://www.simpolo.com/_next/image?url=https%3A%2F%2Fsimpolo-web.s3.ap-south-1.amazonaws.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FALCHIMIA%2FALCHIMIA%2520GRAPHITE_preview.jpg&w=3840&q=75&dpl=dpl_BZ3oD2BRhCCBJVDshG3ryaEa4yYP",
        bg: "#F6FFFB",
        text: "text-black",
    },
    {
        id: 2,
        title: "The Horizon Villa",
        sub: "Minimalist Living | 2025",
        image: "https://i.ytimg.com/vi/B2z2R4isksI/maxresdefault.jpg",
        bg: "#053C35",
        text: "text-white",
    },
    {
        id: 3,
        title: "Slate Office",
        sub: "Urban Home | 2024",
        image: "https://img.freepik.com/premium-photo/modern-grey-tiles-interior_1375194-34984.jpg?semt=ais_hybrid&w=740&q=80",
        bg: "#5A2D1E",
        text: "text-white",
    },
    {
        id: 4,
        title: "Modern Courtyard",
        sub: "Luxury Retreat | 2024",
        image: "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/1real-homes-in-1669021353-jiSjM/ond-2022-1669032781-pWI47/tile-design-1669032791-8peJg/d-intd-ond2022-0152-1669972250-YbUaD/b-1669972261-ltZX0.jpg",
        bg: "#F3F4F6",
        text: "text-black",
    },
];





const ProjectsSection = () => {


    return (


        <section className="w-full py-5 sm:py-10 px-2 md:px-10 lg:px-20 border-t-2 border-dashed border-gray-200">


            {/* HEADER TEXT */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-7xl sm:max-w-3xl mb-8 text-center mx-auto"
            >
                <h2 className="text-3xl font-serif md:text-5xl font-bold leading-tight">
                    Integrate Innovation & Change your Construction
                </h2>

                <p className="text-gray-600 mt-4 text-lg leading-relaxed font-serif">
                    Adopt technology and Porotherm Smart Bricks for construction innovation.
                    This revolutionary system eliminates wet mortar, ensuring rapid wall
                    erection and faster project completion.
                </p>
            </motion.div>



            {/* PROJECT GRID — MATCHING THE PROVIDED DESIGN */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                {projects.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        style={{ backgroundColor: item.bg }}
                        className={`rounded-3xl p-4 sm:p-6 flex flex-col gap-4 shadow-sm ${item.text}`}
                    >

                        {/* TEXT */}
                        <div>
                            <h3 className="text-xl font-semibold font-serif">{item.title}</h3>
                            <p className="text-sm opacity-80 mt-1 font-serif">{item.sub}</p>
                        </div>

                        {/* IMAGE */}
                        <div className="overflow-hidden rounded-2xl">
                            <ImgZoom
                                src={item.image}
                                alt={item.title}
                                className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        {/* ICON BUTTON */}
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer">
                                <ArrowUpRight size={22} className="text-black" />
                            </div>
                        </motion.div>

                    </motion.div>
                ))}

            </div>



        </section>
    );
};

export default ProjectsSection;
