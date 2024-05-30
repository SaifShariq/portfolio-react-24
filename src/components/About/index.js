import { useEffect, useState } from 'react'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello There! I'm Saif Shariq, a dedicated frontend developer with a passion for creating seamless digital experiences. 
            With more than 5 years of hands-on experience in the field, I've honed my skills in crafting visually stunning and user-friendly websites and web applications. 
            My journey in frontend development began with a fascination for blending design with code, and since then, I've immersed myself in mastering the intricacies of HTML5, CSS3/Sass, JavaScript (ES6+), React.js, and more.
          </p>
          <p align="LEFT">
            What drives me is the opportunity to turn complex design concepts into functional, intuitive interfaces that captivate users. 
            Whether it's building responsive layouts, optimizing performance, or ensuring accessibility standards are met, 
            I approach every project with meticulous attention to detail and a commitment to excellence. 
          </p>
          <p>
            Throughout my career, I've had the privilege of collaborating with diverse teams and clients, 
            each experience enriching my skill set and broadening my perspective on frontend development. 
            From small scale companies to large established enterprises, I've had the opportunity to contribute to various projects, delivering solutions that not only meet objectives but also exceed expectations.
          </p>
          <p>
            In addition to my technical expertise, I value consistent learning and staying abreast of emerging technologies and industry trends. 
            I believe in the power of teamwork, clear communication, and a user-centric approach to problem-solving.
          </p>
          <p>
            Beyond coding, you'll likely find me exploring the great outdoors, producing music and experimenting with creative side projects.
          </p>
          <p>
          In a fast-paced industry where innovation is paramount, I'm excited about the endless possibilities that lie ahead. 
          Let's embark on a journey of collaboration and creativity, where we can turn your vision into a digital masterpiece that resonates with your audience.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">     
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
