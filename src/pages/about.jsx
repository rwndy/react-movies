import { Navbar } from '../components'

const About = () => {
  return (
  <>
    <Navbar />
    <section className="section-wrapper">
      <div className="about">
        <div className="about--image">
          <img src="https://i.postimg.cc/dVSgJ9qb/IMG-4681.jpg" alt="avatar riwandi"/>
        </div>
        <h1 className="about--name">My Name Is Riwandi</h1>
      </div>
    </section>
  </>
  )
}

export default About
