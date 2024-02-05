'use client'
import Link from 'next/link';
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
                </ul>
            </nav>
        )}
        </>
    );
}