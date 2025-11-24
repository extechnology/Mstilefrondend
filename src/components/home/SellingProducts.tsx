import { motion } from "framer-motion";




export default function SellingProducts() {



    const images = [
        "https://image.made-in-china.com/2f0j00RgleBnsqMicy/Import-60X60-Non-Slip-Tiles-Price-in-Philippines-From-China.webp",
        "https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/amj-2025-1744185110-pMHWe/dining-room-1744827105-ZkIP5/new-project-16-1746176324-b8JKP.jpg",
        "https://cdn.magicdecor.in/com/2024/08/27161123/Ancient-Mosaic-Ceramic-Tile-Pattern-Wallpaper-Mural-M-710x488.jpg",
        "https://server.orientbell.com/media/black-tiles.jpg",
        "https://www.hanseceramictile.com/Images/living-room-floor-tiles-banner-top.jpg",
    ];


    return (


        <section className="relative w-full bg-[#f7f2e9] pt-10 overflow-hidden">


            {/* TOP TEXT */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-center px-2 sm:px-6"
            >
                <p className="text-sm font-semibold mb-3 tracking-wide">Destinations</p>

                <h2 className="text-3xl md:text-5xl font-bold leading-snug w-full sm:max-w-4xl mx-auto font-serif">
                    Discover <span className="inline-block">
                        <motion.img
                            src="https://www.asenseinterior.com/assets/mediafile/pflo_gal__DSC00488-HDR_(1)2.webp"
                            className="inline-block w-28 h-10 rounded-full object-cover mx-2"
                            initial={{ scale: 0.6, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8 }}
                        />
                    </span>{" "}
                    Breathtaking Destinations Handpicked Daily.
                </h2>

            </motion.div>


            {/* IMAGE CARDS */}
            <div className="relative mt-5 sm:mt-16 flex items-center justify-center gap-6 px-6 flex-wrap md:flex-nowrap">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50, rotate: 0 }}
                        whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -6 : 6 }}
                        transition={{ duration: 0.8, delay: index * 0.4 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="w-72 md:w-56 h-60 rounded-3xl overflow-hidden shadow-xl"
                    >
                        <img src={img} className="w-full h-full object-cover" />
                    </motion.div>
                ))}
            </div>


            {/* CURVED BOTTOM CARD */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true, amount: 0.2 }}
                className="mt-10 sm:mt-16 bg-white w-full py-8 sm:py-16 text-center rounded-t-4xl sm:rounded-t-[100px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]"
            >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-serif">
                    Find Our Most Selling Products
                </h3>

                <p className="text-gray-600 max-w-xl mx-auto font-serif">
                    Discover Our Most Popular Walling Solutions, Including The Thermal-Efficient Porotherm Briks, Which Stand For Enhancing Construction Speed, Water Conservation, &  Zero Waste Of Valuable Materials And Goods
                </p>

                <button className="mt-6 font-serif px-8 py-3 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition hover:scale-105 hover:cursor-pointer">
                    More Details →
                </button>

            </motion.div>

        </section>


    )


}
