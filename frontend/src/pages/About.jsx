import { assets } from "../assets/assets.js";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <div>
          <img
            src={assets.about_img}
            className="w-full h-80 md:max-w-112.5"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Faizan Fabrics was born out of a passion for innovation and desire
            to revolutionize the way people shop online. Out journey began with
            a simple idea: to provide a platform where customers can easily
            discover, explore and purchase a wide range of products for the
            comfort of their homes
          </p>
          <p>
            We believe that the right fabric can transform an outfit and bring
            every style to life. That’s why we focus on offering quality
            materials, elegant designs, and a smooth shopping experience. From
            timeless classics to the latest trends, we are committed to bringing
            you fabrics that combine comfort, style, and lasting quality.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to make quality fabrics easy to discover and shop
            online while delivering an experience our customers can trust. We
            strive to offer stylish and reliable products, excellent customer
            service, and a seamless shopping journey that keeps our customers
            coming back.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
