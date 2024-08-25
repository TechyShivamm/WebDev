import { Link } from "react-router-dom";
const Tittle = () => {
  return (
    <div className=" w-24 m-2 p-2">
      <Link href="/">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <div className=" flex justify-between items-center text-center m-2">
      <Tittle />
      <ul className=" flex gap-2 text-2xl p-2 m-2  ">
        <li className=" hover:bg-gray-200 rounded-md m-2 p-2 font-bold ">
        <Link to="/">Home</Link>
        </li>
        <li className=" hover:bg-gray-200 rounded-md m-2 p-2 font-bold">
          <Link to="/about">About</Link>
        </li>
        <li className=" hover:bg-gray-200 rounded-md m-2 p-2 font-bold">
          <Link to="/login">login</Link>
        </li>
        <li className=" hover:bg-gray-200 rounded-md m-2 p-2 font-bold">
        <svg className=" fill-black size-8"xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>
        </li>
        <li className=" hover:bg-gray-200 rounded-md m-2 p-2 font-bold">
          <Link to="/contactus">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
