"use client";

import { useState, useEffect } from "react";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("http://localhost:3000/testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.log("failed fetch");
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
          <h1 className="text-4xl mt-8 w-4/5 text-center ml-auto mr-auto  bg-blue-100">
            Testimonials
          </h1>
      {testimonials.map((testimonial: any) => (
        <div>
          <div
            key={testimonial.id}
            className="w-4/5 justify-between ml-auto mr-auto bg-teal-200"
          >
            <div className="bg-slate-300 ">
              <h3 className="border-t-4 p-4 font-bold ">{testimonial.name}</h3>
              <p className="p-8 w-2/3 ">{testimonial.testimonial}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
