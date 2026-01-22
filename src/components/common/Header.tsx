import { useState, useEffect } from "react";
import { AlignLeft, MoveUpRight, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";




const Navbar = () => {


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();



    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };



    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        if (location.pathname === "/" || location.pathname === "/about-us" || location.pathname === "/contact" || location.pathname === "/products" || location.pathname === "/locator") {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [location.pathname]);



    // Navigation items
    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about-us" },
        { name: "Products", href: "/products" },
    ];



    // Wave animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // wave effect
            },
        },
    };



    const item = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };



    // Navbar style logic
    const isHome = location.pathname === "/" || location.pathname === "/about-us" || location.pathname === "/contact" || location.pathname === "/products" || location.pathname === "/locator";
    const isTransparent = isHome && !scrolled;


    
    return (


        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-serif",
                isTransparent
                    ? "bg-transparent text-white"
                    : "bg-white text-black"
            )}
        >


            <div className="w-full mx-auto px-4 sm:px-6 lg:px-14">


                <div className="flex items-center justify-between h-16">


                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">

                        {isTransparent ? (

                            <img src="/MS-TILE-LOGO-WT-PNG.png" loading="lazy" className="object-contain h-96 w-48" alt="nav-logo" />

                        ) : (

                            <img src="/MS-TILE-LOGO-BL-AND-W-PNG.png" loading="lazy" className="object-contain h-96 w-48" alt="nav-logo" />
                        )}

                    </Link>


                    {/* Desktop Navigation */}
                    <motion.ul
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="hidden md:flex items-center gap-2"
                    >

                        {navItems.map((itemObj) => (

                            <motion.li key={itemObj.name} variants={item}>
                                <Link
                                    to={itemObj.href}
                                    className={cn(
                                        "px-4 py-2 rounded-md text-sm font-medium transition-all",
                                        location.pathname === itemObj.href
                                            ? isTransparent
                                                ? "bg-white/20 text-white rounded-2xl"
                                                : "bg-white border border-gray-400 text-black rounded-2xl"
                                            : isTransparent
                                                ? "text-white/90 hover:text-white hover:bg-white/10"
                                                : "text-gray-600 hover:text-black hover:bg-gray-100"
                                    )}
                                >
                                    {itemObj.name}
                                </Link>
                            </motion.li>

                        ))}

                    </motion.ul>



                    {/* Contact Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="hidden md:block"
                    >
                        <Link
                            to="/contact"
                            className={cn(
                                "group relative flex items-center gap-3 pl-3 pr-1 py-1 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105",
                                isTransparent
                                    ? "bg-transparent border border-white/30 text-white"
                                    : "bg-black text-white"
                            )}
                        >
                            {/* Text */}
                            <span>Contact Us</span>

                            {/* Circle with icon */}
                            <span
                                className={cn(
                                    "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
                                    isTransparent
                                        ? "bg-white text-black group-hover:scale-110"
                                        : "bg-white text-black group-hover:scale-110"
                                )}
                            >
                                <MoveUpRight className="h-4 w-4" />
                            </span>
                        </Link>
                    </motion.div>




                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className={cn(
                                "p-2 rounded-md transition-colors",
                                isTransparent
                                    ? "text-white hover:bg-white/10"
                                    : "text-gray-700 hover:bg-gray-100"
                            )}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <AlignLeft className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                </div>

            </div>


            {/* Mobile Menu */}
            {isMobileMenuOpen && (

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={cn(
                        "md:hidden transition-all duration-500",
                        isTransparent
                            ? "bg-transparent text-white"
                            : "bg-white text-black shadow-md"
                    )}
                >

                    <ul className="flex flex-col gap-2 px-6 py-4">

                        {navItems.map((itemObj) => (

                            <li key={itemObj.name}>

                                <Link
                                    to={itemObj.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "block px-4 py-2 rounded-md text-sm font-medium transition-all",
                                        location.pathname === itemObj.href
                                            ? isTransparent
                                                ? "bg-white/20 text-white rounded-2xl"
                                                : "bg-gray-200 text-black"
                                            : isTransparent
                                                ? "text-white/90 hover:text-white hover:bg-white/10"
                                                : "text-gray-600 hover:text-black hover:bg-gray-100"
                                    )}
                                >
                                    {itemObj.name}

                                </Link>

                            </li>

                        ))}


                        <li>
                            <Link
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "block text-center px-4 py-2 mt-2 rounded-full font-medium text-sm transition-all duration-300",
                                    isTransparent
                                        ? "bg-white text-black hover:shadow-lg hover:scale-[1.02]"
                                        : "bg-black text-white hover:shadow-lg hover:scale-[1.02]"
                                )}
                            >
                                Contact us
                            </Link>
                        </li>

                    </ul>

                </motion.div>

            )}

        </nav>

    );

};

export default Navbar;
