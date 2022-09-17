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
    review:' Lorem, ipsum dolor sit amet consecteturadipisicing elit. Unde reiciendis quia consequuntur iusto. Quisquam laborum magni dignissimos? Ex, blanditiis eos.'

  }, 
  {
    avatar: Avat1,
    name: "Terence  Gaffud",
    review: 'Lorem,ipsum dolor sit amet consecteturadipisicing elit. Unde reiciendis quia consequuntur iusto. Quisquam laborum magni dignissimos? Ex, blanditiis eos.'
    
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