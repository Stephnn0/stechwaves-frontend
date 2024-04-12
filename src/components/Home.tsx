import BannerMessage from "./BannerMessage";

import { Footer } from "./Footer";
import Grid from "./Grid";
import ImageContentComponent from "./ImageContentComponent";
import Navbar from "./Navbar";
import TextMessage from "./TextMessage";

const HomePage = () => {
  const products = [
    {
      id: 1,
      imageSrc: "/img/cubes.jpeg",
      title:
        "Unite marketing, sales, and service in a single app. Try Salesforce Starter Suite today. There's nothing to install. No credit card required.",
      buttonText: "Add to Cart",
    },
    {
      id: 2,
      imageSrc: "/img/cubes.jpeg",
      title: "Try Salesforce Starter Suite for free.",
      buttonText: "Add to Cart",
    },
    {
      id: 3,
      imageSrc: "/img/cubes.jpeg",
      title: "Try Salesforce Starter Suite for free.",
      buttonText: "Add to Cart",
    },
    {
      id: 4,
      imageSrc: "/img/cubes.jpeg",
      title: "Try Salesforce Starter Suite for free.",
      buttonText: "Add to Cart",
    },
    // Add more product objects as needed
    {
      id: 1,
      imageSrc: "/img/cubes.jpeg",
      title:
        "Unite marketing, sales, and service in a single app. Try Salesforce Starter Suite today. There's nothing to install. No credit card required.",
      buttonText: "Add to Cart",
    },
    {
      id: 2,
      imageSrc: "/img/cubes.jpeg",
      title: "Try Salesforce Starter Suite for free.",
      buttonText: "Add to Cart",
    },
  ];

  return (
    <>
      <Navbar />
      {/* Sections */}
      <BannerMessage
        message={"Unite marketing, sales, and service in a single app"}
      />
      <section id="section1" className=" ">
        <ImageContentComponent
          imageUrl={"/img/one.png"}
          title={"Try Salesforce Starter Suite for free."}
          description={
            "Unite marketing, sales, and service in a single app. Try Salesforce Starter Suite today. There's nothing to install. No credit card required."
          }
          button1Text={"About Us"}
          button2Text={"Contact"}
          onButton1Click={function (): void {
            throw new Error("Function not implemented.");
          }}
          onButton2Click={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </section>

      <TextMessage description={"Get the latest from Salesforce"} />
      <section id="section2">
        <Grid products={products} />
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default HomePage;
