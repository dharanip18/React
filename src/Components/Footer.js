import { LOGO_IMG } from "../utils/constants";
const Footer = () => {
  return (
    <footer className="footer py-10 bg-black">
      <div className="container max-w-7xl mx-auto">
        <img className="logo w-56" src={LOGO_IMG} />
        <p className="text-white mt-8">© 2023 Food for Hunger</p>
      </div>
    </footer>
  );
};

export default Footer;
