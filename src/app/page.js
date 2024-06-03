import Circle from "./components/IconTurn";
import { NavBar } from "./components/NavBar";
import { WhyCard } from "./components/WhyCard";
import { SpecialSelector } from "./components/SpecialsSelector";
import { EventCarousel } from "./components/EventCarousel";
import { FormComponent } from "./components/FormComponent";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { ImagesComponent } from "./components/ImagesComponent";
import { ContactComponent } from "./components/ContactComponent";
// immport useState

export default function Home() {
  return (
    <>
      <section className="w-full py-5  px-10 flex flex-col fixed z-50 text-white">
        {/* <div className="px-4 md:px-20 relative py-2">+23458594590</div> */}
        <NavBar></NavBar>
      </section>
      <section id="hero"className="px-5 pt-32 hero  md:px-40 hero flex flex-col xl:flex-row items-center justify-center xl:justify-between">
        <div className="w-full xl:w-4/6">
          <h1 className="text-4xl md:text-6xl text-center xl:text-left text-white font-semibold">
            Welcome to  <span className="text-[#cda45e]"> Moscow Lounge </span>
          </h1>
          <p className="text-2xl text-center xl:text-left mt-4 text-white font-regular">
            Delivering Exquisite delight since 1960
          </p>
          <div className="flex flex-row justify-center xl:justify-start mt-8">
          <button className="border-[#cda45e] mr-10 border-2 px-2 md:px-4 py-2 rounded-full text-white hover:bg-[#cda45e] hover:border-white-1000 transition duration-500 ease-in-out">
              Our Menu
            </button>
            <button className="border-[#cda45e] mr-10 border-2 px-2 md:px-4 py-2 rounded-full text-white hover:bg-[#cda45e] hover:border-white-1000 transition duration-500 ease-in-out">
              Book a table
            </button>
          </div>
        </div>
        {/* <div className="rounded-full bg-[#cda45e] h-40 w-40 -mb-20 mt-20 flex flex-row items-center justify-center cursor-pointer"> */}
          <div className="hero_design h-28 w-28 rounded-full cursor-pointer"></div>
        {/* </div> */}
      </section>
      {/* ====== About Section */}
      <section
        id="about"
        className="about flex w-full h-fit xl:h-[100vh] flex-col-reverse xl:flex-row px-8 xl:px-20 pt-20 pb-12"
      >
        <div className="w-full xl:w-1/2 h-full mt-10 xl:mt-0 flex flex-col justify-center">
          <h1 className="text-3xl text-white font-semibold">
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h1>
          <p className="text-lg mt-1 text-white italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="text-white">
            <li className="flex items-center my-4">
              {" "}
              <Circle color="#cda45e" className="mr-4"></Circle> Ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
            <li className="flex items-center my-4">
              {" "}
              <Circle color="#cda45e" className="mr-4"></Circle> Duis aute irure
              dolor in reprehenderit in voluptate velit.
            </li>
            <li className="my-4">
              {" "}
              <Circle
                color="#cda45e"
                className="mr-4 inline-block"
              ></Circle>{" "}
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </li>
          </ul>
          <p className="text-white">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </div>
        <div className="w-full xl:w-1/2 flex flex-row justify-center ">
          <div className="w-[500px] about-bg flex flex-row items-center justify-center">
            <div className="w-[90%] h-[90%] border-2  border-[#cda45e]"></div>
          </div>
        </div>
      </section>
      <section className="bg-[#000000] px-4 md:px-20 h-full py-20">
        <h1 className="text-gray-500 text-lg font-medium uppercase flex flex-row items-center">
          Why us <hr className="w-40 ml-4 text-[#cda45e] bg-[#cda45e]"></hr>
        </h1>
        <h2 className="text-4xl capitalize text-[#cda45e] font-semibold">
          Why choose our lounge?
        </h2>
        <section className="flex flex-col xl:flex-row w-full justify-between mt-10">
          <WhyCard
            count={"01"}
            header={"Lorem Ipsum"}
            paragraph={
              "Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"
            }
          ></WhyCard>
          <WhyCard
            count={"02"}
            header={"Lorem Ipsum"}
            paragraph={
              "Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"
            }
          ></WhyCard>
          <WhyCard
            count={"03"}
            header={"Lorem Ipsum"}
            paragraph={
              "Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"
            }
          ></WhyCard>
        </section>
      </section>
      <section
        id="specials"
        className="bg-gray-900 flex w-full flex-col px-4 md:px-20 pt-20 pb-12"
      >
        <div className="flex flex-col">
          <h1 className="text-gray-500 text-lg font-medium uppercase flex flex-row items-center">
            Specials<hr className="w-40 ml-4 text-gray-400 bg-gray-400"></hr>
          </h1>
          <h2 className="text-4xl capitalize text-[#cda45e] font-semibold">
            Check our specials
          </h2>
        </div>
        <SpecialSelector></SpecialSelector>
      </section>
      <section
        id="events"
        className="events xl:h-[100vh] h-fit flex w-full overflow-hidden flex-col px-4 md:px-20 pt-20 pb-12"
      >
        <header className="flex flex-col">
          <h1 className="text-gray-500 text-lg font-medium uppercase flex flex-row items-center">
            Events<hr className="w-40 ml-4 text-gray-400 bg-gray-400"></hr>
          </h1>
          <h2 className="text-4xl capitalize text-[#cda45e] font-semibold">
            Organize events in our restaurant
          </h2>
        </header>
        <div className="w-full mt-10">
          <EventCarousel></EventCarousel>
        </div>
      </section>
      <section className="bg-gray-900 flex w-full flex-col px-4 md:px-20 pt-20 pb-12">
        <header className="flex flexa-col">
          <h1 className="text-gray-500 text-lg font-medium uppercase flex flex-row items-center">
            Reservation<hr className="w-40 ml-4 text-gray-400 bg-gray-400"></hr>
          </h1>
          <h2 className="text-4xl capitalize text-[#cda45e] font-semibold">
            Book a table
          </h2>
        </header>
        <FormComponent></FormComponent>
      </section>
      <section className="bg-[#000000] flex w-full overflow-hidden flex-col px-4 md:px-20 pt-20 pb-12">
        <div className="flex flex-col">
          <h1 className="text-gray-500 text-lg font-medium uppercase flex flex-row items-center">
            Testimonials
            <hr className="w-40 ml-4 text-gray-400 bg-gray-400"></hr>
          </h1>
          <h2 className="text-4xl capitalize text-[#cda45e] font-semibold">
            What they're saying about us
          </h2>
        </div>
        <div className="w-full mt-10">
          <TestimonialCarousel></TestimonialCarousel>
        </div>
      </section>
      <section
        id="gallery"
        className="bg-[#000000] flex w-full  overflow-hidden flex-col pt-20 pb-12"
      >
        <header className="flex flex-col px-4 md:px-20 ">
          <h1 className="text-gray-500 text-lg font-medium uppercase flex flex-row items-center">
            Gallery<hr className="w-40 ml-4 text-gray-400 bg-gray-400"></hr>
          </h1>
          <h2 className="text-4xl capitalize text-[#cda45e] font-semibold">
            Some photos from our restaurant.
          </h2>
        </header>
        <ImagesComponent></ImagesComponent>
      </section>
      {/* <section
        id="chefs"
        className="bg-[#000000] flex w-full overflow-hidden flex-col pt-20 pb-12"
      >
         <header className="flex flex-col px-20 ">
          <h1 className="text-gray-500 text-lg font-medium uppercase flex flex-row items-center">
            Chefs<hr className="w-40 ml-4 text-gray-400 bg-gray-400"></hr>
          </h1>
          <h2 className="text-4xl capitalize text-red-400 font-semibold">
            Our professional chefs  
          </h2>
        </header>
      </section> */}
      <section
        id="contact"
        className="bg-[#000000] flex w-full overflow-hidden flex-col px-4 md:px-20 pt-20 pb-12"
      >
        <header className="flex flex-col px-4 md:px-20 ">
          <h1 className="text-gray-500 text-lg font-medium uppercase flex flex-row items-center">
            Contact<hr className="w-40 ml-4 text-gray-400 bg-gray-400"></hr>
          </h1>
          <h2 className="text-4xl capitalize text-[#cda45e] font-semibold">
            Contact us
          </h2>
        </header>
        <ContactComponent></ContactComponent>
      </section>
    </>
  );
}
