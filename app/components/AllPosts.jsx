import Tab from "./Tab";
import { BiSolidDownArrow } from "react-icons/bi";
import { PiUsersFill } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidPencil } from "react-icons/bi";

const AllPosts = () => {
  return (
    <section className="container  ">
      {/* HEADER PART */}
      <div className="row  my-5 py-5">
        <div className="col-md-8 ">
          <Tab />
        </div>
        <div className="col-md-4 ">
          {/* BUTTONS */}
          <div className="d-flex gap-2 border-bottom  pb-2">
            <div className="small ">
              <button className=" border-0 p-1 rounded">
                Write a Post{" "}
                <span className="px-2">
                  <BiSolidDownArrow />
                </span>
              </button>
            </div>
            <div className="small ">
              <button className="bg-primary text-white p-1 border-0 rounded">
                <span>
                  <PiUsersFill />
                </span>{" "}
                Join Group
              </button>
            </div>
          </div>

          {/* INPUT  */}
          <div className="position-relative my-4">
            <span className="position-absolute  top-0 start-0">
              <IoLocationOutline />
            </span>
            <input
              type="text"
              className="border-bottom border-0 "
              placeholder="Noida, India"
            />
            <span className="position-absolute  top-0 end-0">
              <BiSolidPencil />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPosts;
