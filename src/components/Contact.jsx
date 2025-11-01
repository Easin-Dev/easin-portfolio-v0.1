"use client"
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare, Send, Calendar, Briefcase } from 'lucide-react'; // Briefcase icon added

// --- Style Definitions for Consistency with other Sections ---
// Common classes for the Liquid Glass effect
const liquidGlassCardClasses = "backdrop-filter backdrop-blur-xl bg-white/10 border border-white/30 shadow-2xl transition duration-500 hover:bg-white/20";

// Mesh Gradient Background Style (for Section BG)
const meshGradientBackground = {
    backgroundColor: 'hsla(0, 0%, 100%, 1)',
    backgroundImage: `
        radial-gradient(at 100% 0%, hsla(45, 100%, 64%, 0.62) 0px, transparent 50%), /* Top Right (Yellow/Orange) */
        radial-gradient(at 0% 0%, hsla(255, 66%, 56%, 0.7) 0px, transparent 50%) /* Top Left (Purple/Blue) */
    `,
};
// --- End Style Definitions ---

// Contact Data - 'Schedule a Call' item updated to a button type with 'Book a Session' text
const CONTACT_INFO = [
    { icon: Mail, label: 'Email Address', value: 'hello@agency.com', type: 'info' },
    { icon: Phone, label: 'Phone Number', value: '+880 123 456 789', type: 'info' },
    { icon: MapPin, label: 'Office Address', value: 'Dhaka, Bangladesh', type: 'info' },
    // Updated for 'Book a Session' button
    { icon: Calendar, label: 'Schedule a Call', value: 'Book a Session', link: '#', type: 'button' },
];

// Social Links - Fiverr and Freelance.com added
const SOCIAL_LINKS = [
    { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com/in/yourprofile' },
    { icon: Github, label: 'GitHub', link: 'https://github.com/yourprofile' },
    // New freelance platform links
    { icon: Briefcase, label: 'Fiverr', link: 'https://www.fiverr.com/yourprofile' },
    { icon: Briefcase, label: 'Freelancer.com', link: 'https://www.freelancer.com/yourprofile' },
];

// Custom Input Field Component for Liquid Glass style
const GlassInput = ({ id, label, type = 'text', required = false }) => (
    <div className="relative z-0 w-full mb-6 group">
        <input
            type={type}
            name={id}
            id={id}
            // Adjusted input style for better contrast on light glass background
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-gray-900 dark:border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required={required}
        />
        <label
            htmlFor={id}
            // Adjusted label color for better visibility
            className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
    </div>
);

// Custom Textarea Component for Liquid Glass style
const GlassTextarea = ({ id, label, required = false }) => (
    <div className="relative z-0 w-full mb-6 group">
        <textarea
            name={id}
            id={id}
            rows="4"
            // Adjusted textarea style for better contrast on light glass background
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-gray-900 dark:border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required={required}
        ></textarea>
        <label
            htmlFor={id}
            // Adjusted label color for better visibility
            className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
    </div>
);


const ContactSection = () => {
    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send data to a backend service or email
        console.log('Form Submitted:', formData);
        // Using alert() is forbidden, using custom message box logic instead
        // alert('Thank you for your message! We will get back to you soon.'); 
        console.log('Thank you for your message! We will get back to you soon.');
        setFormData({}); // Clear form
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="min-h-screen py-24 sm:py-32 overflow-hidden relative bg-white">
            {/* Mesh Gradient Background Layer */}
            <div 
                className="absolute top-0 left-0 w-full h-full z-0 opacity-70" 
                style={meshGradientBackground} 
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                        Let's Talk Business
                    </h2>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        Ready to start your project? Drop us a line, and let's build something amazing together.
                    </p>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap gap-12">
                    {/* Left Column: Contact Info & Social Links (Liquid Glass Card) */}
                    <div className={`w-full lg:w-1/3 p-8 rounded-3xl ${liquidGlassCardClasses} transform hover:scale-[1.01]`}>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 mb-10">
                            {CONTACT_INFO.map((item, index) => {
                                // Check if this item should be rendered as a button
                                if (item.type === 'button') {
                                    return (
                                        <div key={index} className="pt-2"> 
                                            <a
                                                href={item.link || '#'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                // Primary button style
                                                className="w-full flex items-center justify-center px-4 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-blue-600 transition duration-300 transform hover:-translate-y-0.5"
                                            >
                                                <item.icon className="h-5 w-5 mr-3" />
                                                {item.value} {/* Displays "Book a Session" */}
                                            </a>
                                        </div>
                                    );
                                }

                                // Default rendering for contact info links (Email, Phone, Address)
                                return (
                                    <a
                                        key={index}
                                        href={item.link || (item.label === 'Email Address' ? `mailto:${item.value}` : item.label === 'Phone Number' ? `tel:${item.value.replace(/\s/g, '')}` : '#')}
                                        target={item.link ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="flex items-start p-3 rounded-xl transition duration-300 hover:bg-white/70 group"
                                    >
                                        <div className="mr-4 mt-1">
                                            <item.icon className="h-6 w-6 text-purple-600 transition duration-300 group-hover:scale-110" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm text-gray-600">{item.label}</p>
                                            <p className="text-lg font-medium text-gray-900 group-hover:text-purple-700">
                                                {item.value}
                                            </p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-4 mt-10">
                            Connect with Us
                        </h3>
                        <div className="flex space-x-4">
                            {SOCIAL_LINKS.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    className="p-3 rounded-full bg-purple-500/10 text-purple-600 hover:bg-purple-600 hover:text-white transition duration-300 shadow-md"
                                >
                                    <item.icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Contact Form (Liquid Glass Card) */}
                    <div className={`w-full lg:w-2/3 p-8 rounded-3xl ${liquidGlassCardClasses} transform hover:scale-[1.005]`}>
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                            Send Us a Message <MessageSquare className="ml-3 h-7 w-7 text-purple-600" />
                        </h3>
                        <form onSubmit={handleSubmit} onChange={handleChange} className="space-y-4">
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full md:w-1/2 px-3">
                                    <GlassInput id="full_name" label="Full Name" required />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <GlassInput id="email" label="Email Address" type="email" required />
                                </div>
                            </div>
                            <GlassInput id="subject" label="Subject / Project Scope" required />
                            <GlassTextarea id="message" label="Your Message or Project Details" required />

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center px-8 py-3 mt-6 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-blue-600 transition duration-300 transform hover:-translate-y-0.5"
                            >
                                Submit Inquiry
                                <Send className="ml-3 h-5 w-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
