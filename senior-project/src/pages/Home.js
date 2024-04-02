import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';

export default function Home() {
    return (
        <>
            <HeroSection />

            <h2 className="py-4 px-4 text-4xl font-bold">Instructions</h2>
            <div className="px-4 pb-8">
                <p>1. View the Course Syllabus: <a className="text-blue-600" href="https://docs.google.com/document/d/1aD1e59oZ9O2pif9JBqHOFLR86eLSLB8vZ4sgEAS2Nx0/edit" target="_blank"> Here </a></p>
                <p>2. Watch the introductory video (Click <a className="text-blue-600" href="https://mediasite.video.ufl.edu/Mediasite/Play/8ebcb534f140433296041170863ba8631d" target="_blank"> "Watch Intro" </a> above) </p>
                <p>3. Click the <strong>Google Sign-in button</strong> in the top right of this page </p>
                <p> (You will need to sign in with your gatorlink account) </p>
                <p>4. Establish your team, teams must be 2-5 people </p>
                <div className="px-5 py-1">
                    <p>a) Use the project page to join an advisor suggested project</p>
                    <p>b) Use the pitch page to create your own project and allow other students to join</p>
                </div>
                <p>5. If you chose option b, join an advisor with your team (any UF faculty can be your advisor) </p>
                <p>6. Wait patiently for the course to be added to your schedule </p>
            </div>
        </>
    )
}