import NavBar from '@/app/components/NavBar';
import React from "react"
import AuthorCard from '@/app/components/AuthorCard'
import Feature from '@/app/components/Feature';
import Footer from '@/app/components/Footer';
import Mega from '@/app/components/Mega';




export default function Home() {
  return (
    <div>
      <NavBar/>
      <Feature/>
      <Mega/>
      <AuthorCard/>
      <Footer/>
    </div>  
);
}
