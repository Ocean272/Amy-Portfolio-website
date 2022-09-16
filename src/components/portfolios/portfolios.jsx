import React from 'react'
import './portfolios.css'
import proj1 from '../../assets/proj-1.jpg'
import proj2 from '../../assets/proj-2.jpg'

const Portfolios = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={proj1} alt='' />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className="portfolio__item-cta">
                  <a href='https://github.com' className='btn'>Github</a>
                  <a href='https://github.com' className='btn btn-primary' target='-blank'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={proj2} alt='' />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className="portfolio__item-cta">
                  <a href='https://github.com' className='btn'>Github</a>
                  <a href='https://github.com' className='btn btn-primary' target='-blank'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={proj2} alt='' />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className="portfolio__item-cta">
                  <a href='https://github.com' className='btn'>Github</a>
                  <a href='https://github.com' className='btn btn-primary' target='-blank'>Live Demo</a>
                </div>
            </article>

        </div>
    </section>
  )
}

export default Portfolios