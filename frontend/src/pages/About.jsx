import { assets } from "../assets/asset";
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
            src={assets.hero_img2}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            tenetur, at voluptatem accusamus, libero dolore sed, asperiores
            reprehenderit minus id laudantium numquam sit explicabo recusandae!
            Est a nobis optio beatae.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            ducimus consectetur ab exercitationem iste asperiores explicabo.
            Eius corrupti debitis aspernatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
