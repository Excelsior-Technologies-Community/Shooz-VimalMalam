import { useState } from 'react';
import {
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineHeart,
    AiOutlineShopping,
    AiOutlineFacebook,
    AiOutlineTwitter,
    AiOutlineInstagram
} from 'react-icons/ai';

const Header = () => {
    const [shopOpen, setShopOpen] = useState(false);

    return (
        <header className="w-full">

            {/* Promo Bar - Marquee */}
            <div className="bg-linear-to-r from-purple-700 via-pink-600 to-red-500 text-white text-xs py-2 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex mx-8">
                            <span>Enjoy 20% off your entire order with the code <b>SHOEFRESH20</b>. <u className="cursor-pointer">Dismiss</u></span>
                            <span className="mx-16">Get 15% off your first purchase when you sign up for our newsletter. <u className="cursor-pointer">Dismiss</u></span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Secondary Bar */}
            <div className="border-b border-gray-200 py-4">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-gray-600">
                    <span className="underline decoration-yellow-400 decoration-2 underline-offset-2">One Day Delivery Available</span>
                    <div className="flex items-center gap-6">
                        <span className="cursor-pointer">Login / <span className="text-[black]">Register</span></span>
                        <div className="flex items-center gap-3 text-xl text-gray-800">
                            <AiOutlineFacebook className="cursor-pointer hover:text-[#AE3F4F]" />
                            <AiOutlineTwitter className="cursor-pointer hover:text-[#AE3F4F]" />
                            <AiOutlineInstagram className="cursor-pointer hover:text-[#AE3F4F]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="relative bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

                    {/* Logo */}
                    <div className=""><a href="#"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=250" className="w-32" alt="" /></a></div>

                    {/* Menu */}
                    <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
                        <li className="text-red-500 cursor-pointer">Home</li>

                        {/* Shop with Mega Menu */}
                        <li
                            className="cursor-pointer hover:text-red-500 flex items-center gap-1"
                            onMouseEnter={() => setShopOpen(true)}
                            onMouseLeave={() => setShopOpen(false)}
                        >
                            Shop <span className="text-[10px]">▼</span>

                            {shopOpen && (
                                <div className="absolute top-full left-0 w-full bg-white shadow-xl z-50 p-8 grid grid-cols-5 gap-6 border-t">

                                    <div>
                                        <h4 className="font-bold mb-3">Layout</h4>
                                        <ul className="space-y-2 text-sm text-gray-500 font-normal">
                                            <li className="hover:text-red-500 cursor-pointer">1. Filter Sidebar</li>
                                            <li className="hover:text-red-500 cursor-pointer">2. Filter Top</li>
                                            <li className="hover:text-red-500 cursor-pointer">3. Filter Drawer</li>
                                            <li className="hover:text-red-500 cursor-pointer">4. Without Filter</li>
                                            <li className="hover:text-red-500 cursor-pointer">5. Collection - 2 columns</li>
                                            <li className="hover:text-red-500 cursor-pointer">6. Collection - 3 columns</li>
                                            <li className="hover:text-red-500 cursor-pointer">7. Collection - 4 columns</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold mb-3">Features</h4>
                                        <ul className="space-y-2 text-sm text-gray-500 font-normal">
                                            <li className="hover:text-red-500 cursor-pointer">Banner Image</li>
                                            <li className="hover:text-red-500 cursor-pointer">Banner No Image</li>
                                            <li className="hover:text-red-500 cursor-pointer">Banner Split</li>
                                            <li className="hover:text-red-500 cursor-pointer">Collection list</li>
                                            <li className="hover:text-red-500 cursor-pointer">Sub Collection</li>
                                            <li className="hover:text-red-500 cursor-pointer">Pagination</li>
                                            <li className="hover:text-red-500 cursor-pointer">Infinity</li>
                                            <li className="hover:text-red-500 cursor-pointer">Load More</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold mb-3">Hover Style</h4>
                                        <ul className="space-y-2 text-sm text-gray-500 font-normal">
                                            <li className="hover:text-red-500 cursor-pointer">Hover Style 1</li>
                                            <li className="hover:text-red-500 cursor-pointer">Hover Style 2</li>
                                            <li className="hover:text-red-500 cursor-pointer">Hover Style 3</li>
                                            <li className="hover:text-red-500 cursor-pointer">Hover Style 4</li>
                                            <li className="hover:text-red-500 cursor-pointer">Hover Style 5</li>
                                            <li className="hover:text-red-500 cursor-pointer">Hover Style 6</li>
                                            <li className="hover:text-red-500 cursor-pointer">Hover Style 7</li>
                                            <li className="hover:text-red-500 cursor-pointer">Hover Style 8</li>
                                        </ul>
                                    </div>

                                    <div className="col-span-2 flex gap-4">
                                        <div className="text-center flex-1">
                                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Athletic" className="h-40 w-full object-cover rounded" />
                                            <p className="mt-2 font-bold text-sm">Athletic Footwear</p>
                                            <p className="text-xs text-gray-400">8 products</p>
                                        </div>
                                        <div className="text-center flex-1">
                                            <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772" alt="Boots" className="h-40 w-full object-cover rounded" />
                                            <p className="mt-2 font-bold text-sm">Boots for Every Occasion</p>
                                            <p className="text-xs text-gray-400">8 products</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li className="cursor-pointer hover:text-red-500 flex items-center gap-1">Product <span className="text-[10px]">▼</span></li>
                        <li className="cursor-pointer hover:text-red-500 flex items-center gap-1">Blog <span className="text-[10px]">▼</span></li>
                        <li className="cursor-pointer hover:text-red-500 flex items-center gap-1">Pages <span className="text-[10px]">▼</span></li>
                        <li className="relative cursor-pointer hover:text-red-500">
                            Buy Now
                            <span className="absolute -top-3 -right-7 bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded">Sale</span>
                        </li>
                    </ul>

                    {/* Icons */}
                    <div className="flex items-center gap-5 text-xl text-gray-700">
                        <AiOutlineSearch className="cursor-pointer hover:text-red-500" />
                        <AiOutlineUser className="cursor-pointer hover:text-red-500" />
                        <div className="relative">
                            <AiOutlineHeart className="cursor-pointer hover:text-red-500" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-red-500">
                            <AiOutlineShopping />
                            <span className="text-sm ml-1">(0)</span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
