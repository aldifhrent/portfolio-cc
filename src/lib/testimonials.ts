import { useState, useEffect } from "react";
import axios from "axios";

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]); 
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6"
        );
        setTestimonials(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTestimonials(); 
  }, []); 

  return { testimonials };
};
