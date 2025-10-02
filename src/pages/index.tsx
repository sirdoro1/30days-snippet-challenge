// src/pages/index.tsx

import Link from 'next/link'

export default function Home(){
  // Day 2 of 30 Days Code Snippet
  return <div>
      <h1 style={{marginTop: '20px', textAlign:'center'}}>
        Welcome to our Home Page
      </h1>
      <p style={{marginTop: '20px'}}>
        Home Page - Routing and Navigation in Next.js
      </p>
      <div style={{marginTop: '20px'}}>
        <Link href={'/about'} style={{margin:'5px'}}> About  Page </Link>
        <Link href={'/contact'}> Contact Page</Link>
    </div>
  </div>
}