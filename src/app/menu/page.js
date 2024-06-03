import Image from "next/image";
import { NavBar } from "../components/NavBar";
import { menu } from "./data";

export default () => {
  return (
    <>
      <NavBar />
      <div className="hero px-8 py-10 bg-gray-900 text-white min-h-screen">
        <h1 className="text-5xl font-bold py-4 text-center">Menu</h1>

        <div className="flex flex-col gap-8">
          {menu.map((category) => (
            <div className="flex flex-col gap-4" key={category.category}>
              <h2 className="text-3xl font-medium text-red-400">
                {category.category}
              </h2>
              <ul className="grid md:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <li
                    className="bg-gray-800 p-4 rounded-lg"
                    key={item.name}
                  >
                    <div className="w-full h-48 mb-4">
                      <Image
                        width={200}
                        alt={item.name}
                        src={item.image}
                        height={200}
                        className="object-cover object-center w-full h-full rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                      <span className="text-red-400">${item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
