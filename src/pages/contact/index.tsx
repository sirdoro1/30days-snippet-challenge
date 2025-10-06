// src/pages/contact/index.tsx

import Link from 'next/link'

export default function Contact(){
    // Day 2 of 30 Days Code Snippet Challenge
    return <div>
        <h1 style={{marginTop: '20px', textAlign:'center'}}>
            Contact Page
        </h1>
        <p style={{marginTop: '20px'}}>
            Contact Page - Routing and Navigation in Next.js
        </p>
        <div style={{marginTop:'10px'}}>
            <Link href={'/'} style={{margin:'10px'}}> 
                Home Page
            </Link>
            <Link href={'/about'}> 
                About Page
            </Link>
        </div>
    </div>
}