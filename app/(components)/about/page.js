import Image from "next/image";
import Link from "next/link";
import DateAndTime from "../dateandtime/page";
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
          <hr style={{
            height:"2px",
            background:"slateblue",
            border:"none"
          }}/>
          <br />
          <div className="contact">
            <div className="contact-left">
              <h2>Contact Me</h2>
              <p>Need to get in touch with me? Either fill out the form or 
                contact me through any of the links below.
              </p>
              <ul className="ul-links">
                <li>
                  <Link target="_blank" href="https://www.facebook.com/khanalankitt">
                    <Image 
                    title="Facebook"
                      src="/facebook.png"
                      height={40}
                      width={40}
                      alt="logo"
                    />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.github.com/khanalankitt">
                    <Image 
                      title="Github"
                      src="/github.png"
                      height={40}
                      width={40}
                      alt="logo"
                    />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.instagram.com/akhanal749">
                    <Image 
                      title="Instagram"
                      src="/instagram.png"
                      height={40}
                      width={40}
                      alt="logo"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contact-right">
              <form method="post">
                <div id="div-container">
                  <section>
                    <p>Name</p>
                    <input type="text" name="name" id="name"  required/>
                    <p>Gmail</p>
                    <input type="email" name="email" id="email" required/>
                  </section>
                  <section>
                    <p>Message</p>
                    <textarea name="textarea" id="textaea" cols="20" rows="5"></textarea>
                  </section>
                </div>
                <div className="button-container">
                  <input type="submit" id="submit" value="Submit" />
                  <input type="reset" id="submit" value="Reset" />
                </div>
              </form>
            </div>
            <div className="dateandtime">
              <DateAndTime/>
            </div>
          </div>
        </div>
      </div>
      <p className="sent">Message Sent</p>
    </>
  );
}
