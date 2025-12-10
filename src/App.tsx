import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import ScrollToTop from "./components/common/ScrollToTop"
import SuspenseLoader from "./components/loader/SuspenseLoader"
import { ReactLenis } from "lenis/react";
import { useLenis } from "./hooks/useLenis";



// Lazy load pages
const Index = lazy(() => import("./pages/Index"))
const AboutUs = lazy(() => import("./pages/AboutUs"))
const Products = lazy(() => import("./pages/Product"))
const Contact = lazy(() => import("./pages/Contact"))
const Terms = lazy(() => import("./pages/Terms"))
const Privacy = lazy(() => import("./pages/Privacy"))
const NotFound = lazy(() => import("./components/common/NotFound"))



// Layouts
const MainLayout = lazy(() => import("./components/layout/MainLayout"))





function App() {


  const lenis = useLenis();


  return (


    <ReactLenis root ref={lenis} autoRaf={false}>

      <Suspense fallback={<SuspenseLoader />} >

        <ScrollToTop />

        <Routes>


          {/* Main Layout */}
          <Route element={<MainLayout />} >

            <Route index element={<Index />} />

            <Route path="about-us" element={<AboutUs />} />

            <Route path="products" element={<Products />} />

            <Route path="contact" element={<Contact />} />

            <Route path="terms-and-conditions" element={<Terms />} />

            <Route path="privacy-policy" element={<Privacy />} />

          </Route>


          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />


        </Routes>


      </Suspense>

    </ReactLenis> 

  )


}



export default App
