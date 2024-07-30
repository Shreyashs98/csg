/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import BasicExample from "../Dropdowns/EbookLang";
import Example from "../Modal/EbookLang";
// import IndexDropdown from "../Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-4 py-4 navbar-expand-lg bg-white shadow-lg">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              href="https://cybersafegirl.vercel.app"
              className="text-blueGray-800 text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              CYBER SAFE GIRL
            </a>
            <button
              className="cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              {/* <li className="flex items-center">
                <a
                  className="hover:text-blueGray-600 text-blueGray-800 px-4 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="https://www.cybersafegirl.com/learning-lab/tailwind/react/overview/notus?ref=nr-index-navbar"
                >
                  <i className="text-blueGray-500 far fa-file-alt text-xl leading-lg mr-2" />
                  Docs
                </a>
              </li> */}
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                {/* <IndexDropdown /> */}
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-600 text-blueGray-800 px-4 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="https://www.facebook.com/educatorananth/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-blueGray-500 fab fa-facebook text-xl leading-lg" />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-600 text-blueGray-800 px-4 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="https://x.com/EducatorAnanth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-blueGray-500 fab fa-twitter text-xl leading-lg" />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-600 text-blueGray-800 px-4 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="https://github.com/ashwinbekal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-blueGray-500 fab fa-github text-xl leading-lg" />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              <li className="flex items-center">
                {/* <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download E-Book
                </button> */}
                <Example/>
                <Link
        to="/auth/login"
        className="bg-blueGray-700 text-white active:bg-blueGray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
        >
        Get Certification
      </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
