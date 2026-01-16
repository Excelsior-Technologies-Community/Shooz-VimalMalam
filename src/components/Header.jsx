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
    const [productOpen, setProductOpen] = useState(false);
    const [blogOpen, setBlogOpen] = useState(false);

    // Close all menus
    const closeAllMenus = () => {
        setShopOpen(false);
        setProductOpen(false);
        setBlogOpen(false);
    };

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
            <nav className="relative bg-white shadow-sm" onMouseLeave={closeAllMenus}>
                <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

                    {/* Logo */}
                    <div><a href="#"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=250" className="w-32" alt="" /></a></div>

                    {/* Menu */}
                    <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
                        <li className="text-[#AE3F4F] cursor-pointer">Home</li>

                        {/* Shop with Mega Menu */}
                        <li
                            className="cursor-pointer hover:text-[#AE3F4F] flex items-center gap-1"
                            onMouseEnter={() => { setShopOpen(true); setProductOpen(false); setBlogOpen(false); }}
                        >
                            Shop <span className="text-[10px]">▼</span>
                        </li>

                        {/* Product with Mega Menu */}
                        <li
                            className="cursor-pointer hover:text-[#AE3F4F] flex items-center gap-1"
                            onMouseEnter={() => { setProductOpen(true); setShopOpen(false); setBlogOpen(false); }}
                        >
                            Product <span className="text-[10px]">▼</span>
                        </li>

                        <li
                            className="cursor-pointer hover:text-[#AE3F4F] flex items-center gap-1"
                            onMouseEnter={() => { setBlogOpen(true); setShopOpen(false); setProductOpen(false); }}
                        >
                            Blog <span className="text-[10px]">▼</span>
                        </li>
                        <li className="cursor-pointer hover:text-[#AE3F4F] flex items-center gap-1">Pages <span className="text-[10px]">▼</span></li>
                        <li className="relative cursor-pointer hover:text-[#AE3F4F]">
                            Buy Now
                            <span className="absolute -top-3 -right-7 bg-green-500 text-white text-[9px] px-1.5 py-0.5 rounded">Sale</span>
                        </li>
                    </ul>

                    {/* Icons */}
                    <div className="flex items-center gap-5 text-xl text-gray-700">
                        <AiOutlineSearch className="cursor-pointer hover:text-[#AE3F4F]" />
                        <AiOutlineUser className="cursor-pointer hover:text-[#AE3F4F]" />
                        <div className="relative">
                            <AiOutlineHeart className="cursor-pointer hover:text-[#AE3F4F]" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-[#AE3F4F]">
                            <AiOutlineShopping />
                            <span className="text-sm ml-1">(0)</span>
                        </div>
                    </div>
                </div>

                {/* Shop Mega Menu */}
                {shopOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-xl z-50 border-t">
                        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-5 gap-6">

                            <div>
                                <h4 className="font-bold mb-3">Layout</h4>
                                <ul className="space-y-2 text-sm text-gray-500 font-normal">
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">1. Filter Sidebar</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">2. Filter Top</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">3. Filter Drawer</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">4. Without Filter</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">5. Collection - 2 columns</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">6. Collection - 3 columns</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">7. Collection - 4 columns</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-3">Features</h4>
                                <ul className="space-y-2 text-sm text-gray-500 font-normal">
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Banner Image</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Banner No Image</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Banner Split</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Collection list</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Sub Collection</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Pagination</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Infinity</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Load More</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-3">Hover Style</h4>
                                <ul className="space-y-2 text-sm text-gray-500 font-normal">
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Hover Style 1</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Hover Style 2</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Hover Style 3</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Hover Style 4</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Hover Style 5</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Hover Style 6</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Hover Style 7</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Hover Style 8</li>
                                </ul>
                            </div>

                            <div className="col-span-2 flex gap-4">
                                <div className="text-center flex-1">
                                    <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=360" alt="Athletic" className="h-52 w-full object-cover rounded" />
                                    <p className="mt-2 font-bold text-sm">Athletic Footwear</p>
                                    <p className="text-xs text-gray-400">8 products</p>
                                </div>
                                <div className="text-center flex-1">
                                    <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=360" alt="Boots" className="h-52 w-full object-cover rounded" />
                                    <p className="mt-2 font-bold text-sm">Boots for Every Occasion</p>
                                    <p className="text-xs text-gray-400">8 products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Product Mega Menu */}
                {productOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-xl z-50 border-t">
                        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-5 gap-6">

                            <div>
                                <h4 className="font-bold mb-3">Product Layouts</h4>
                                <ul className="space-y-2 text-sm text-gray-500 font-normal">
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">1. Thumbnails - bottom</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">2. Thumbnails - left</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">3. Thumbnails - right</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">4. Without Thumbnails</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">5. List - stacked</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">6. List - grid</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">7. Collage - style 1</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">8. Collage - style 2</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-3">Product Type</h4>
                                <ul className="space-y-2 text-sm text-gray-500 font-normal">
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Simple Product</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Variable Product</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">With Video</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Sold Out - Coming</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-3">List Featured 1</h4>
                                <ul className="space-y-2 text-sm text-gray-500 font-normal">
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Sticky ATC</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Frequently Bought Together</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Count Down</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Cross Selling</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Upsell Popup</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Low Stock Alert</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Pickup Store</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-3">List Featured 2</h4>
                                <ul className="space-y-2 text-sm text-gray-500 font-normal">
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Dropdown Variant</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Swatch Variant Color</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Swatch Variant Image</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Variant Image Square</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Size Guide</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Description Accordion</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Description Tab Center</li>
                                </ul>
                            </div>

                            <div>
                                <div className="group bg-gray-100 rounded-lg p-4">
                                    {/* Image with hover swap */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src="//qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=180 180w, //qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=360 360w, //qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=540 540w, //qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720 720w"
                                            alt="Hiking Boots"
                                            className="w-full h-40 object-contain rounded transition-opacity duration-300 group-hover:opacity-0"
                                        />
                                        <img
                                            src="//qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=180 180w, //qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=360 360w, //qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=540 540w, //qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720 720w"
                                            alt="Hiking Boots Hover"
                                            className="w-full h-40 object-contain rounded absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <p className="mt-3 text-sm text-gray-500">$25.00</p>
                                    <p className="font-bold text-sm">Waterproof Hiking Boots</p>
                                    <p className="text-xs text-gray-400">TrailGear</p>

                                    {/* Action Buttons */}
                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                                        <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#AE3F4F] cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            ADD TO CART
                                        </button>
                                        <div className="flex items-center gap-3 text-gray-500">
                                            <button className="hover:text-[#AE3F4F] cursor-pointer" title="Quick View">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </button>
                                            <button className="hover:text-[#AE3F4F] cursor-pointer" title="Add to Wishlist">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </button>
                                            <button className="hover:text-[#AE3F4F] cursor-pointer" title="Compare">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Blog Mega Menu */}
                {blogOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-xl z-50 border-t">
                        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-4 gap-6">

                            <div>
                                <h4 className="font-bold mb-3">List Layout</h4>
                                <ul className="space-y-2 text-sm text-gray-500 font-normal">
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">List Left Sidebar</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">List Right Sidebar</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">List Item Basic</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">List Item Overlay</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">List Item Box</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">List Item Classic</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">List Item Classic Box</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-3">Grid Layout</h4>
                                <ul className="space-y-2 text-sm text-gray-500 font-normal">
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Grid Left Sidebar</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Grid Right Sidebar</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Grid Item Basic</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Grid Item Overlay</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Grid Item Box</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Grid Item Classic</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-3">Article</h4>
                                <ul className="space-y-2 text-sm text-gray-500 font-normal">
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Title in image</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Title after image</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Title before image</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Left Sidebar</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Right Sidebar</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Title Center</li>
                                    <li className="hover:text-[#AE3F4F] cursor-pointer">Article Video</li>
                                </ul>
                            </div>

                            <div>
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src="https://qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=540"
                                        alt="Blog Promo"
                                        className="w-full h-44 object-cover rounded-lg"
                                    />
                                    <div className="mt-4">
                                        <h4 className="font-bold text-lg">Enjoy a 50% Price Slash</h4>
                                        <p className="text-sm text-gray-500 mt-1">Revamp Your Wardrobe at Jaw-Dropping Prices.</p>
                                        <a href="#" className="inline-block mt-3 text-sm font-semibold text-gray-800 underline underline-offset-4 hover:text-[#AE3F4F]">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
