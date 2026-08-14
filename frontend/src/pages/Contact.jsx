import { assets } from "../assets/asset";
import Title from "../components/Title";
import { Factory } from "lucide-react";
const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="flex flex-col my-10 justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-90" src={assets.w_jeans_2} alt="" />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">OUR STORE</p>
          <p className="text-gray-500">
            Mal Lara, Meena Bazaar <br /> Kernal Sher Kali
          </p>
          <p className="text-gray-500">
            Tel:+923001234567 <br /> Email: khanjee@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
