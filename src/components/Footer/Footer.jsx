import logo from "../../../public/Resources/logo.png";

const Footer = () => {
  return (
    <div className="bg-red-950  text-white text-center py-20">
      <img className="mx-auto w-14" src={logo} alt="" />
      <h3 className="font-black text-green-400 text-xl">
        roadstar car dealer company
      </h3>
      <small>Gulshan-2, Dhaka, Bangladesh</small>
      <p className="pt-20 text-xs italic">
        <small>All rights preserved by FatihaSabbirFriendshipGroup@2023</small>
      </p>
    </div>
  );
};

export default Footer;
