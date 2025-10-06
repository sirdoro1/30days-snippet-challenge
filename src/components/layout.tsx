// src/components/layout.tsx
import {ReactNode} from 'react';
import Link from 'next/link';

type LayoutProps = {
    children : ReactNode;
}

export default function Layout({children}: LayoutProps){
    // Day 3 of 30 Days Code Snippet Challenge
    return (<div>
        <header style={{backgroundColor:'#2345', padding:'25px'}}>
            Navbar Section
            <div style={{display:'inline-block', marginLeft:'10px'}}>
                <Link href={'/'} style={{
                    marginRight:'10px', 
                    backgroundColor:'#ffed',
                    color:'#000',
                    padding:'10px 20px', 
                    borderRadius:'6px'}}>
                        Home
                </Link>
                <Link href={'/about'} style={{
                    marginRight:'10px', 
                    backgroundColor:'#ffed',
                    color:'#000',
                    padding:'10px 20px', 
                    borderRadius:'6px'}}>
                        About
                </Link>
                <Link href={'/contact'} style={{
                    marginRight:'10px', 
                    backgroundColor:'#ffed',
                    color:'#000',
                    padding:'10px 20px', 
                    borderRadius:'6px'}}>
                        Contact
                </Link>
            </div>
        </header>
        <main style={{minHeight:'89vh', padding:'15px'}}>
            {children}
        </main>
        <footer style={{backgroundColor:"#2345", padding:'15px'}}>
            Footer Section 
        </footer>
    </div>)

}