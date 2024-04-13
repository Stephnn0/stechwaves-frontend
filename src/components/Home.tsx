import BannerMessage from "./BannerMessage";

import { Footer } from "./Footer";
import Grid from "./Grid";
import ImageContentComponent from "./ImageContentComponent";
import TextMessage from "./TextMessage";

const HomePage = () => {
  const products = [
    {
      id: 1,
      imageSrc: "/img/marketing.png",
      title:
        "Reach your target audience effectively and drive sales with our suite of marketing apps for Shopify. From email campaigns to social media integration, our tools empower you to engage customers and boost your online presence effortlessly.",
      buttonText: "Learn More",
    },
    {
      id: 2,
      imageSrc: "/img/order.jpeg",
      title:
        "Streamline your order processing and enhance efficiency with our order management apps for Shopify. From tracking shipments to managing inventory, our solutions ensure smooth operations, allowing you to focus on growing your business.",
      buttonText: "Learn More",
    },
    {
      id: 3,
      imageSrc: "/img/discounts.png",
      title:
        "Attract customers and increase conversions with our discount apps for Shopify. Create compelling offers, implement dynamic pricing strategies, and boost customer loyalty effortlessly. Maximize your sales potential with our tailored discount solutions.",
      buttonText: "Learn More",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
      {/* Sections */}
      <BannerMessage
        message={"Schedule Your FREE Shopify App Consultation Today!"}
      />
      <section id="section1" className=" ">
        <ImageContentComponent
          imageUrl={"/img/one.png"}
          title={"Empower Your E-Commerce with Tailored Shopify Solutions!"}
          description={
            "Maximize efficiency, enhance user experience, and stay ahead of the competition with our innovative Shopify apps. Let's transform your e-commerce vision into reality today!"
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

      <TextMessage description={"Custom Shopify Apps for Every Business"} />
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
