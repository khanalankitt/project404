export default function About() {
  return (
    <>
      <div className="hero about-container">
        <div className="left">
          <h1>
            LEARN <br /> ABOUT <br /> ME
          </h1>
        </div>
        <div className="right">
          <b>
            <h2>Summary</h2>
          </b>
          <p>
            Hello, I'm Ankit Khanal from Damak, currently pursuing BSc CSIT.
            I am passionate about web development and believe in the
            transformative power of technology. Each line of code I 
            write is dedicated to crafting digital experiences that 
            leave a lasting impression. As I navigate through my computer 
            science studies, I'm focused on honing my skills to contribute meaningfully 
            to the tech landscape. Join me on this journey as we transform ideas into reality 
            and make a positive impact on the digital world.
          </p>
          <br />
          <b>
            <h2>Skills</h2>
          </b>
          <ul className="ul-skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Next JS</li>
          </ul>
          <br />
          <b>
            <h2>Education</h2>
          </b>
          <ul className="ul-education">
            <li> - Completed Basic Level Examination(BLE) 2076</li>
            <li> - Completed Secondary Education Examination(SEE) 2078</li>
            <li> - BSC CSIT (2079 - Current)</li>
          </ul>
          <br />
        </div>
      </div>
    </>
  );
}
