import './sidebar.css'
import Link from 'next/link';
import Image from 'next/image';
export default function Sidebar(){
    return(
        <>
            <aside>
                <ul>
                    <Link href='/'>
                        <Image 
                            src='/home.png'
                            height={20}
                            width={20}
                        />
                        <li>Home</li>
                    </Link>
                    <Link href='/about'>
                        <Image 
                            src='/contact.png'
                            height={20}
                            width={20}
                        />  
                        <li>About</li>
                    </Link>
                    <Link href='/projects'>
                        <Image 
                            src='/projects.png'
                            height={20}
                            width={20}
                        />
                        <li>Projects</li>
                    </Link>
                    <Link href='/contact'>
                        <Image 
                            src='/contact.png'
                            height={20}
                            width={20}
                        />
                        <li>Contact</li>
                    </Link>
                </ul>
            </aside>
        </>
    );
}