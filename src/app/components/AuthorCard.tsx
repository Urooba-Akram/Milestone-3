import React from 'react'

export default function AuthorCard(){
    return (
        <div className=" bg-white shadow-lgrounded-lg p-6 mt-12">
        <div className="flex items-center animation-fadeIn">

    <img
    className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
    src="../images/meena.jpg"
    alt="Author Image"
    />

<div>
    <h3 className="text-xl font-bold">Urooba Akram</h3>
    <p className="text-slate-500"> Electronics Engineer | SEO Expert | Web Developer</p>
</div>
        </div>




<p className='mt-4 text-black leading-relaxed '>
  Urooba Akram is an experienced electronics engineer with a passion for web development and sharing knowledge through articles  
</p>

<div className='mt-4 flex space-x-3'>
    <a href="#"
    className="px-2 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
        
       Twitter 

    </a>

    <a href="#"
    className="px-2 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
        
       Linkedin 

    </a>

    <a href="#"
    className="px-2 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
        
       Github

    </a>



</div>

</div>
    )
}

