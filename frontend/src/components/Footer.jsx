const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <h1 className="text-3xl text-gray-700 cursor-pointer">
            Faizan Fabrics
          </h1>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            odio id, earum nemo aperiam optio rerum dicta laudantium hic, vel
            facilis sed?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li>+923123456789</li>
            <li>khanjee@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="text-gray-500" />
        <p className="py-5 text-sm text-center text-gray-500">
          Copyright {new Date().getFullYear()} @ Faizan Fabrics - All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
