import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribed:', email);
        setEmail('');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full">
            {/* Newsletter Section - Positioned to overlap */}
            <div className="relative z-10">
                <div className="container mx-auto px-4">
                    <div className="flex relative -mb-[100px]">
                        {/* Left Side - Newsletter Form */}
                        <div className="bg-[#8B3A3A] py-10 px-8 md:px-12 w-full md:w-1/2 lg:w-[45%]">
                            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 leading-tight">
                                SUBSCRIBE TO OUR NEWS<br />ARTICALS
                            </h2>
                            <form onSubmit={handleSubscribe} className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 px-4 py-3 bg-white text-gray-700 text-sm outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#1a1a1a] text-white px-6 py-3 text-sm font-semibold hover:bg-black transition-colors"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>
                        </div>

                        {/* Right Side - Shoe Image */}
                        <div className="hidden md:block w-1/2 lg:w-[55%] h-[223px] relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
                                alt="Sneaker"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-[#f5f5f0] pt-[130px] pb-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                        {/* Information Column */}
                        <div>
                            <h3 className="text-xs font-bold tracking-widest mb-6 text-gray-800">INFORMATION</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">About Us</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Returns Policy</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Shipping Policy</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Terms & Conditions</a></li>
                            </ul>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h3 className="text-xs font-bold tracking-widest mb-6 text-gray-800">QUICK LINKS</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">My Account</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">My Cart</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Size Chart</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Wishlist</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Gift Card</a></li>
                            </ul>
                        </div>

                        {/* Logo & Contact Column */}
                        <div className="col-span-2 md:col-span-1">
                            <div className="mb-6">
                                <img src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=360" alt="Footer Logo" className="w-45 h-7 mx-auto" />
                            </div>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li>T: + (08) 9055 0269</li>
                                <li>E: example@example.com</li>
                                <li className="leading-relaxed">
                                    50 Forena Place, West Casuarinas,<br />
                                    Western Australias, Australias.
                                </li>
                            </ul>
                        </div>

                        {/* Categories Column */}
                        <div>
                            <h3 className="text-xs font-bold tracking-widest mb-6 text-gray-800">CATEGORIES</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Athletic Footwear</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Boots for Every Occasion</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Luxury Leather Shoes</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Sandals & Slides</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Sneakerhead's Haven</a></li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div>
                            <h3 className="text-xs font-bold tracking-widest mb-6 text-gray-800">SUPPORT</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Contact Us</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Newsletter</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Gift Cards</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Sign In</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">My Account</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-[#f5f5f0] border-t border-gray-300 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-gray-600 text-sm">
                            Copyright © 2024 <a href="#" className="text-gray-800 hover:underline">Shooz</a>. All rights reserved.
                        </p>

                        {/* Payment Icons */}
                        <div className="flex items-center gap-2">
                            <img src="https://cdn-icons-png.flaticon.com/32/349/349221.png" alt="Amex" className="h-6" />
                            <img src="https://cdn-icons-png.flaticon.com/32/5977/5977576.png" alt="Apple Pay" className="h-6" />
                            <img src="https://cdn-icons-png.flaticon.com/32/174/174861.png" alt="PayPal" className="h-6" />
                            <img src="https://cdn-icons-png.flaticon.com/32/349/349228.png" alt="Discover" className="h-6" />
                            <img src="https://cdn-icons-png.flaticon.com/32/196/196561.png" alt="JCB" className="h-6" />
                            <img src="https://cdn-icons-png.flaticon.com/32/349/349230.png" alt="Mastercard" className="h-6" />
                            <img src="https://cdn-icons-png.flaticon.com/32/349/349221.png" alt="Visa" className="h-6" />
                        </div>

                        {/* Scroll to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                            <FaChevronUp size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
