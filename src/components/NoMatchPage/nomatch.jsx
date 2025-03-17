import "./nomatch.css";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="noPage h-screen overflow-hidden">
      <a href="#" target="_blank">
        {/* <header className="top-header"></header> */}

        <div>
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
        </div>

        <div className="lamp__wrap">
          <div className="lamp">
            <div className="cable"></div>
            <div className="cover"></div>
            <div className="in-cover">
              <div className="bulb"></div>
            </div>
            <div className="light"></div>
          </div>
        </div>

        <section className="error">
          <div className="error__content">
            <div className="error__message message">
              <h1 className="message__title text-white">404 Page Not Found</h1>
              <p className="message__text text-white">
                We&apos;re sorry, the page you were looking for isn&apos;t found
                here. The link you followed may either be broken or no longer
                exists. Please try again, or take a look at our.
              </p>
            </div>
            <div className="error__nav e-nav">
              <Link to="/">
                <a
                  href="#"
                  target="_blanck"
                  className="e-nav__link text-white"
                ></a>
              </Link>
            </div>
          </div>
        </section>
      </a>
    </div>

    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    //   <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
    //   <p className="text-lg text-gray-600 mb-6">
    //     Oops! The page you are looking for doesn&apos;t exist.
    //   </p>
    //   <Link
    //     to="/"
    //     className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition duration-300"
    //   >
    //     Go Back Home
    //   </Link>
    // </div>
  );
};

export default NoMatch;
