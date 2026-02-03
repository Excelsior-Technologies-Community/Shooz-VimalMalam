import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaChevronUp, FaPlus, FaMinus } from 'react-icons/fa';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribed:', email);
        setEmail('');
    };

    const toggleAccordion = (section) => {
        setOpenAccordion(openAccordion === section ? null : section);
    };

    return (
        <footer className="w-full">
            {/* Newsletter Section - Positioned to overlap */}
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex relative -mb-25">
                        {/* Left Side - Newsletter Form */}
                        <div className="bg-[#8B3A3A] py-10 px-8 md:px-12 w-full md:w-1/2 lg:w-[45%]">
                            <h2 className="text-white text-2xl md:text-2xl font-bold mb-6 leading-tight">
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
                    {/* Desktop Layout */}
                    <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                        {/* Information Column */}
                        <div>
                            <h3 className="text-xs font-bold tracking-widest mb-6 text-gray-800">INFORMATION</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">About Us</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Returns Policy</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Shipping Policy</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Terms & Conditions</a></li>
                            </ul>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h3 className="text-xs font-bold tracking-widest mb-6 text-gray-800">QUICK LINKS</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">My Account</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">My Cart</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Size Chart</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Wishlist</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Gift Card</a></li>
                            </ul>
                        </div>

                        {/* Logo & Contact Column */}
                        <div className="col-span-1">
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
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Athletic Footwear</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Boots for Every Occasion</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Luxury Leather Shoes</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Sandals & Slides</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Sneakerhead's Haven</a></li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div>
                            <h3 className="text-xs font-bold tracking-widest mb-6 text-gray-800">SUPPORT</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Contact Us</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Newsletter</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Gift Cards</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Sign In</a></li>
                                <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">My Account</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Mobile Accordion Layout */}
                    <div className="md:hidden">
                        {/* Information Accordion */}
                        <div className="">
                            <button
                                onClick={() => toggleAccordion('information')}
                                className="w-full py-4 flex items-center justify-between text-left"
                            >
                                <h3 className="text-xs font-bold tracking-widest text-gray-800">INFORMATION</h3>
                                {openAccordion === 'information' ? <FaMinus size={12} /> : <FaPlus size={12} />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'information' ? 'max-h-60 pb-4' : 'max-h-0'}`}>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">About Us</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Privacy Policy</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Returns Policy</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Shipping Policy</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Quick Links Accordion */}
                        <div className="">
                            <button
                                onClick={() => toggleAccordion('quicklinks')}
                                className="w-full py-4 flex items-center justify-between text-left"
                            >
                                <h3 className="text-xs font-bold tracking-widest text-gray-800">QUICK LINKS</h3>
                                {openAccordion === 'quicklinks' ? <FaMinus size={12} /> : <FaPlus size={12} />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'quicklinks' ? 'max-h-60 pb-4' : 'max-h-0'}`}>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">My Account</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">My Cart</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Size Chart</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Wishlist</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Gift Card</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Logo & Contact - Always visible on mobile */}
                        <div className="py-6 text-left">
                            <div className="mb-6">
                                <img src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=360" alt="Footer Logo" className="w-45 h-7" />
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

                        {/* Categories Accordion */}
                        <div className="">
                            <button
                                onClick={() => toggleAccordion('categories')}
                                className="w-full py-4 flex items-center justify-between text-left"
                            >
                                <h3 className="text-xs font-bold tracking-widest text-gray-800">CATEGORIES</h3>
                                {openAccordion === 'categories' ? <FaMinus size={12} /> : <FaPlus size={12} />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'categories' ? 'max-h-60 pb-4' : 'max-h-0'}`}>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Athletic Footwear</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Boots for Every Occasion</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Luxury Leather Shoes</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Sandals & Slides</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Sneakerhead's Haven</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Support Accordion */}
                        <div className="">
                            <button
                                onClick={() => toggleAccordion('support')}
                                className="w-full py-4 flex items-center justify-between text-left"
                            >
                                <h3 className="text-xs font-bold tracking-widest text-gray-800">SUPPORT</h3>
                                {openAccordion === 'support' ? <FaMinus size={12} /> : <FaPlus size={12} />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'support' ? 'max-h-60 pb-4' : 'max-h-0'}`}>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Contact Us</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Newsletter</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Gift Cards</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">Sign In</a></li>
                                    <li><a href="#" className="text-gray-600 text-sm hover:text-[#8B3A3A] transition-colors">My Account</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-[#f5f5f0] py-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between">
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
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
