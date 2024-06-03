"use client";
const specials = [
    {
        name: "Modi sit est",
        header: 'Architecto ut aperiam autem id',
        italic: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
        textProper: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero'
    },
    {
        name: "Modi sit est",
        header: 'Architecto ut aperiam autem id 2',
        italic: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
        textProper: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero'
    },
    {
        name: "Modi sit est",
        header: 'Architecto ut aperiam autem id 3',
        italic: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
        textProper: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero'
    },
    {
        name: "Modi sit est",
        header: 'Architecto ut aperiam autem id 4',
        italic: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
        textProper: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero'
    },
    {
        name: "Modi sit est",
        header: 'Architecto ut aperiam autem id 5',
        italic: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka',
        textProper: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero'
    },

]
import { useState } from "react";

export const SpecialSelector = () => {
    const [active, setActive] = useState(0);
  return (
    <section className="w-full flex flex-col xl:flex-row mt-10" >
      <section className="w-full xl:w-3/12 border-r-0 xl:border-r-2 border-[#cda45e]">
        <ul className="w-full">
            {specials.map((x,y) => {
                return (<li key={y} onClick={() => setActive(y)} className={y === active ? "w-full py-5 bg-[#cda45e] cursor-pointer text-gray-900 px-5" : 'w-full py-5 cursor-pointer hover:text-[#cda45e] text-white px-5'}>
                    {x.name}
                </li>
                )
            })}
        </ul>
      </section>
      <section className="w-full xl:w-9/12 flex flex-row">
            <section className="px-4 md:px-12 py-10">
                <h1 className="text-white text-3xl">{specials[active].header}</h1>
                <h2 className="text-gray-400 text-lg italic my-4">{specials[active].italic}</h2>
                <p className="text-gray-400 text-lg">
                    {specials[active].textProper}
                </p>
            </section>
            <section className="rounded-full h-40 w-40">

            </section>
        </section>
    </section>
  );
};
