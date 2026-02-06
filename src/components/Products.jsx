import React, { useState } from 'react';
import { FiChevronDown, FiShoppingCart, FiEye, FiHeart } from 'react-icons/fi';
import { TbArrowsExchange2 } from 'react-icons/tb';
import Footer from './Footer.jsx';

// ============================================
// DATA - All the data used in this page
// ============================================

// Categories shown in tabs and cards
const categories = [
    { id: 0, name: 'Products', count: 42, image: 'https://qx-shooz.myshopify.com/cdn/shop/files/hero-banner.jpg?v=1731045500&width=360' },
    { id: 1, name: 'Athletic Footwear', count: 8, image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=360' },
    { id: 2, name: 'Boots for Every Occasion', count: 8, image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=360' },
    { id: 3, name: 'Luxury Leather Shoes', count: 8, image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=360' },
    { id: 4, name: 'Sandals & Slides', count: 8, image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=360' },
    { id: 5, name: "Sneakerhead's Haven", count: 10, image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-3.png?v=1731657979&width=360' }
];

// ============================================
// PRODUCTS BY CATEGORY - 42 total products
// ============================================

// Athletic Footwear - 8 products
const athleticFootwear = [
    { id: 1, name: 'Classic White Tennis Sneakers', brand: 'SportyFeet', price: 21.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 2, name: 'Cushioned Trail Running Shoes', brand: 'TrailGear', price: 15.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-5_d3ebfc44-e7bd-4fa9-8459-4fc99b71cacf.jpg?v=1731311341&width=360', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg?v=1731311357&width=360' },
    { id: 3, name: 'High-Top Canvas Sneakers', brand: 'TrendyFeet', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=360', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=360' },
    { id: 4, name: 'Lightweight Running Shoes', brand: 'SprintMax', price: 20.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-8_c70f2fa3-a720-4f73-a2b0-0e0e01967d19.jpg?v=1731311653&width=360', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-21_3ab22edc-32aa-4831-beb5-7ff416b17834.jpg?v=1731311666&width=360', outOfStock: true },
    { id: 5, name: 'Slip-Resistant Work Shoes', brand: 'ProStep', price: 20.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-10_aa707d79-f5b1-4b80-8308-7849352cb1d6.jpg?v=1731314834&width=360', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-22_8479de23-bf7c-4771-84c2-90291de8bdfa.jpg?v=1731314850&width=360' },
    { id: 6, name: 'Soft Leather Moccasins', brand: 'ComfortCreek', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-12_560514e6-9f15-4d62-aa87-e2863080cc21.jpg?v=1731314902&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-24_8fe577f2-dcbd-47da-8b42-d1311be6070e.jpg?v=1731314917&width=720' },
    { id: 7, name: 'Vegan Leather Combat Boots', brand: 'EcoStride', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-15_eeedf8cf-f93a-488c-9c0b-e62716ede97c.jpg?v=1731315192&width=360', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=360' },
    { id: 8, name: 'Vintage Suede Loafers', brand: 'RetroSole', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-16_e04d477d-efdc-4ec6-b50b-c2988e78b8a5.jpg?v=1731315204&width=360', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-20_e8528337-5425-4244-a682-7632fa76a3a0.jpg?v=1731315325&width=360', outOfStock: true },
];

// Boots for Every Occasion - 8 products
const bootsProducts = [
    { id: 9, name: 'Breathable Mesh Slip-Ons', brand: 'AirWalk', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg?v=1731310932&width=360', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=360' },
    { id: 10, name: 'Chunky Platform Sandals', brand: 'BoldWalk', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-2_f21b4635-7aa2-414f-b44c-6ce8171394ed.jpg?v=1731310979&width=360', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=360' },
    { id: 11, name: 'Classic Leather Sneakers', brand: 'UrbanStep', price: 21.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 12, name: 'Classic White Tennis Sneakers', brand: 'SportyFeet', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=360', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=360', },
    { id: 13, name: 'Cushioned Trail Running Shoes', brand: 'TrailGear', price: 15.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-5_d3ebfc44-e7bd-4fa9-8459-4fc99b71cacf.jpg?v=1731311341&width=360', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg?v=1731311357&width=360' },
    { id: 14, name: 'Elegant Block Heel Pumps', brand: 'LuxeFeet', price: 15.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-6_dea7fe47-b8a8-460f-9795-9490b1d9144e.jpg?v=1731311466&width=360', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_fdf5f73d-c3b8-465f-b59d-a8e6afc8e7b9.jpg?v=1731311481&width=360' },
    { id: 15, name: 'High-Top Canvas Sneakers', brand: 'TrendyFeet', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720' },
    { id: 16, name: 'Lightweight Running Shoes', brand: 'SprintMax', price: 0.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-8_c70f2fa3-a720-4f73-a2b0-0e0e01967d19.jpg?v=1731311653&width=360', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-21_3ab22edc-32aa-4831-beb5-7ff416b17834.jpg?v=1731311666&width=360', outOfStock: true },
];

// Luxury Leather Shoes - 8 products
const luxuryLeatherShoes = [
    { id: 17, name: 'Classic Oxford Shoes', brand: 'LuxeFeet', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720' },
    { id: 18, name: 'Italian Derby Shoes', brand: 'ProStep', price: 20.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 19, name: 'Monk Strap Loafers', brand: 'ComfortCreek', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 20, name: 'Brogue Wingtip Shoes', brand: 'GlamStep', price: 21.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720' },
    { id: 21, name: 'Penny Loafers', brand: 'CozyStep', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 22, name: 'Cap Toe Oxfords', brand: 'EcoStride', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720', outOfStock: true },
    { id: 23, name: 'Tassel Loafers', brand: 'RetroSole', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 24, name: 'Wholecut Dress Shoes', brand: 'TrailGear', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720' },
];

// Sandals & Slides - 8 products
const sandalsSlides = [
    { id: 25, name: 'Classic Flip Flops', brand: 'BoldWalk', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 26, name: 'Sport Slides', brand: 'SportyFeet', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 27, name: 'Leather Strap Sandals', brand: 'TrailGear', price: 15.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720' },
    { id: 28, name: 'Comfort Pool Slides', brand: 'TrendyFeet', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720' },
    { id: 29, name: 'Gladiator Sandals', brand: 'SprintMax', price: 0.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720', outOfStock: true },
    { id: 30, name: 'Birkenstock Style Sandals', brand: 'SimplyShoes', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 31, name: 'Hiking Sandals', brand: 'ComfortCreek', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720' },
    { id: 32, name: 'Platform Slides', brand: 'GlamStep', price: 21.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720' },
];

// Sneakerhead's Haven - 10 products
const sneakerheadHaven = [
    { id: 33, name: 'Retro High Tops', brand: 'SportyFeet', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720', },
    { id: 34, name: 'Limited Edition Jordans', brand: 'TrailGear', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 35, name: 'Classic Canvas Sneakers', brand: 'UrbanStep', price: 21.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720' },
    { id: 36, name: 'Chunky Dad Sneakers', brand: 'TrendyFeet', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720', },
    { id: 37, name: 'Skate Pro Shoes', brand: 'AirWalk', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 38, name: 'Neon Glow Sneakers', brand: 'LuxeFeet', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
    { id: 39, name: 'Platform Sneakers', brand: 'BoldWalk', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720', },
    { id: 40, name: 'Minimalist White Sneakers', brand: 'SprintMax', price: 0.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720', outOfStock: true },
    { id: 41, name: 'Colorblock Sneakers', brand: 'RetroSole', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720' },
    { id: 42, name: 'Luxury Designer Sneakers', brand: 'EcoStride', price: 25.00, image1: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720', image2: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720' },
];

// All products organized by category ID (for easy lookup)
const allProducts = {
    0: [...athleticFootwear, ...bootsProducts, ...luxuryLeatherShoes, ...sandalsSlides, ...sneakerheadHaven], // All Products
    1: athleticFootwear,      // Athletic Footwear
    2: bootsProducts,         // Boots for Every Occasion
    3: luxuryLeatherShoes,    // Luxury Leather Shoes
    4: sandalsSlides,         // Sandals & Slides
    5: sneakerheadHaven,      // Sneakerhead's Haven
};


// Banner images for each category (by category ID)
const bannerImages = {
    0: 'https://qx-shooz.myshopify.com/cdn/shop/files/col-2.png?v=1731657939&width=1944',
    1: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=1944',
    2: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=1944',
    3: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=1944',
    4: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=1944',
    5: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-3.png?v=1731657979&width=1944',
};


// ============================================
// SMALL COMPONENTS - Broken into simple parts
// ============================================

// Hero Banner at the top of page (changes based on selected category)
function HeroBanner({ activeCategory }) {
    // Get current category data
    const currentCategory = categories.find(cat => cat.id === activeCategory);

    return (
        <section className="relative h-[300px] md:h-[350px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${bannerImages[activeCategory]})` }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Title */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-normal text-white">{currentCategory?.name}</h1>
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
    // State: which category is selected (0 = all products, 1-5 = specific categories)
    const [activeCategory, setActiveCategory] = useState(0);

    // State: grid layout ('grid3' = 3 columns, 'grid4' = 4 columns)
    const [gridView, setGridView] = useState('grid4');

    // State: how products are sorted
    const [sortBy, setSortBy] = useState('alphabetically');

    // State: sidebar filter sections open/closed
    const [collectionOpen, setCollectionOpen] = useState(true);
    const [availabilityOpen, setAvailabilityOpen] = useState(true);
    const [priceOpen, setPriceOpen] = useState(true);
    const [brandOpen, setBrandOpen] = useState(true);

    // State: availability filter (true = show, false = hide)
    const [showInStock, setShowInStock] = useState(false);
    const [showOutOfStock, setShowOutOfStock] = useState(false);

    // State: brand filter (array of selected brand names)
    const [selectedBrands, setSelectedBrands] = useState([]);

    // Get all unique brand names from all products
    const allBrands = [...new Set(allProducts[0].map(p => p.brand))].sort();

    // State: price range filter
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(25);

    // Get products for current category
    const categoryProducts = allProducts[activeCategory];

    // Count in stock and out of stock products
    const inStockCount = categoryProducts.filter(p => !p.outOfStock).length;
    const outOfStockCount = categoryProducts.filter(p => p.outOfStock).length;

    // Filter products based on availability, price, and brand
    const filteredProducts = categoryProducts.filter(product => {
        // Availability filter
        if (showInStock && showOutOfStock) {
            // Both checked - show all
        } else if (showInStock && !showOutOfStock) {
            if (product.outOfStock) return false;
        } else if (!showInStock && showOutOfStock) {
            if (!product.outOfStock) return false;
        }
        // Neither checked - show all

        // Price filter
        if (product.price < minPrice || product.price > maxPrice) return false;

        // Brand filter
        if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;

        return true;
    });

    return (
        <>
            {/* ========== HERO BANNER ========== */}
            <HeroBanner activeCategory={activeCategory} />


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
                        {/* Only show categories 1-5 as cards, not "Products" (id 0) */}
                        {categories.filter(cat => cat.id !== 0).map((cat) => (
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
                            <span className="text-sm text-gray-600">{filteredProducts.length} Products</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* ========== MAIN CONTENT (Sidebar + Products) ========== */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-8">

                        {/* LEFT: Sidebar */}
                        <aside className="w-full md:w-64 shrink-0 space-y-6">
                            {/* Clear All Button */}
                            <button
                                onClick={() => {
                                    setActiveCategory(0);
                                    setShowInStock(false);
                                    setShowOutOfStock(false);
                                    setMinPrice(0);
                                    setMaxPrice(25);
                                    setSelectedBrands([]);
                                }}
                                className="text-sm text-gray-500 hover:text-gray-900 underline cursor-pointer"
                            >
                                Clear All
                            </button>

                            {/* Collection Filter */}
                            <SidebarFilter
                                title="Collection"
                                isOpen={collectionOpen}
                                onToggle={() => setCollectionOpen(!collectionOpen)}
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

                            {/* Availability Filter */}
                            <SidebarFilter
                                title="Availability"
                                isOpen={availabilityOpen}
                                onToggle={() => setAvailabilityOpen(!availabilityOpen)}
                            >
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={showInStock}
                                        onChange={() => setShowInStock(!showInStock)}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-sm text-gray-700">In stock ({inStockCount})</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={showOutOfStock}
                                        onChange={() => setShowOutOfStock(!showOutOfStock)}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-sm text-gray-700">Out of stock ({outOfStockCount})</span>
                                </label>
                            </SidebarFilter>

                            {/* Price Filter */}
                            <SidebarFilter
                                title="Price"
                                isOpen={priceOpen}
                                onToggle={() => setPriceOpen(!priceOpen)}
                            >
                                {/* Simple Range Bar */}
                                <div className="py-2">
                                    <div className="relative h-1 bg-gray-200 rounded">
                                        <div
                                            className="absolute h-1 bg-gray-800 rounded"
                                            style={{
                                                left: `${(minPrice / 25) * 100}%`,
                                                width: `${((maxPrice - minPrice) / 25) * 100}%`
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Price Inputs */}
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="flex items-center gap-1">
                                        <span className="text-sm text-gray-500">$</span>
                                        <input
                                            type="number"
                                            min="0"
                                            max="25"
                                            value={minPrice}
                                            onChange={(e) => setMinPrice(Number(e.target.value))}
                                            className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-center"
                                        />
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-sm text-gray-500">$</span>
                                        <input
                                            type="number"
                                            min="0"
                                            max="25"
                                            value={maxPrice}
                                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                                            className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-center"
                                        />
                                    </div>
                                </div>
                            </SidebarFilter>

                            {/* Brand Filter */}
                            <SidebarFilter
                                title="Brand"
                                isOpen={brandOpen}
                                onToggle={() => setBrandOpen(!brandOpen)}
                            >
                                {allBrands.map((brand) => {
                                    const count = categoryProducts.filter(p => p.brand === brand).length;
                                    return (
                                        <label key={brand} className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedBrands.includes(brand)}
                                                onChange={() => {
                                                    if (selectedBrands.includes(brand)) {
                                                        setSelectedBrands(selectedBrands.filter(b => b !== brand));
                                                    } else {
                                                        setSelectedBrands([...selectedBrands, brand]);
                                                    }
                                                }}
                                                className="w-4 h-4"
                                            />
                                            <span className="text-sm text-gray-700">{brand} ({count})</span>
                                        </label>
                                    );
                                })}
                            </SidebarFilter>
                        </aside>

                        {/* RIGHT: Product Grid */}
                        <div className="flex-1">
                            <div className={`grid gap-6 
                                ${gridView === 'grid2' && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'}
                                ${gridView === 'grid3' && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}
                                ${gridView === 'grid4' && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}
                            `}>
                                {filteredProducts.map((product) => (
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
