import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();

  useEffect(() => {
    client.fetch('*[_type == "brands"]').then((data) => { setBrands(data); });
    client.fetch('*[_type == "testimonials"]').then((data) => {setTestimonials(data); });
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return <div className='app__testimonial-item app__flex'></div>;
};

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 'testimonial', 'app__primarybg');
