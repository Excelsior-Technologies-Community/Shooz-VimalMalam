import React, { useState } from 'react';
import { FiChevronDown, FiShoppingCart, FiEye, FiHeart } from 'react-icons/fi';
import { TbArrowsExchange2 } from 'react-icons/tb';
import Footer from './Footer.jsx';

// ============================================
// DATA - All the data used in this page
// ============================================

// Categories shown in tabs and cards
const categories = [
    { id: 1, name: 'Athletic Footwear', count: 8, image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=360' },
    { id: 2, name: 'Boots for Every Occasion', count: 8, image: 'https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-1.png?v=1731045532&width=360' },
    { id: 3, name: 'Luxury Leather Shoes', count: 8, image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=360' },
    { id: 4, name: 'Sandals & Slides', count: 8, image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=360' },
    { id: 5, name: "Sneakerhead's Haven", count: 10, image: 'https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-3.png?v=1731045526&width=360' },
];

// ============================================
// PRODUCTS BY CATEGORY - 42 total products
// ============================================

// Athletic Footwear - 8 products
const athleticFootwear = [
    { id: 1, name: 'Classic White Tennis Sneakers', brand: 'SportyFeet', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 2, name: 'Sport Flex Running Shoes', brand: 'AthletePro', price: 32.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 3, name: 'Urban Runner Pro', brand: 'SpeedStep', price: 35.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720' },
    { id: 4, name: 'Lightweight Gym Trainers', brand: 'FitKick', price: 28.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720' },
    { id: 5, name: 'Marathon Performance Shoes', brand: 'RunElite', price: 45.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 6, name: 'Cross Training Sneakers', brand: 'PowerMove', price: 38.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 7, name: 'Basketball Court Shoes', brand: 'HoopStar', price: 55.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720' },
    { id: 8, name: 'Tennis Pro Sneakers', brand: 'CourtKing', price: 42.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720' },
];

// Boots for Every Occasion - 8 products
const bootsProducts = [
    { id: 9, name: 'Waterproof Hiking Boots', brand: 'TrailGear', price: 65.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720', hasColorOptions: true },
    { id: 10, name: 'Chelsea Ankle Boots', brand: 'UrbanStyle', price: 58.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 11, name: 'Combat Style Boots', brand: 'ToughWear', price: 72.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 12, name: 'Winter Snow Boots', brand: 'FrostGuard', price: 85.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720', hasColorOptions: true },
    { id: 13, name: 'Work Safety Boots', brand: 'SafeStep', price: 78.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720' },
    { id: 14, name: 'Desert Chukka Boots', brand: 'SandWalker', price: 62.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 15, name: 'Motorcycle Riding Boots', brand: 'RiderPro', price: 95.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 16, name: 'Casual Lace-Up Boots', brand: 'DayWear', price: 55.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720' },
];

// Luxury Leather Shoes - 8 products
const luxuryLeatherShoes = [
    { id: 17, name: 'Classic Oxford Shoes', brand: 'FormalFit', price: 120.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720' },
    { id: 18, name: 'Italian Derby Shoes', brand: 'LuxStep', price: 145.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 19, name: 'Monk Strap Loafers', brand: 'Elegance', price: 135.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 20, name: 'Brogue Wingtip Shoes', brand: 'ClassicCraft', price: 155.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720' },
    { id: 21, name: 'Penny Loafers', brand: 'GentleStep', price: 110.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 22, name: 'Cap Toe Oxfords', brand: 'Executive', price: 165.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720' },
    { id: 23, name: 'Tassel Loafers', brand: 'Refined', price: 125.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 24, name: 'Wholecut Dress Shoes', brand: 'PrimeLeather', price: 180.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720' },
];

// Sandals & Slides - 8 products
const sandalsSlides = [
    { id: 25, name: 'Classic Flip Flops', brand: 'BeachLife', price: 15.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 26, name: 'Sport Slides', brand: 'ActiveComfort', price: 22.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 27, name: 'Leather Strap Sandals', brand: 'SunWalker', price: 35.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720' },
    { id: 28, name: 'Comfort Pool Slides', brand: 'AquaFeet', price: 18.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720' },
    { id: 29, name: 'Gladiator Sandals', brand: 'RomanStyle', price: 42.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 30, name: 'Birkenstock Style Sandals', brand: 'NatureStep', price: 55.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 31, name: 'Hiking Sandals', brand: 'TrailReady', price: 48.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720' },
    { id: 32, name: 'Platform Slides', brand: 'TrendyFeet', price: 28.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720' },
];

// Sneakerhead's Haven - 10 products
const sneakerheadHaven = [
    { id: 33, name: 'Retro High Tops', brand: 'VintageKicks', price: 85.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720', hasColorOptions: true },
    { id: 34, name: 'Limited Edition Jordans', brand: 'AirLegacy', price: 180.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 35, name: 'Classic Canvas Sneakers', brand: 'OldSchool', price: 55.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720' },
    { id: 36, name: 'Chunky Dad Sneakers', brand: 'RetroWave', price: 95.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720', hasColorOptions: true },
    { id: 37, name: 'Skate Pro Shoes', brand: 'BoardLife', price: 72.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 38, name: 'Neon Glow Sneakers', brand: 'NightRunner', price: 88.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 39, name: 'Platform Sneakers', brand: 'HeightBoost', price: 78.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720', hasColorOptions: true },
    { id: 40, name: 'Minimalist White Sneakers', brand: 'CleanStep', price: 65.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720' },
    { id: 41, name: 'Colorblock Sneakers', brand: 'PopStyle', price: 82.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 42, name: 'Luxury Designer Sneakers', brand: 'HighEnd', price: 220.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
];

// All products organized by category ID (for easy lookup)
const allProducts = {
    1: athleticFootwear,      // Athletic Footwear
    2: bootsProducts,         // Boots for Every Occasion
    3: luxuryLeatherShoes,    // Luxury Leather Shoes
    4: sandalsSlides,         // Sandals & Slides
    5: sneakerheadHaven,      // Sneakerhead's Haven
};


// ============================================
// SMALL COMPONENTS - Broken into simple parts
// ============================================

// Hero Banner at the top of page
function HeroBanner() {
    return (
        <section className="relative h-[300px] md:h-[350px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=1944)` }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Title */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-normal text-white">Athletic Footwear</h1>
            </div>
        </section>
    );
}


// Category Tab Button (the text links below hero)
function CategoryTab({ category, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`text-sm font-medium cursor-pointer ${isActive ? 'text-[#C44D5E]' : 'text-gray-600 hover:text-gray-900'}`}
        >
            {category.name} ({category.count})
        </button>
    );
}


// Category Card (the image cards with zoom effect)
function CategoryCard({ category, isActive, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`group relative aspect-square overflow-hidden cursor-pointer ${isActive ? 'ring-2 ring-[#C44D5E]' : ''}`}
        >
            {/* Image with zoom on hover */}
            <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white text-sm md:text-base font-semibold text-center px-2">
                    {category.name}
                </span>
                {/* Product count - shows only on hover */}
                <span className="text-white text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Products ({category.count})
                </span>
            </div>
        </div>
    );
}


// Grid Toggle Button (simple icon buttons for 2, 3 or 4 column layout)
function GridToggleButton({ type, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`p-2 cursor-pointer ${isActive ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
        >
            {/* 2-column icon */}
            {type === 'grid2' && (
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <rect x="0" y="0" width="9" height="9" fill="#666" />
                    <rect x="11" y="0" width="9" height="9" fill="#666" />
                    <rect x="0" y="11" width="9" height="9" fill="#666" />
                    <rect x="11" y="11" width="9" height="9" fill="#666" />
                </svg>
            )}

            {/* 3-column icon */}
            {type === 'grid3' && (
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <rect x="0" y="0" width="5" height="5" fill="#666" />
                    <rect x="7" y="0" width="5" height="5" fill="#666" />
                    <rect x="14" y="0" width="5" height="5" fill="#666" />
                    <rect x="0" y="7" width="5" height="5" fill="#666" />
                    <rect x="7" y="7" width="5" height="5" fill="#666" />
                    <rect x="14" y="7" width="5" height="5" fill="#666" />
                    <rect x="0" y="14" width="5" height="5" fill="#666" />
                    <rect x="7" y="14" width="5" height="5" fill="#666" />
                    <rect x="14" y="14" width="5" height="5" fill="#666" />
                </svg>
            )}

            {/* 4-column icon */}
            {type === 'grid4' && (
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <rect x="0" y="0" width="4" height="4" fill="#666" />
                    <rect x="5" y="0" width="4" height="4" fill="#666" />
                    <rect x="10" y="0" width="4" height="4" fill="#666" />
                    <rect x="15" y="0" width="4" height="4" fill="#666" />
                    <rect x="0" y="5" width="4" height="4" fill="#666" />
                    <rect x="5" y="5" width="4" height="4" fill="#666" />
                    <rect x="10" y="5" width="4" height="4" fill="#666" />
                    <rect x="15" y="5" width="4" height="4" fill="#666" />
                    <rect x="0" y="10" width="4" height="4" fill="#666" />
                    <rect x="5" y="10" width="4" height="4" fill="#666" />
                    <rect x="10" y="10" width="4" height="4" fill="#666" />
                    <rect x="15" y="10" width="4" height="4" fill="#666" />
                    <rect x="0" y="15" width="4" height="4" fill="#666" />
                    <rect x="5" y="15" width="4" height="4" fill="#666" />
                    <rect x="10" y="15" width="4" height="4" fill="#666" />
                    <rect x="15" y="15" width="4" height="4" fill="#666" />
                </svg>
            )}
        </button>
    );
}


// Product Card (each product in the grid)
function ProductCard({ product }) {
    return (
        <div className="group cursor-pointer">
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
    );
}


// Sidebar Filter Section
function SidebarFilter({ title, isOpen, onToggle, children }) {
    return (
        <div className="border-b border-gray-200 pb-4">
            {/* Header with toggle */}
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full text-left cursor-pointer"
            >
                <span className="text-base font-semibold text-gray-900">{title}</span>
                <FiChevronDown className={`text-lg transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Content - only shows when open */}
            {isOpen && (
                <div className="mt-4 space-y-3">
                    {children}
                </div>
            )}
        </div>
    );
}


// ============================================
// MAIN COMPONENT - Puts everything together
// ============================================

function Products() {
    // State: which category is selected (1-5)
    const [activeCategory, setActiveCategory] = useState(1);

    // State: grid layout ('grid3' = 3 columns, 'grid4' = 4 columns)
    const [gridView, setGridView] = useState('grid4');

    // State: how products are sorted
    const [sortBy, setSortBy] = useState('alphabetically');

    // State: is sidebar filter open
    const [filterOpen, setFilterOpen] = useState(true);

    return (
        <>
            {/* ========== HERO BANNER ========== */}
            <HeroBanner />


            {/* ========== CATEGORY TABS ========== */}
            <div className="bg-white py-4 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {categories.map((cat) => (
                            <CategoryTab
                                key={cat.id}
                                category={cat}
                                isActive={activeCategory === cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>


            {/* ========== CATEGORY CARDS ========== */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {categories.map((cat) => (
                            <CategoryCard
                                key={cat.id}
                                category={cat}
                                isActive={activeCategory === cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>


            {/* ========== FILTER BAR ========== */}
            <section className="py-6 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">

                        {/* Left side: Filter label + grid toggle */}
                        <div className="flex items-center gap-6">
                            <span className="text-lg font-semibold text-gray-900">Filter:</span>
                            <div className="flex items-center border border-gray-300 rounded">
                                <GridToggleButton
                                    type="grid2"
                                    isActive={gridView === 'grid2'}
                                    onClick={() => setGridView('grid2')}
                                />
                                <div className="w-px h-6 bg-gray-300" />
                                <GridToggleButton
                                    type="grid3"
                                    isActive={gridView === 'grid3'}
                                    onClick={() => setGridView('grid3')}
                                />
                                <div className="w-px h-6 bg-gray-300" />
                                <GridToggleButton
                                    type="grid4"
                                    isActive={gridView === 'grid4'}
                                    onClick={() => setGridView('grid4')}
                                />
                            </div>
                        </div>

                        {/* Right side: Sort dropdown + product count */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">Sort By:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="text-sm text-gray-900 bg-transparent border-none cursor-pointer"
                                >
                                    <option value="alphabetically">Alphabetically, A-Z</option>
                                    <option value="alphabetically-desc">Alphabetically, Z-A</option>
                                    <option value="price-low">Price, Low to High</option>
                                    <option value="price-high">Price, High to Low</option>
                                </select>
                            </div>
                            <span className="text-sm text-gray-600">{allProducts[activeCategory].length} Products</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* ========== MAIN CONTENT (Sidebar + Products) ========== */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-8">

                        {/* LEFT: Sidebar */}
                        <aside className="w-full md:w-64 shrink-0">
                            <SidebarFilter
                                title="Collection"
                                isOpen={filterOpen}
                                onToggle={() => setFilterOpen(!filterOpen)}
                            >
                                {categories.map((cat) => (
                                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={activeCategory === cat.id}
                                            onChange={() => setActiveCategory(cat.id)}
                                            className="w-4 h-4"
                                        />
                                        <span className="text-sm text-gray-700">{cat.name}</span>
                                    </label>
                                ))}
                            </SidebarFilter>
                        </aside>

                        {/* RIGHT: Product Grid */}
                        <div className="flex-1">
                            <div className={`grid gap-6 
                                ${gridView === 'grid2' && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'}
                                ${gridView === 'grid3' && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}
                                ${gridView === 'grid4' && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}
                            `}>
                                {allProducts[activeCategory].map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ========== FOOTER ========== */}
            <Footer />
        </>
    );
}

export default Products;
