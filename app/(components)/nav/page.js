'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
export default function Nav(){
const pathname = usePathname()
    return(
        <>
        {pathname != '/' && (
            <nav>
                <ul>
                    <Link href='/'>
                        <li>Home</li>
                    </Link>
                    <Link href="/about"> 
                        <li>About</li>
                    </Link>
                    <Link href="/projects">
                        <li>Projects</li>
                    </Link>
                    <button className='dark'>
                        <Image 
                            width="30" 
                            height="30" 
                            src="/dark.png"
                            alt="day-and-night"/>
                    </button>
                </ul>
            </nav>
        )}
        </>
    );
}