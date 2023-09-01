"use client";

import { AiOutlineSearch } from "react-icons/ai";

import { BiSolidDownArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import Image from "next/image";
import logoImage from "public/whole.png";
import Form from "./PopupForm";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "scroll";
      };
    }
  }, [isModalOpen]);

  const handleSignIn = () => {
    setIsModalOpen(true);
    setIsOverlayOpen(true);
  };

  const handleOverlay = () => {
    setIsModalOpen(false);
    setIsOverlayOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Image
              src={logoImage}
              alt="navbar image"
              priority
              height={50}
              width={100}
              className="img-fluid w-auto"
            />
          </div>

          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <form className="d-flex" role="search">
              <input
                className="px-5 small nav-input rounded-5 position-relative border-0 light"
                type="search"
                placeholder="Search for your favorite groups in ATG"
                aria-label="Search"
              />
              <span className="position-absolute  ms-3 py-1">
                <AiOutlineSearch />
              </span>
            </form>
          </div>

          <div className="text-end">
            <div className="small ">
              <button className="bg-white border-0" onClick={handleSignIn}>
                Create account.<span className="text-primary">It’s free!</span>
              </button>
              <span className="px-2">
                <BiSolidDownArrow />
              </span>
            </div>
          </div>
        </div>
      </nav>
      {/* OVERLAY */}
      <div
        onClick={handleOverlay}
        className={`overlay ${isOverlayOpen ? "" : "d-none"}`}
      ></div>

      {/* modal */}
      <div className={`modal ${isModalOpen ? "" : "d-none"}`}>
        <Form />
      </div>
    </>
  );
}

export default Navbar;
