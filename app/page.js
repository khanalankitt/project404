import Image from "next/image";
import Link from "next/link";
export default function Home(){
  return(
    <>
    <div className="home-container hero">
      <Image
        className="image-hero" 
        src='/mebg.jpg'  
        height={2} 
        width={800} 
        alt="My Image"
      />
      <div className="container-box">
        <div className="text text-box">
          <h2>Hi</h2>
          <h1>I am <span style={
            {color:"slateblue",
            textDecoration:"underline",
            textDecorationColor:"white",
            background:"white",
            padding:"0px 5px",
            borderRadius:"5px"}}>
                    Ankit Khanal </span></h1>
          <h2>A computer science student who <br /> loves to code.</h2><br />
          <Link href='/about'>
            <p><u>About Me {`➜`}</u></p>
          </Link>
        </div>
        <div className="image-box">
            <Image 
              src = '/me.jpg'
              height={300}
              width={300}
              alt="myimage"
            />
        </div>
      </div>
    </div>
    </>
  );
}