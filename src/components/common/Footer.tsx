import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";



export default function Footer() {


  return (

    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-white rounded-t-3xl px-6 sm:px-12 lg:px-20 pt-16 pb-5 font-serif"
    >


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


        {/* Left Section */}
        <div className="space-y-6">

          <div className="flex items-center gap-2">
            <img src="/MS-TILE-LOGO-WT-PNG.png" loading="lazy" className="w-48 h-16 object-contain" alt="foot-logo" />
          </div>


          <p className="text-gray-300 max-w-md text-sm leading-relaxed">
            MS Tile Agencies is a premier provider of high-quality tiles and flooring solutions. We are dedicated to offering an extensive range of stylish and durable products that cater to diverse tastes and preferences.
          </p>


          {/* Social Icons */}
          <div className="flex">

            <a
              href="https://www.facebook.com/mstiles.in"
              target="_blank"
              className="text-gray-300 hover:text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-facebook fa-xl"></i>
            </a>

            <a
              href="https://www.instagram.com/mstiles.agencies/"
              target="_blank"
              className="text-gray-300 hover:text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>


            <a
              href="https://www.linkedin.com/company/mstiles-agencies"
              target="_blank"
              className="text-gray-300 hover:text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>


            <a
              href="https://x.com/ms_tile"
              target="_blank"
              className="text-gray-300 hover:text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-x-twitter fa-xl"></i>
            </a>

            <a
              href="https://in.pinterest.com/infomstiles/"
              target="_blank"
              className="text-gray-300 hover:text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-pinterest fa-xl"></i>
            </a>

            <a
              href="https://www.youtube.com/@Mstileagencies"
              target="_blank"
              className="text-gray-300 hover:text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-youtube fa-xl"></i>
            </a>

          </div>

        </div>



        {/* Right Section */}
        <div className="space-y-8">

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">

            <div>
              <h5 className="font-medium mb-3">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-gray-200"><Link to={'/'}>Home</Link></li>
                <li className="hover:text-gray-200"><Link to={'/about-us'}>About Us</Link></li>
                <li className="hover:text-gray-200"><Link to={'/locator'}>Locator</Link></li>
                <li className="hover:text-gray-200"><Link to={'/products'}>Products</Link></li>
                <li className="hover:text-gray-200"><Link to={'/contact'}>Contact</Link></li>
              </ul>
            </div>


            <div>
              <h5 className="font-medium mb-3">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center hover:text-gray-200 transition-colors">
                  <Phone size={16} className="mr-2 text-gray-400" />
                  <a href="tel:+919847603333" target="_blank" className="hover:text-gray-200">
                    +91 9847603333
                  </a>
                </li>
                <li className="flex items-center hover:text-gray-200 transition-colors">
                  <Mail size={16} className="mr-2 text-gray-400" />
                  <a href="mailto:infomstiles@gmail.com" target="_blank" className="hover:text-gray-200">
                    infomstiles@gmail.com
                  </a>
                </li>
              </ul>
            </div>



            <div>
              <h5 className="font-medium mb-3">Address</h5>
              <a
                href="https://www.google.com/maps?q=Kottumuchi,Kodakkad,Malappuram,Kerala,673635"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-gray-200 transition-colors"
              >
                MS Tile Agencies <br />
                Ramanattukara, near Chemillil <br /> Masjid, Kozhikode, Kerala, 673633

              </a>
            </div>



          </div>


        </div>


      </div>


      <div className="flex text-gray-400 items-center justify-between mt-5 sm:mt-10 border-t border-gray-600 pt-4 flex-col sm:flex-row gap-3">

        <div className="flex gap-5 text-sm text-gray-400">
          <Link to={'/terms-and-conditions'} className="hover:text-gray-300 hover-cursor-pointer">Terms & Conditions</Link>
          <Link to={'/privacy-policy'} className="hover:text-gray-300 hover-cursor-pointer">Privacy Policy</Link>
        </div>

        <a href="#" className="hover-cursor-pointer text-xs">©{new Date().getFullYear()} MS Tiles Agencies All rights reserved</a>

        <a href="https://extechnology.in" target="_blank" className="hover-cursor-pointer text-sm">Developed by <span className="text-white">ex-technology</span></a>

      </div>

    </motion.footer>

  )

}

