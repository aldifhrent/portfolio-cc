import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook to fetch author data (multiple authors)
export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]); // State to store the authors data

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

    fetchTestimonials(); // Fetch authors data on mount
  }, []); // Empty dependency array means this runs once on mount

  return { testimonials };
};
