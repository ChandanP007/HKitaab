import React, { Suspense } from "react";

// Use lazy loading only for components that are not critical for the initial render
const Branding = React.lazy(() => import("../../components/Landing/Branding"));

// Import critical components directly to avoid unnecessary delays in rendering
import Hero from "../../components/Landing/Hero";
import Footer from "../../components/Landing/Footer";

const Landing = () => {
  return (
    <main className="">
      <Hero />
      {/* Wrap lazy-loaded components in a Suspense boundary */}
      <Suspense fallback={<div>Loading ...</div>}>
        <Branding />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Landing;
