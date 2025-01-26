'use client';
import React from 'react'
import CommentSection from '@/app/components/CommentSection';
import AuthorCard from '@/app/components/AuthorCard';
import { title } from 'process';

const posts = [
    {
        id: "1",  
        title: "HTML Block of Web Development",
        description: "Explore the world of HTML, the backbone of every web page. Learn its structure, elements, and how it plays an important role in creating websites. Understand the syntax and usage of tags like <div>, <section>, and more.",
        image: "../images/Slide1.jpg"
    },
    {
        id: "2",  
        title: "CSS for Styling and Layout",
        description: "CSS (Cascading Style Sheets) is what makes web pages visually appealing. This blog covers how CSS helps style HTML elements, including text, colors, layouts, and more. Learn how to create flexible, responsive designs with CSS.",
        image: "../images/Slide2.jpg"
    },
    {
        id: "3",  
        title: "JavaScript Fundamentals",
        description: "JavaScript is the scripting language that brings interactivity to web pages. From variables to functions, events to DOM manipulation, this blog dives deep into JavaScript's fundamental concepts and real-world applications.",
        image: "../images/Slide3.jpg"
    },
    {
        id: "4",  
        title: "Introduction to Web Development Frameworks",
        description: "Web development frameworks like React, Angular, and Vue.js can drastically improve productivity and structure in your web development projects. This blog explains their key features, advantages, and when to use each framework.",
        image: "../images/Slide4.jpg"
    },
    {
        id: "5",  
        title: "Responsive Web Design with Media Queries",
        description: "Responsive web design ensures that your website looks great on all devices. In this blog, we explore the use of media queries in CSS and how they help create fluid layouts that adapt to different screen sizes.",
        image: "../images/Slide5.jpg"
    },
    {
        id: "6",  
        title: "Version Control with Git and GitHub",
        description: "Version control is essential for collaboration and tracking changes in projects. This blog covers the basics of Git and GitHub, including creating repositories, managing branches, and collaborating with other developers.",
        image: "../images/Slide6.jpg"
    },
    {
        id: "7",  
        title: "Understanding the DOM (Document Object Model)",
        description: "The DOM is an essential concept in web development, representing HTML elements as objects. Learn how JavaScript interacts with the DOM to manipulate web page content dynamically and create interactive experiences.",
        image: "../images/Slide7.jpg"
    },
    {
        id: "8",  
        title: "Building Interactive Websites with JavaScript",
        description: "JavaScript is the heart of interactive web design. In this blog, we explore how to build interactive elements such as forms, buttons, modals, and animations to engage users effectively.",
        image: "../images/Slide8.jpg"
    },
    {
        id: "9",  
        title: "Introduction to Web Accessibility (a11y)",
        description: "Accessibility is key to making your website usable for everyone, including people with disabilities. This blog discusses accessibility principles, techniques, and tools to ensure your web content is accessible to all users.",
        image: "../images/Slide9.jpg"
    },
    {
        id: "10",  
        title: "Advanced CSS Layouts (Flexbox & Grid)",
        description: "Master the art of layout design with advanced CSS techniques. This blog covers Flexbox and CSS Grid, two powerful layout systems that allow you to create complex, responsive, and efficient layouts with minimal effort.",
        image: "../images/Slide10.jpg"
    },
    {
        id: "11",  
        title: "Web Security Best Practices",
        description: "Security is a crucial aspect of web development. This blog dives into the best practices to secure web applications, including data encryption, protecting against attacks like SQL injection and XSS, and using HTTPS for secure communication.",
        image: "../images/Slide11.jpg"
    },
    {
        id: "12",  
        title: "Web Performance Optimization",
        description: "Performance is a critical factor in user experience. Learn how to optimize your website’s performance through techniques like lazy loading, image optimization, and code splitting to make sure your website loads quickly and efficiently.",
        image: "../images/Slide12.jpg"
    },
    {
        id: "13",  
        title: "The Power of Progressive Web Apps (PWAs)",
        description: "Progressive Web Apps (PWAs) combine the best of web and mobile apps, providing an offline experience and fast loading times. This blog explores the benefits of PWAs and how to implement them in your web development projects.",
        image: "../images/Slide13.jpg"
    },
    {
        id: "14",  
        title: "Artificial Intelligence and Machine Learning in Web Development",
        description: "AI and Machine Learning are transforming the way websites and apps function. This blog discusses how AI can be integrated into web development for enhanced user experiences, from chatbots to personalized recommendations.",
        image: "../images/Slide14.jpg"
    },
    {
        id: "15",  
        title: "Advanced Web Development Techniques",
        description: "Take your web development skills to the next level with advanced techniques and practices. This blog covers topics such as performance optimization, automation, testing, and building scalable applications that handle heavy traffic and complex functionality.",
        image: "../images/Slide15.jpg"
    },
    
]

export default function Post({ params }: {params: {id: string}}){
      const { id } = params;
      const post = posts.find((p) => p.id === id);

      if(!post) {
        return (
            <h2 className='text-2xl font-bold text-center mt-10'> Post Not Found </h2>
        );
      }

      const renderParagraphs = (description: string) => {
        return description.split("/n").map((para, index) => (
            <p key={index} className='mt-4 text-justify'>
                {para.trim()} </p>
        ));
    };

    return (
        <div className='max-w-3xl mx-auto p-5'>
        <h1 className='md:text-4xltext-3xl font-bold text-red-600 text-center'>
            {" "}
            {post.title}
        </h1>

{post.image && (
    <img
    src={post.image}
    alt={post.title}
    className="w-full h-auto rounded-md mt-4" />
)}
<div className='mt-6 text-lg text-slate-700'>
    {renderParagraphs(post.description)}
</div>
            <CommentSection postId={post.id}/>
            <AuthorCard/>

        </div>
    )
}

