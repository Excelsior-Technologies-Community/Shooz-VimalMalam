import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FiArrowRight } from 'react-icons/fi';
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

const Index = () => {
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
        </>
    );
};

export default Index;
