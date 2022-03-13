import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Leadership from "../components/Leadership";
import Services from "../components/Services";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Tabitha Alms Organisation</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&family=Rozha+One&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="//db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=Saol+Display+Regular"
          rel="stylesheet"
          type="text/css"
        />
        <meta
          name="description"
          content="This is a donating organisation in Kenya made to help the needy "
        />
        <meta
          name="author"
          content="Brian Lusigi - 0796661363 - developerisadia@gmail.com"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* body starts here */}
      <main>
        {/* header section for navigation */}

        {/* carousel with content to take 100vh and 100vw */}
        <Hero />
      </main>
      <section className="relative">
        <About />
        <Services/>
  
        <Leadership />
      </section>

      {/* footer */}

      <Footer />
    </div>
  );
}
