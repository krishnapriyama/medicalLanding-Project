import logo from "../assets/Logo.png";
const header = () => {
  return (
    <>
      <div className="w-full h-12 border-b flex items-center">
        <img src={logo} alt="logo" className="w-24 m-10" />
      </div>
    </>
  );
};

export default header;
