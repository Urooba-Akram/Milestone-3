'use client';
import React from 'react';
import Image from 'next/image'; // Image optimization ke liye

export default function AuthorCard() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
            <div className="flex items-center animate-fadeIn">

                {/* Image component for optimized image */}
                <Image
                    src="/images/meena.jpg" // Correct image path (should be inside public folder)
                    alt="Author Image"
                    width={64} // Set image width
                    height={64} // Set image height
                    className="rounded-full mr-4 object-cover border-2 border-red-500"
                />

                <div>
                    <h3 className="text-xl font-bold">Urooba Akram</h3>
                    <p className="text-slate-500">Electronics Engineer | SEO Expert | Web Developer</p>
                </div>
            </div>

            <p className="mt-4 text-black leading-relaxed">
                Urooba Akram is an experienced electronics engineer with a passion for web development and sharing knowledge through articles.
            </p>

            <div className="mt-4 flex space-x-3">
                <a
                    href="#"
                    className="px-2 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer" // Security improvement
                >
                    Twitter
                </a>

                <a
                    href="#"
                    className="px-2 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer"
                >
                    Linkedin
                </a>

                <a
                    href="#"
                    className="px-2 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </div>
        </div>
    );
}
