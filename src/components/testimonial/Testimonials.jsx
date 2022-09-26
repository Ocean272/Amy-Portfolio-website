import React from 'react'
import './testimonials.css'
import Avat1 from '../../assets/emptyavatar.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'



// // Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';



const data = [
  {
    avatar: Avat1,
    name: "Edison Zhuang",
    review:
    `I knew Amy from the Software Developer Immersive Program offered under NTU as her trainer. Amy possessed a strong learning attitude. 
    She leaves no stone unturned in her quest to pick up software development. Amy has the right attitude to contribute to any organizations 
    that are willing to offer her the opportunities. \nI have witnessed Amy's approachable leadership in her group project. 
    She took initiative to meet project milestones and guided her peers to do the same. She is well-liked by her group mates and is one of 
    the key contributors to the success of every project. She continues her learning journey even after her graduation. She would spend lots 
    of time learning and attempting to practice her coding skills. I highly recommend her to any organizations that appreciate a well mannered, 
    matured, stable and hardworking career switchers.`
  }, 
  {
    avatar: Avat1,
    name: "Terence  Gaffud",
    review: 
    `Amy is a good developer. She's well versed in JavaScript and has experience creating frontend using ReactJS, backend APIs using Express, 
    as well as mobile applications using React Native. She is also familiar with PostgreSQL and MongoDB as databases. In terms of her work ethic, 
    she is resilient and would approach any problem given to her with enthusiasm. She is methodical in her approach in developing the program flow 
    and would try to understand the whole picture of how the application should work. She doesn't shy away from asking questions, and applies to 
    her code what she learned through lessons and consultations. This is what makes Amy a good developer. She is not afraid to try and always has 
    a thirst of knowing and applying what she knows.`
  }
]

const testimonals = () => {
  return (
    <section id="testimonials">
      <h5>Review from LinkedIn</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt=''/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonals