// interface TestimonialParams  {
//     id: string;
//     name: string;
// }

// const getTestimonialID = async (id:string) => {
//     const res = await fetch("http://localhost:3000/testimonials" + id);
//     return res.json();
//   };
  

// export default async function TestemonialDetails ({ params }: { params: TestimonialParams }) {
//     const testimonial = await getTestimonialID(params.id)

//     return (
//         <div>{testimonial.name}</div>
//     )
// }



"use client"
import { notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface TestimonialParams {
  id: string;
  name: string;
}

interface Testimonial {
  id: string;
  name: string;
  testimonial: string
  // adicione quaisquer outras propriedades que seu objeto Testimonial possa ter
}

const getTestimonialID = async (id: string): Promise<Testimonial | null> => {
    const res = await fetch(`http://localhost:8000/testimonials/${id}`);
  
    // Verifica se a resposta está ok
    if (!res.ok) {
      throw new Error('Falha ao obter depoimento');
    }
  
    // Verifica se o cabeçalho Content-Type é application/json
    const contentType = res.headers.get('Content-Type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Resposta não é um JSON válido');
    }
  
    // Tenta interpretar a resposta como JSON
    try {
      return await res.json();
    } catch (error) {
      throw new Error('Resposta não é um JSON válido');
    }
  };

  export default function TestemonialDetails({ params }: { params: TestimonialParams }) {
    const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchTestimonial = async () => {
        try {
          const data = await getTestimonialID(params.id);
          setTestimonial(data);
          setError(null);
        } catch (err:any) {
          setTestimonial(null);
          setError(err.message);
        }
      };
  
      fetchTestimonial();
    }, [params.id]);
  
    if (error) {
      return notFound()
    }
  
    if (!testimonial) {
      return <div>Carregando...</div>;
    }
  
    return (<>
            <div>{testimonial?.name}</div>
            <div>{testimonial?.testimonial}</div>
            </>
        );
  }