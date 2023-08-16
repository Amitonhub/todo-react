import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import todo from "../assets/todo.png";
import { Navbar } from "./Navbar";

type User = {
  username: string;
  password: string;
};
export default function LandinPage() {
  const [user, setUser] = useState<User | null>(null);
  const [signedIn, setSignedIn] = useState<boolean>(false);

  useEffect(() => {
    const signedIn = localStorage.getItem("signedIn") === "true";
    if (signedIn) {
      const userJson = localStorage.getItem("user");
      if (userJson) {
        setUser(JSON.parse(userJson));
      }
    }
    setSignedIn(signedIn);
  }, []);

  return (
    <>
      <div className="landing-body">
        <section className="masthead overlay">
          <Navbar />
          <div className="content">
            <div className="container flex content-container body-container">
              <div className="left-column">
                <div className="hero-img">
                  <img
                    className="img-fluid img-device"
                    src={todo}
                    alt="device-images"
                  />
                </div>
              </div>
              <div className="right-column">
                <div className="hero-content">
                  <h1 id="title">
                    “We need to do a better job of putting ourselves higher on
                    our own ‘to do’ list.”
                  </h1>
                  <br />
                  <div className="sign-in-btn">
                    <Link className="app-btn" to="/login">
                      <i className="fa-solid fa-user"></i>
                      <p>
                        Already a user? <br />{" "}
                        <span className="big-txt">Log In</span>
                      </p>
                    </Link>
                    <Link className="app-btn" to="/signup">
                      <i className="fa-sharp fa-solid fa-user-secret"></i>
                      <p>
                        New User? <br />{" "}
                        <span className="big-txt">Sign Up</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="text-center description">
              <h2 id="subtitle">About The App</h2>
              <p>
                Writers and stars of Veep have responded incredulously to the
                news an Australian politician required preinstalled stitches way
                email client, calendar, mapping program.
              </p>
            </div>
            <div className="about-list">
              <div className="about-card">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="94.853"
                    height="94.853"
                    viewBox="0 0 94.853 94.853"
                  >
                    <g transform="translate(-508.496 -1417.999)">
                      <path
                        d="M509.96,1461.89l42.426-42.427a5,5,0,0,1,7.071,0l42.426,42.427a5,5,0,0,1,0,7.071l-42.426,42.427a5,5,0,0,1-7.071,0L509.96,1468.96A5,5,0,0,1,509.96,1461.89Z"
                        fill="#f3f5f8"
                      />
                      <image
                        width="32"
                        height="38"
                        transform="translate(540 1446)"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAmCAYAAAClI5npAAAABHNCSVQICAgIfAhkiAAAA6hJREFUWIWt2FuoVFUcx/HPOV5ip0YEQpBa4EOQ9iBmFla6KYmMoItQHK3IMkh6i4z2S0G5iyx6ipResoIisYtBWFL75UiKSGkJdsHkQJFZJ/LSTj02Paw1znicc+b6g2HPrL3W+n/X9f//T1+lUtGO0rycijm4Agn6UOIQ9hdZcqyd/vpaAUjzciYewJ2YH402UgXf4GNsKrLkUFcAaV5Ox/N4CJMaVDkSn9MbvDuDt5AVWfJb2wBpXi7Bu7g0Fh3HB/gCOzBUZMnpWHcSLsMNuBn3YFps9ycGiiz5vGWANC9vx4fCqE/i5fjpxy2YF0d9SWzyF37HPmzHv3gCT+MCjOC+Iku2NAVI8/Iq7MaF+AV3xFGsw70aL0W9RrAZWZyFTzEjDuT6Iku+HhMgzct+7MQCDOM6zMQWXNzE8Ggdw3L8iF3CjH2HeUWWjFQr9Y9qtDwah0cxAVs7ME4Y/UeYiodj2VysqK80GuCx+NwR1+t1TOnAeFUJNhZZ8gmKWPZ4fYWzSxCP3GHhjA9gP/Z2YbxeCzFL2BtweZElQ5w7A9eoXTCf4dYeGYel2CZcVNSW+RyAufH5c5Elw7i2hwALiiw5jh/i76urL/oqlYo0L5fifWGzncBdeAaLegSwB08KV/Q04YSsLLJka3UGBtR2+hSsxkU9Mi4aXal2O07Dg9SWYLRzmay2Xr1Qv3Ck6zWhHqCRTvYQYEwXPR7Arz0EONwJQFNf3oYOtgtwWggseqVvhfigXv/VA2zG0fj9KN7EYA8BBoVjXrVxAu/RPCI6gCu7NH6wyJLZY70cbw/Api6Nw9vjvWwG8IbatHWiE4JH7QygyJI/8FwXAC8UWTLmEWwKEPWqmi9vR4N4qVmlpgBFlpwRnNOuNozvxd3VqLkrgAjxN1K8ZnwfUcFGLCqy5Mg49c6qpcyoqjQvl+EnwZPdKEQ5MCRM+SbMKrJke6t9tpqaTRZG/wg2YE2RJec1TPPyRTwlZESriyw51TVAmpcz8A4W1xWfB1FnvKpBrKjGfm0DpHk5R4hiBjRORjZgTfy+XsiERmtEuHLXF1myryWANC9vEkaybDzyqFcEJ7O2hbrbIsiXDQHSvFwUO1zYQmdVbcUpIaFpVXuwtgrSH40vFi6bdowTotwDbbaZj+1pXt52FkCIgJslnY10QMj92lU/noW+Jev+mS2c7U60WIgdd3bYfu5ErOqwMXwv7IFOtWoivhL+gmlXlaqnS/PyfkzsoI/h/wFThCl2foVjgAAAAABJRU5ErkJggg=="
                      />
                    </g>
                  </svg>
                </div>
                <h3>24/7 Support</h3>
                <p>
                  Apps that are not preinstalled are usually available through
                  distribution platforms called app stores.
                </p>
              </div>
              <div className="about-card">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="94.853"
                    height="94.853"
                    viewBox="0 0 94.853 94.853"
                  >
                    <g transform="translate(-914.496 -1417.999)">
                      <path
                        d="M915.96,1461.89l42.426-42.427a5,5,0,0,1,7.071,0l42.426,42.427a5,5,0,0,1,0,7.071l-42.426,42.427a5,5,0,0,1-7.071,0L915.96,1468.96A5,5,0,0,1,915.96,1461.89Z"
                        fill="#4085f6"
                      />
                      <image
                        width="30"
                        height="34"
                        transform="translate(947 1449)"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAiCAYAAABIiGl0AAAABHNCSVQICAgIfAhkiAAAAjVJREFUWIW9l81LVUEYxn/3Imn2YYswsmUgUUSLggo0IQtcF9Wi1km0M+yPqGUURQX9ARnUMqhok0QthOiDFu5yZViCgon+Wtxz6ng853RmNB8Y7ny8z/PMnRnemYNKQDmk3lMn/YtJ9a56MESrbmCHeltdthzL6i21fb2MO9XXFYZ5vEo4azJuqM8CTFM8Tbil2g2VClwB7hT0vwFeAA1gEDhewr1bqlwxqx3qTO6fzKtnCmLPJmNZTKtdMUs9WrCEQxXxQwXxIzHGEzmRBxWxaXmY40yEGvcUzL63hvG+Al5PUWyzZOtP5NofgK9VpzDBF+Bjrq+vKLDMeG+u/b6GaYp3/9ACoK2gbyerZ3kEeFTT+HCu3Q/cB6ZX9GbWvUO9qf4q2Ke1YkG9YSadpqbb1fH/YJjHuLota/xkA0xTjJmkzNPA85r7t1441QZcDiTN08rBL5P2IDAMdAZoDKNOBSzTtLrf1QnhgPo9QOcb6lIA4WKBaVouBegsNbT6XsxgAehKfovQDswCm+qIlWWuIvyoME0nNltXLMR4F9BdMd5NK+utuzHASMXYtSClgAOhrYN41ZXvqUbSF3JIDTVOMZAxHogRCF3qFI2Sem3EGndk6ptjjX9G8HZn6nsi+DNN4FME8WSmPhDB/9wEHkcQzwFHgWPA+Qj+WEPdQush1xMhEIMpoLcJzAEXgMUNMF1MvOayt0u/YVdkKKbUPnNvrrRsVa+rb139LRSD+URrNNH+4/UbT0FPgUhAn+MAAAAASUVORK5CYII="
                      />
                    </g>
                  </svg>
                </div>
                <h3>Data Privacy</h3>
                <p>
                  Apps that are not preinstalled are usually available through
                  distribution platforms called app stores.
                </p>
              </div>
              <div className="about-card">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="94.853"
                    height="94.853"
                    viewBox="0 0 94.853 94.853"
                  >
                    <g transform="translate(-1320.496 -1417.999)">
                      <path
                        d="M1321.96,1461.89l42.427-42.427a5,5,0,0,1,7.071,0l42.427,42.427a5,5,0,0,1,0,7.071l-42.427,42.427a5,5,0,0,1-7.071,0l-42.427-42.427A5,5,0,0,1,1321.96,1461.89Z"
                        fill="#f3f5f8"
                      />
                      <image
                        width="30"
                        height="28"
                        transform="translate(1353 1452)"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAABHNCSVQICAgIfAhkiAAAAbRJREFUSIntlr1Lw0AYh5+UDsbFxf9A3FwVvwZPiii4iMWxSzcpioMUUnCpPVwEF52KY+neQdAho+DSxU2cXB106YmidegVrvVqcvFr8QcZ8t69z5NkeC9eu93GJUKqOeAC8HWpDRyGgb/rwkk5WTsZN6QAHjDpCkki/pb8i//Fvy8WUm0KqfJJwUKqvJBq00kspDoAjoGqkGo/gXQfqALHmhUtFlJVgKJRKg1qHiA9AEpGqaiZPUlbemcttaKQagjY+UToAUfAVhym7VNvAE1LfRs4oTMi++PpNZu0qZm9DbZDQkg1ApwDUxbQLTDWV3vD/hJXwFIY+I+xxIb8DJixbojOJbBikzLgKQHQDRkgTCANgcwgKYC3UGlNA0NG7ToM/PvujZBqGGgAiw7S1TDwWwZjFJgw9jylgLre3L3meygdwIqWR6UBLJtSnfk+Rz3WyAwD/xnIRsgbQFbvjUzsWa2Ba0DNslwD1uNKncRa/grk+uQ1IBcG/osLy/l0MuRlQGrpqyvHNjLjyveS9H4mnhBSPXwFamPGEZe/WWrNn/6B3P2B9y4NFIBTPp44P5UboPAO1yaMBR9/4IEAAAAASUVORK5CYII="
                      />
                    </g>
                  </svg>
                </div>
                <h3>Easy Download</h3>
                <p>
                  Apps that are not preinstalled are usually available through
                  distribution platforms called app stores.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="text-center description">
              <h2 id="subtitle">Let's catch up</h2>
              <p>Fill your email to receive more information</p>
            </div>
            <form id="form" className="form text-center">
              <div className="input-group">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
                <button type="submit" id="submit" className="submit-button">
                  Get Started
                </button>
              </div>
            </form>
          </div>
          <br />
        </section>
      </div>
    </>
  );
}
