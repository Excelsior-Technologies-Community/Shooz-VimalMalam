import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FiArrowRight } from 'react-icons/fi';
import { FaRegComment } from "react-icons/fa";
import { FiShoppingCart, FiEye, FiHeart } from 'react-icons/fi';
import { TbArrowsExchange2 } from 'react-icons/tb';
import Header from './Header.jsx';

// Hero slider data
const heroSlides = [
    {
        id: 1,
        subtitle: 'ELEVATE YOUR LOOK',
        title: 'Find The Perfect Pair\nOf Shoes To Complete.',
        description: 'Explore our wide range of styles, colors, and materials to find the perfect shoes for any occasion.',
        image: 'https://qx-shooz.myshopify.com/cdn/shop/files/banner-1.png?v=1731045553',
    },
    {
        id: 2,
        subtitle: 'COMFORT MEETS FASHION',
        title: 'Discover Shoes That Look\nGreat And Feel Even Better.',
        description: 'Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.',
        image: 'https://qx-shooz.myshopify.com/cdn/shop/files/banner-2.png?v=1731045552',
    },
    {
        id: 3,
        subtitle: 'STEP INTO STYLE',
        title: 'Discover The Latest\nTrends In Footwear',
        description: 'From classic sneakers to trendy boots, our collection has something for everyone.',
        image: 'https://qx-shooz.myshopify.com/cdn/shop/files/banner-3.png?v=1731045552',
    },
];

// Sneakers & Kicks product data
const sneakersData = {
    featured: [
        {
            id: 1,
            name: 'Classic White Tennis Sneakers',
            brand: 'SportyFeet',
            price: 25.00,
            image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720 720w',
            image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720 720w',
        },
        {
            id: 2,
            name: 'Waterproof Hiking Boots',
            brand: 'TrailGear',
            price: 25.00,
            image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720 720w',
            image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720 720w',
            hasColorOptions: true,
        },
        {
            id: 3,
            name: 'Classic Leather Sneakers',
            brand: 'UrbanStep',
            price: 21.00,
            image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720 720w',
            image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720 720w',
        },
        {
            id: 4,
            name: 'High-Top Canvas Sneakers',
            brand: 'TrendyFeet',
            price: 25.00,
            image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720 720w',
            image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720 720w',
        },
    ],
    newArrivals: [
        {
            id: 5,
            name: 'Urban Runner Pro',
            brand: 'SpeedStep',
            price: 35.00,
            image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720 720w',
            image2: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=400&fit=crop',
        },
        {
            id: 6,
            name: 'Comfy Slip-On Loafers',
            brand: 'EasyWalk',
            price: 28.00,
            image1: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop',
            image2: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop',
        },
        {
            id: 7,
            name: 'Sport Flex Running Shoes',
            brand: 'AthletePro',
            price: 32.00,
            image1: 'https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=400&h=400&fit=crop',
            image2: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop',
        },
        {
            id: 8,
            name: 'Classic Oxford Shoes',
            brand: 'FormalFit',
            price: 40.00,
            image1: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400&h=400&fit=crop',
            image2: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop',
        },
    ],
    bestSeller: [
        {
            id: 9,
            name: 'Premium Leather Boots',
            brand: 'BootMaster',
            price: 45.00,
            image1: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop',
            image2: 'https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=400&h=400&fit=crop',
        },
        {
            id: 10,
            name: 'Everyday Casual Sneakers',
            brand: 'DailyWear',
            price: 22.00,
            image1: 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=400&h=400&fit=crop',
            image2: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop',
        },
        {
            id: 11,
            name: 'Trail Blazer Hiking Shoes',
            brand: 'OutdoorPro',
            price: 38.00,
            image1: 'https://images.unsplash.com/photo-1582897085656-c636d006a246?w=400&h=400&fit=crop',
            image2: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=400&h=400&fit=crop',
        },
        {
            id: 12,
            name: 'Modern Skate Shoes',
            brand: 'StreetStyle',
            price: 30.00,
            image1: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=400&h=400&fit=crop',
            image2: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=400&fit=crop',
        },
    ],
};

const tabs = [
    { id: 'featured', label: 'FEATURED' },
    { id: 'newArrivals', label: 'NEW ARRIVALS' },
    { id: 'bestSeller', label: 'BEST SELLER' },
];

const Index = () => {
    const [activeTab, setActiveTab] = useState('featured');

    return (
        <>
            <Header />

            {/* Hero Section with Swiper */}
            <section className="relative">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet !w-2 !h-2 !bg-gray-600 !opacity-100',
                        bulletActiveClass: '!w-6 !rounded-full !bg-[#C44D5E]',
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="hero-swiper"
                >
                    {heroSlides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="relative h-[650px] md:h-[700px] lg:h-[750px] bg-cover bg-center flex items-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/10"></div>

                                {/* Content */}
                                {/* Outer Container: Using flex and justify-end to push content to the right */}
                                <div className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex items-center justify-end ${slide.id === 3 ? 'justify-start' : 'justify-end'}`}>

                                    {/* Inner Content Box: Text-left alignment but positioned on the right side */}
                                    <div className="max-w-xl text-left">

                                        {/* Subtitle: Increased uppercase and tracking */}
                                        <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block opacity-90">
                                            {slide.subtitle}
                                        </span>

                                        {/* Title: Larger sizing to match the screenshot impact */}
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                                            {slide.title}
                                        </h1>

                                        {/* Description */}
                                        <p className="text-gray-100 text-sm md:text-lg mb-8 max-w-md leading-relaxed opacity-90">
                                            {slide.description}
                                        </p>

                                        {/* CTA Button: Adjusted padding and font weight */}
                                        <button className="inline-flex items-center gap-2 bg-[#C44D5E] hover:bg-[black] text-white text-xs md:text-sm font-bold px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer uppercase tracking-wider">
                                            SHOP NOW
                                            <FiArrowRight className="text-xl" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination Styling */}
                <style>{`
                    .hero-swiper .swiper-pagination {
                        bottom: 20px !important;
                    }
                    .hero-swiper .swiper-pagination-bullet {
                        transition: all 0.3s ease;
                    }
                `}</style>
            </section >

            {/* Collections Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Men Collections Card */}
                        <div className="group relative h-[280px] md:h-[320px] rounded-md overflow-hidden cursor-pointer">
                            {/* Background Image with Zoom Effect */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-5000 ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url(//qx-shooz.myshopify.com/cdn/shop/files/grid-three-1.png?v=1731045511&width=1920)` }}
                            ></div>
                            {/* Content */}
                            <div className="relative p-6 md:p-8 flex flex-col justify-center z-10 h-full">
                                <span className="text-gray-600 text-[10px] font-semibold uppercase tracking-[0.2em] mb-2">
                                    TRENDING
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                    Men<br />Collections
                                </h3>
                                <a href="#" className="text-[#C44D5E] text-xl font-bold uppercase tracking-wider underline underline-offset-4 hover:text-[#a83d4c] transition-colors">
                                    SHOP NOW
                                </a>
                            </div>
                        </div>

                        {/* Women Collections Card */}
                        <div className="group relative h-[280px] md:h-[320px] rounded-md overflow-hidden cursor-pointer">
                            {/* Background Image with Zoom Effect */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-5000 ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url(//qx-shooz.myshopify.com/cdn/shop/files/grid-three-3.png?v=1731045510&width=1920)` }}
                            ></div>
                            {/* Content */}
                            <div className="relative p-6 md:p-8 flex flex-col justify-center z-10 h-full">
                                <span className="text-gray-600 text-[10px] font-semibold uppercase tracking-[0.2em] mb-2">
                                    LATEST
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                    Women<br />Collections
                                </h3>
                                <a href="#" className="text-[#C44D5E] text-xl font-bold uppercase tracking-wider underline underline-offset-4 hover:text-[#a83d4c] transition-colors">
                                    SHOP NOW
                                </a>
                            </div>
                        </div>

                        {/* Kid Collections Card */}
                        <div className="group relative h-[280px] md:h-[320px] rounded-md overflow-hidden cursor-pointer">
                            {/* Background Image with Zoom Effect */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-5000 ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url(//qx-shooz.myshopify.com/cdn/shop/files/grid-three-2.png?v=1731045516&width=1920)` }}
                            ></div>
                            {/* Content */}
                            <div className="relative p-6 md:p-8 flex flex-col justify-center z-10 h-full">
                                <span className="text-gray-600 text-[10px] font-semibold uppercase tracking-[0.2em] mb-2">
                                    COMFORT
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                    Kid<br />Collections
                                </h3>
                                <a href="#" className="text-[#C44D5E] text-xl font-bold uppercase tracking-wider underline underline-offset-4 hover:text-[#a83d4c] transition-colors">
                                    SHOP NOW
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Sneakers & Kicks Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <span className="text-gray-500 text-[12px] font-medium uppercase tracking-[0.3em] mb-3 block">
                            THE LATEST TRENDS IN ATHLETIC FOOTWEAR
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Sneakers & Kicks
                        </h2>

                        {/* Tabs */}
                        <div className="flex justify-center gap-6 md:gap-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`text-xs md:text-sm font-semibold uppercase tracking-wider pb-2 border-b-2 transition-all duration-300 cursor-pointer ${activeTab === tab.id
                                        ? 'text-gray-900 border-gray-900'
                                        : 'text-gray-500 border-transparent hover:text-gray-700'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sneakersData[activeTab].map((product) => (
                            <div key={product.id} className="group cursor-pointer">
                                {/* Product Card */}
                                <div className="relative bg-gray-50 rounded-md overflow-hidden mb-4">
                                    {/* Image Container with Hover Effect */}
                                    <div className="relative aspect-square overflow-hidden">
                                        {/* Primary Image */}
                                        <img
                                            src={product.image1}
                                            alt={product.name}
                                            className="absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-500 group-hover:opacity-0"
                                        />
                                        {/* Secondary Image (shown on hover) */}
                                        <img
                                            src={product.image2}
                                            alt={product.name}
                                            className="absolute inset-0 w-full h-full object-contain p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                        />
                                    </div>

                                    {/* Action Buttons - Slide up from bottom on hover */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                        <div className="flex items-center justify-between px-4 py-3">
                                            {/* Add to Cart Button */}
                                            <button className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-800 hover:text-[#C44D5E] transition-colors cursor-pointer">
                                                <FiShoppingCart className="text-base" />
                                                ADD TO CART
                                            </button>

                                            {/* Icon Buttons */}
                                            <div className="flex items-center gap-3">
                                                <button className="text-gray-600 hover:text-[#C44D5E] transition-colors cursor-pointer" title="Quick View">
                                                    <FiEye className="text-lg" />
                                                </button>
                                                <button className="text-gray-600 hover:text-[#C44D5E] transition-colors cursor-pointer" title="Add to Wishlist">
                                                    <FiHeart className="text-lg" />
                                                </button>
                                                <button className="text-gray-600 hover:text-[#C44D5E] transition-colors cursor-pointer" title="Compare">
                                                    <TbArrowsExchange2 className="text-lg" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Color Options (if available) */}
                                    {product.hasColorOptions && (
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-1.5 transition-all duration-300 bottom-4 group-hover:bottom-14 z-10">
                                            <button className="w-3 h-3 rounded-full bg-gray-900 border border-gray-300 cursor-pointer hover:scale-125 transition-transform"></button>
                                            <button className="w-3 h-3 rounded-full bg-gray-400 border border-gray-300 cursor-pointer hover:scale-125 transition-transform"></button>
                                            <button className="w-3 h-3 rounded-full bg-gray-600 border border-gray-300 cursor-pointer hover:scale-125 transition-transform"></button>
                                        </div>
                                    )}
                                </div>

                                {/* Product Info */}
                                <div className="text-left">
                                    <span className="text-gray-900 text-sm font-medium mb-1 block">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <h3 className="text-gray-900 text-base font-semibold mb-1 group-hover:text-[#C44D5E] transition-colors">
                                        {product.name}
                                    </h3>
                                    <span className="text-gray-500 text-sm">
                                        {product.brand}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Banner Section */}
            <section className="relative">
                {/* Background Image */}
                <div
                    className="h-[400px] md:h-[600px] bg-cover bg-center flex items-center"
                    style={{ backgroundImage: `url(https://qx-shooz.myshopify.com/cdn/shop/files/wide-banner.png?v=1731045552)` }}
                >
                    {/* Content - Right Aligned */}
                    <div className="max-w-7xl mx-auto px-6 w-full">
                        <div className="max-w-2xl mx-auto md:ml-auto md:mr-0 text-center md:text-right">
                            <span className="text-gray-600 text-[15px] font-semibold uppercase tracking-[0.3em] mb-3 block">
                                Comfort Meets Fashion
                            </span>
                            <h2 className="text-3xl md:text-[45px] font-bold text-gray-900 leading-tight mb-4">
                                Discover shoes that look great <br /> and feel even better
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base mb-6">
                                Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.
                            </p>
                            <button className="inline-flex items-center gap-2 bg-[#C44D5E] hover:bg-black text-white text-xs font-bold px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer uppercase tracking-wider">
                                Shop Now
                                <FiArrowRight className="text-lg" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Marquee Strip */}
                <div className="bg-[#6B5B4F] py-3 overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center gap-8 mx-8">
                                <span className="text-[#E8D5B7] text-sm font-medium">Buy a pair of shoes, get the second pair 50% off. Use code BOGO50</span>
                                <span className="w-2 h-2 bg-[#C44D5E] rounded-full"></span>
                                <span className="text-white text-sm font-medium">Enjoy 20% off your entire order with the code SHOEFRESH20</span>
                                <span className="w-2 h-2 bg-[#C44D5E] rounded-full"></span>
                                <span className="text-[#8BC34A] text-sm font-medium">Get 15% off your first purchase when you sign up for our newsletter. Use code NEWS15</span>
                                <span className="w-2 h-2 bg-[#C44D5E] rounded-full"></span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Marquee Animation */}
                <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.33%); }
                    }
                    .animate-marquee {
                        animation: marquee 20s linear infinite;
                    }
                `}</style>
            </section>

            {/* Boots & Booties Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <span className="text-gray-500 text-[12px] font-medium uppercase tracking-[0.3em] mb-3 block">
                            STYLISH AND COMFORTABLE FOR EVERY SEASON
                        </span>
                        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">
                            Boots & Booties
                        </h2>
                        <p className="text-gray-500 text-sm max-w-md mx-auto">
                            Check out our collection of the top New Products<br />
                            that encourage conversion.
                        </p>
                    </div>

                    {/* Category Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Athletic Footwear Card */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-md mb-4">
                                <div className="aspect-square min-h-[320px] overflow-hidden">
                                    <img
                                        src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=360"
                                        alt="Athletic Footwear"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                {/* Button at bottom */}
                                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                                    <button className="bg-white text-gray-900 text-xl font-semibold px-8 py-3  whitespace-nowrap transition-all duration-300 group-hover:bg-[#AE3F4F] group-hover:text-white cursor-pointer">
                                        Athletic Footwear <span className="ml-1">8</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Luxury Leather Shoes Card */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-md mb-4">
                                <div className="aspect-square min-h-[320px] overflow-hidden">
                                    <img
                                        src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=360"
                                        alt="Luxury Leather Shoes"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                {/* Button at bottom */}
                                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                                    <button className="bg-white text-gray-900 text-xl font-semibold px-8 py-3  whitespace-nowrap transition-all duration-300 group-hover:bg-[#AE3F4F] group-hover:text-white cursor-pointer">
                                        Luxury Leather Shoes <span className="ml-1">8</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sustainable Footwear Card */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-md mb-4">
                                <div className="aspect-square min-h-[320px] overflow-hidden">
                                    <img
                                        src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-1.png?v=1731657959&width=360"
                                        alt="Sustainable Footwear"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                {/* Button at bottom */}
                                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                                    <button className="bg-white text-gray-900 text-xl font-semibold px-8 py-3  whitespace-nowrap transition-all duration-300 group-hover:bg-[#AE3F4F] group-hover:text-white cursor-pointer">
                                        Sustainable Footwear <span className="ml-1">8</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sandals & Slides Card */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-md mb-4">
                                <div className="aspect-square min-h-[320px] overflow-hidden">
                                    <img
                                        src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=360"
                                        alt="Sandals & Slides"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                {/* Button at bottom */}
                                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                                    <button className="bg-white text-gray-900 text-xl font-semibold px-8 py-3 whitespace-nowrap transition-all duration-300 group-hover:bg-[#AE3F4F] group-hover:text-white cursor-pointer">
                                        Sandals & Slides <span className="ml-1">8</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeless styles for everyday Section */}
            <section className='py-12 md:py-16 lg:py-20 bg-[#333333]'>
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <span className="text-white text-[12px] font-medium uppercase tracking-[0.3em] mb-3 block">
                            FASHION SNEAKERS
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Timeless styles for everyday wear
                        </h2>
                        <p className="text-white text-sm max-w-md mx-auto">
                            High-performance footwear for sports and <br /> workouts
                        </p>
                    </div>

                    {/* Top Cards */}
                    <div className='flex flex-col md:flex-row gap-6'>
                        {/* First Card */}
                        <div className='group relative h-72 overflow-hidden cursor-pointer'>
                            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src="https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-1.png?v=1731045532&width=1920" alt="" />
                            <div className='absolute bottom-12 left-5'>
                                <p className='text-white text-[9px] font-medium uppercase tracking-[0.3em] mb-3 block'>COMFORT MEETS FASHION</p>
                                <h3 className='text-white text-2xl font-bold mb-3'>Discover shoes <br /> that look great</h3>
                                <a href="#" className='text-white text-[12px] font-medium uppercase tracking-[0.3em] mb-3 block'>Shop Now</a>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className='group relative h-72 overflow-hidden cursor-pointer'>
                            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src="https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-2.png?v=1731045532&width=1920" alt="" />
                            <div className='absolute bottom-12 left-5'>
                                <p className='text-white text-[9px] font-medium uppercase tracking-[0.3em] mb-3 block'>ELEVATE YOUR LOOK</p>
                                <h3 className='text-white text-2xl font-bold mb-3'>Find the perfectpair of <br /> Shoes</h3>
                                <a href="#" className='text-white text-[12px] font-medium uppercase tracking-[0.3em] mb-3 block'>Shop Now</a>
                            </div>
                        </div>

                        {/* Third Card */}
                        <div className='group relative h-72 overflow-hidden cursor-pointer'>
                            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src="https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-3.png?v=1731045526&width=1920" alt="" />
                            <div className='absolute bottom-12 left-5'>
                                <p className='text-white text-[9px] font-medium uppercase tracking-[0.3em] mb-3 block'>STEP INTO STYLE</p>
                                <h3 className='text-white text-2xl font-bold mb-3'>The latest trends in <br /> footwear</h3>
                                <a href="#" className='text-white text-[12px] font-medium uppercase tracking-[0.3em] mb-3 block'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Card */}
                    <div className='flex flex-col justify-between mt-8 md:flex-row gap-6'>
                        {/* First Card */}
                        <div className='group relative h-80 overflow-hidden cursor-pointer'>
                            <img className='w-150 h-full object-cover transition-transform duration-500 group-hover:scale-110' src="https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-4.png?v=1731045517&width=1920" alt="" />
                            <div className='absolute bottom-12 left-5'>
                                <p className='text-white text-[9px] font-medium uppercase tracking-[0.3em] mb-3 block'>SHOP BY BRAND</p>
                                <h3 className='text-white text-3xl font-bold mb-3'>Find your favorites <br /> brands and styles</h3>
                                <a href="#" className='text-white text-[12px] font-medium uppercase tracking-[0.3em] mb-3 block'>Shop Now</a>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className='group relative h-80 overflow-hidden cursor-pointer'>
                            <img className='w-150 h-full object-cover transition-transform duration-500 group-hover:scale-110' src="https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-5.png?v=1731045518&width=1920" alt="" />
                            <div className='absolute bottom-12 left-5'>
                                <p className='text-white text-[9px] font-medium uppercase tracking-[0.3em] mb-3 block'>SALE AND CLEARANCE</p>
                                <h3 className='text-white text-3xl font-bold mb-3'>Shop our latest deals <br /> and discounts</h3>
                                <a href="#" className='text-white text-[12px] font-medium uppercase tracking-[0.3em] mb-3 block'>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Huge discounts Section */}
            <section className='py-12 md:py-16 lg:py-20 bg-white'>
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <span className="text-gray-500 text-[10px] font-medium uppercase tracking-[0.3em] mb-3 block">
                            SEASONS'S END SALE
                        </span>
                        <h2 className="text-3xl md:text-5xl font-medium text-black mb-4">
                            Huge discounts on last season's styles
                        </h2>
                        <p className="text-gray-500 text-sm max-w-md mx-auto">
                            Himenaeos nascetur tristique consequat mus ad. <br /> Accumsan fringilla in laoreet id bibendum et.
                        </p>
                    </div>

                    {/* Column 1 */}
                    <div className="flex flex-col md:flex-row justify-evenly gap-8 mt-8">
                        {/* Card 1 */}
                        <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=150" className="w-18 h-18 object-contain" />
                            <div>
                                <h3 className="font-medium">Classic White Tennis Sneakers</h3>
                                <p className="text-sm text-gray-500">$25.00</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=150" className="w-18 h-18 object-contain" />
                            <div>
                                <h3 className="font-medium">Classic White Tennis Sneakers</h3>
                                <p className="text-sm text-gray-500">$25.00</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=150" className="w-18 h-18 object-contain" />
                            <div>
                                <h3 className="font-medium">Classic White Tennis Sneakers</h3>
                                <p className="text-sm text-gray-500">$25.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col md:flex-row justify-evenly gap-8 mt-8">
                        {/* Card 1 */}
                        <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=150" className="w-18 h-18 object-contain" />
                            <div>
                                <h3 className="font-medium">Waterproof Hiking Boots</h3>
                                <p className="text-sm text-gray-500">$25.00</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=150" className="w-18 h-18 object-contain" />
                            <div>
                                <h3 className="font-medium">Waterproof Hiking Boots</h3>
                                <p className="text-sm text-gray-500">$25.00</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=150" className="w-18 h-18 object-contain" />
                            <div>
                                <h3 className="font-medium">Waterproof Hiking Boots</h3>
                                <p className="text-sm text-gray-500">$25.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col md:flex-row justify-evenly gap-8 mt-8">
                        {/* Card 1 */}
                        <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=150" className="w-18 h-18 object-contain" />
                            <div>
                                <h3 className="font-medium">Classic Leather Sneakers</h3>
                                <p className="text-sm text-gray-500">$21.00</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=150" className="w-18 h-18 object-contain" />
                            <div>
                                <h3 className="font-medium">Classic Leather Sneakers</h3>
                                <p className="text-sm text-gray-500">$21.00</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=150" className="w-18 h-18 object-contain" />
                            <div>
                                <h3 className="font-medium">Classic Leather Sneakers</h3>
                                <p className="text-sm text-gray-500">$21.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Save Big Section */}
            <section className='py-12 md:py-16 lg:py-20 bg-white'>
                <div className='flex flex-col md:flex-row max-w-7xl mx-auto px-6 gap-8'>

                    {/* Text Content - First on mobile, left on desktop */}
                    <div className='max-w-2xl flex-col md:text-left text-center order-1 md:order-1'>
                        <span className="text-black text-[10px] font-medium uppercase tracking-[0.3em] mb-5 block">
                            OUR MOST POPULAR STYLES
                        </span>
                        <h2 className="text-3xl md:text-5xl font-medium text-black mb-5">
                            Save big on shoes <br />
                            from last season
                        </h2>
                        <p className="text-black text-sm mt-5">
                            Morbi natoque id finibus natoque sapien turpis elementum maximus. Sociosqu auctor a urna consequat laoreet nisi accumsan magna. Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex est habitant lacus sagittis vitae.
                        </p>
                        <p className="text-black text-sm mt-5">
                            Molestie dolor mus vitae penatibus sed lectus convallis ut neque. Leo elementum euismod penatibus cras sociosqu aliquet tellus.
                        </p>
                        <button className="mt-6 inline-flex items-center gap-2 bg-[#C44D5E] hover:bg-black text-white text-xs font-bold px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer uppercase tracking-wider">
                            Shop Now
                            <FiArrowRight className="text-lg" />
                        </button>
                    </div>

                    {/* Image - Second on mobile, right on desktop */}
                    <div className="flex-1 order-2 md:order-2">
                        <img src="https://qx-shooz.myshopify.com/cdn/shop/files/video-pic.png?v=1731407733&width=720" alt="Save Big" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Discover Our Stores: Your Local Shoe Haven Div */}
            <div className="w-full py-12 md:h-20 md:py-0 flex items-center justify-center px-6 sm:px-12 bg-linear-to-r from-[#7b6cb8] via-[#7a4c8e] to-[#b4444a]">
                <div className='flex flex-col md:flex-row items-center justify-center md:justify-between max-w-7xl mx-auto px-6 gap-6 md:gap-8 w-full text-center md:text-left'>
                    <p className="text-white text-sm sm:text-base font-medium">
                        Discover Our Stores: Your<br className="md:hidden" /> Local Shoe Haven
                    </p>
                    <button className="bg-[#2f3c7e] hover:bg-[#24306b] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded">
                        FIND STORE
                    </button>
                </div>
            </div>

            {/* Customer Feedback Section */}
            <section className="py-12 md:py-16 lg:py-15 bg-[#F9F9F9]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                            Customer Feedback Highlights
                        </h2>
                        <p className="text-gray-500 text-sm max-w-md mx-auto">
                            Laoreet ridiculus congue magna malesuada <br />
                            phasellus condimentum taciti mus primis.
                        </p>
                    </div>

                    {/* Feedback Cards */}
                    <div className="w-full py-12">
                        {/* ===== DESKTOP VIEW (5 x 2 grid, no slider) ===== */}
                        <div className="hidden md:grid grid-cols-5 gap-6">
                            <div className="flex justify-center p-6"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-1.png?v=1731499378&width=1920" className="h-20" /></div>
                            <div className="flex justify-center p-6"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-3.png?v=1731499378&width=1920" className="h-20" /></div>
                            <div className="flex justify-center p-6"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-5.png?v=1731499378&width=1920" className="h-20" /></div>
                            <div className="flex justify-center p-6"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-7.png?v=1731499378&width=1920" className="h-20" /></div>
                            <div className="flex justify-center p-6"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-9.png?v=1731499378&width=1920" className="h-20" /></div>

                            <div className="flex justify-center p-6"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-2.png?v=1731499378&width=1920" className="h-20" /></div>
                            <div className="flex justify-center p-6"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-11.png?v=1731499961&width=1920" className="h-20" /></div>
                            <div className="flex justify-center p-6"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-6.png?v=1731499378&width=1920" className="h-20" /></div>
                            <div className="flex justify-center p-6"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-8.png?v=1731499379&width=1920" className="h-20" /></div>
                            <div className="flex justify-center p-6"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-10.png?v=1731499378&width=1920" className="h-20" /></div>
                        </div>

                        {/* ===== MOBILE VIEW (2 x 2 grid with swiper) ===== */}
                        <div className="md:hidden">
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={20}
                                pagination={{ clickable: true }}
                                slidesPerView={1}
                            >
                                {/* Slide 1 */}
                                <SwiperSlide>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="flex justify-center p-6 hover:brightness-0 transition"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-1.png?v=1731499378&width=1920" className="h-20" /></div>
                                        <div className="flex justify-center p-6 hover:brightness-0 transition"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-3.png?v=1731499378&width=1920" className="h-20" /></div>
                                        <div className="flex justify-center p-6 hover:brightness-0 transition"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-5.png?v=1731499378&width=1920" className="h-20" /></div>
                                        <div className="flex justify-center p-6 hover:brightness-0 transition"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-7.png?v=1731499378&width=1920" className="h-20" /></div>
                                    </div>
                                </SwiperSlide>

                                {/* Slide 2 */}
                                <SwiperSlide>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="flex justify-center p-6 hover:brightness-0 transition"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-9.png?v=1731499378&width=1920" className="h-20" /></div>
                                        <div className="flex justify-center p-6 hover:brightness-0 transition"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-9.png?v=1731499378&width=1920" className="h-20" /></div>
                                        <div className="flex justify-center p-6 hover:brightness-0 transition"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-9.png?v=1731499378&width=1920" className="h-20" /></div>
                                        <div className="flex justify-center p-6 hover:brightness-0 transition"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-6.png?v=1731499378&width=1920" className="h-20" /></div>
                                    </div>
                                </SwiperSlide>

                                {/* Slide 3 */}
                                <SwiperSlide>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="flex justify-center p-6 hover:brightness-0 transition"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-6.png?v=1731499378&width=1920" className="h-20" /></div>
                                        <div className="flex justify-center p-6 hover:brightness-0 transition"><img src="https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-10.png?v=1731499378&width=1922" className="h-20" /></div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recently Our Post */}
            <section className='py-12 md:py-16 lg:py-12 bg-white'>
                <div className="max-w-7xl mx-auto px-6">

                    {/* Section Header */}
                    <div className="text-left mb-10">
                        <span className="text-gray-500 text-[10px] font-medium uppercase tracking-[0.3em] mb-3 block">
                            FROM THE BLOG
                        </span>
                        <h2 className="text-3xl md:text-5xl font-medium text-black mb-4">
                            Recently Our Posts
                        </h2>
                        <p className="text-gray-500 text-sm max-w-md">
                            Sit amet conse ctetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
                        </p>
                    </div>

                    {/* Blog Post Cards */}
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* LEFT BIG CARD */}
                        <div className="lg:w-1/2 relative overflow-hidden group aspect-video">
                            <img
                                src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png?v=1731500928&width=720"
                                alt="The future of footwear"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                                <div className="flex items-center gap-5 text-sm text-gray-200 mb-2">
                                    <span>Oct 28, 2024</span>
                                    <span className="flex items-center gap-1">
                                        <FaRegComment /> 0 comments
                                    </span>
                                </div>
                                <h2 className="text-white text-2xl font-semibold">
                                    The Future Of Footwear: A Look Ahead
                                </h2>
                            </div>
                        </div>

                        {/* RIGHT SMALL CARDS */}
                        <div className="lg:w-1/2 w-full flex flex-col gap-6">

                            {/* Card 1 */}
                            <div className="flex gap-4 items-center">
                                <div className="w-52 h-30 overflow-hidden group">
                                    <img
                                        src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-1.png?v=1731500921&width=360"
                                        alt=""
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-1">
                                        <span>Oct 28, 2024</span>
                                        <span className="flex items-center gap-1">
                                            <FaRegComment /> 0 comments
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 hover:text-[#AE3F4F] transition">
                                        Eco-Friendly Footwear: Sustainable Style
                                    </h3>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex gap-4 items-center">
                                <div className="w-52 h-30 overflow-hidden group">
                                    <img
                                        src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-6.png?v=1731500962&width=360"
                                        alt=""
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-1">
                                        <span>Oct 17, 2024</span>
                                        <span className="flex items-center gap-1">
                                            <FaRegComment /> 0 comments
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 hover:text-[#AE3F4F] transition">
                                        The Ultimate Guide to Sneaker Care
                                    </h3>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex gap-4 items-center">
                                <div className="w-52 h-30 overflow-hidden group">
                                    <img
                                        src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-5.png?v=1731500994&width=360"
                                        alt=""
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-1">
                                        <span>Oct 17, 2024</span>
                                        <span className="flex items-center gap-1">
                                            <FaRegComment /> 0 comments
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 hover:text-[#AE3F4F] transition">
                                        How to Style Your Favorite Sneakers
                                    </h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
