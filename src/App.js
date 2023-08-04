import "./App.css";
import logo from "./images/Logo.png";
// import p1 from "./images/Planet1.png";
// import p2 from "./images/Planet2.png";
// import p3 from "./images/Planet3.png";
import p4 from "./images/Planet4.png";
// import p5 from "./images/Planet5.png";
// import p6 from "./images/Planet6.png";
// import p7 from "./images/Planet7.png";
// import p8 from "./images/Planet8.png";
// import p9 from "./images/Planet9.png";
function App() {
  return (
    <div className="App">
      <div>
        <nav className="  p-5 m-5 shadow md:flex md:items-center md:justify-between font-[popins]">
          <div>
            <span className=" text-white text-3xl cursor-pointer">
              T E C H <span className="text-[#27A5EF]">N I C A</span>
            </span>
            <span></span>
          </div>
          <div className="flex items-center">
            <ul className="justify-between md:flex md:items-center   z-[-1] md:z-auto md:static absolute md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] trasition-all ease-in duration-500">
              <li className="mx-6 my-6 md:my-0">
                <a
                  href="#about"
                  className="text-2xl text-white hover:text-[#27A5EF]  duration-500 hover:text-3xl"
                >
                  About
                </a>
              </li>
              <li className="mx-6 my-6 md:my-0">
                <a
                  href="#tracks"
                  className="text-2xl text-white hover:text-[#27A5EF]  duration-500 hover:text-3xl"
                >
                  Tracks
                </a>
              </li>
              <li className="mx-6 my-6 md:my-0">
                <a
                  href="#Prizes"
                  className="text-2xl text-white hover:text-[#27A5EF] duration-500 hover:text-3xl"
                >
                  Prizes
                </a>
              </li>
              <li className="mx-6 my-6 md:my-0">
                <a
                  href="#contact"
                  className="text-2xl text-white hover:text-[#27A5EF] duration-500 hover:text-3xl"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className=" m-5 text-center ">
        <div className="items-center">
          <center>
            <img src={logo} className="h-72" alt="logo of website"></img>
          </center>
        </div>
        <h1 className="text-white text-6xl p-4">
          T E C H <span className="text-[#27A5EF]">N I C A</span>
        </h1>
        <div className="p-3">
          <h2 className="text-white text-3xl p-4">
            Initiate | <span className="text-[#27A5EF]">Innovate</span> |
            Inspire
          </h2>
        </div>
        <h3 className="text-white text-2xl">4th - 5th June 2023</h3>
        <div className="p-5 ">
          <button
            type="button"
            name="Register"
            className="bg-transparent hover:bg-[#27A5EF] text-white font-semibold hover:text-black py-2 px-4 border border-[#27A5EF] hover:border-transparent rounded"
          >
            REGISTER NOW
          </button>
        </div>
      </div>
      <div id="about" className="text-center ">
        <h1 className="text-white text-8xl p-4 mt-28 mb-20 font-[michroma] ">
          AB<span className="text-[#27A5EF]">OUT</span>
        </h1>
        <p className="text-white p-4 mx-28 mb-28  text-2xl font-[poppins]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
          vitae congue mauris rhoncus. Leo in vitae turpis massa sed. A diam
          sollicitudin tempor id. Faucibus scelerisque eleifend donec pretium
          vulputate sapien nec. Nulla pharetra diam sit amet nisl suscipit. Orci
          sagittis eu volutpat odio facilisis mauris. Vestibulum lorem sed risus
          ultricies. Orci eu lobortis elementum nibh. At risus viverra
          adipiscing at. Morbi blandit cursus risus at ultrices mi tempus
          imperdiet nulla. Enim blandit volutpat maecenas volutpat blandit
          aliquam etiam erat velit. Lectus nulla at volutpat diam ut venenatis
          tellus. Duis convallis convallis tellus id. Sed vulputate mi sit amet
          mauris commodo quis imperdiet massa. Justo nec ultrices dui sapien
          eget mi proin sed libero. Ac placerat vestibulum lectus mauris
          ultrices eros in cursus. Sit amet massa vitae tortor. Ultrices neque
          ornare aenean euismod elementum nisi. Tristique risus nec feugiat in
          fermentum posuere urna.
        </p>
      </div>
    </div>
  );
}

export default App;
