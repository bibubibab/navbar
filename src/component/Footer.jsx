import React from "react";


const Footer = () => {
    return (
        <footer className="bg-white text-black py-8">
            <div className="container mx-auto px-8">
                <div className="flex flex-wrap justify-between">
                    {/* Logo and Description */}
                    <div className="w-full md:w-1/5 mb-6 md:mb-0">
                        <div className="">
                            <img src="images/nautika1.png" className=" hover:text-sky-950"></img>
                        </div>
                    </div>

                    {/* Resources Column */}
                    <div className="w-full md:w-1/5 mb-6">
                        <h3 className="text-lg font-semibold mb-3">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-900">Updates</a></li>
                            <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                            <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
                            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                        </ul>
                    </div>

                    {/* Pricing Column */}
                    <div className="w-full md:w-1/5 mb-6">
                        <h3 className="text-lg font-semibold mb-3">Pricing</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-900">Basic Pricing Plan</a></li>
                            <li><a href="#" className="hover:text-gray-900">Plus Pricing Plan</a></li>
                            <li><a href="#" className="hover:text-gray-900">Teams Pricing Plan</a></li>
                        </ul>
                    </div>

                    {/* Explore Column */}
                    <div className="w-full md:w-1/5 mb-6">
                        <h3 className="text-lg font-semibold mb-3">Explore</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-900">All Personalities</a></li>
                            <li><a href="#" className="hover:text-gray-900">Bot Buzz AI</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="w-full md:w-1/5 mb-6">
                        <h3 className="text-lg font-semibold mb-3">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-900">Terms and Conditions</a></li>
                        </ul>
                    </div>

                    {/* Others Column */}
                    <div className="w-full md:w-1/5 mb-6">
                        <h3 className="text-lg font-semibold mb-3">Others</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-900">FAQs</a></li>
                            <li><a href="#" className="hover:text-gray-900">Support</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-gray-300 pt-4 text-center">
                    <p className="text-sm text-gray-500">&copy; 2023. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer