import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from "../components/ui/card";

interface BlogCardProps {
    post: { 
        id: string; 
        title: string; 
        description: string; 
        image: string; 
        date?: string; // 'date' is optional
    };
    isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
    // Check if 'post.date' exists, if not use a default value
    const formattedDate = post.date
        ? new Date(post.date).toLocaleDateString()
        : "No date available";

    return (
        <Card
            className={`p-4 ${
                isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
            } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
            <div className="relative w-full h-48">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="100vw"
                />
            </div>

            <CardTitle className="text-xl font-normal mt-4 text-center">
                {post.title}
            </CardTitle>
            <br />
            <CardContent className="text-center">
                <p>{post.description}</p>
            </CardContent>

            <div className="flex flex-col items-center mt-4">
                <p
                    className={`text-sm mb-4 ${
                        isDarkBackground ? "text-slate-400" : "text-slate-600"
                    }`}
                >
                    Blog Writer: Urooba Akram
                </p>
                <a
                    href={`/posts/${post.id}`}
                    className={`w-full px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-500`}
                >
                    Read More
                </a>
            </div>
        </Card>
    );
}