import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Award, Heart, Sparkles, Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const BlickfangNailStudio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const carouselImages = [
        {
            image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            title: "Kunstvolle Nageldesigns",
            description: "Einzigartige Kreationen, die Ihre Persönlichkeit widerspiegeln",
            bgColor: "bg-gradient-to-br from-green-400 to-emerald-500"
        },
        {
            image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            title: "Professionelle Maniküre",
            description: "Perfekte Pflege mit hochwertigen Produkten",
            bgColor: "bg-gradient-to-br from-lime-400 to-green-500"
        },
        {
            image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            title: "Entspannende Atmosphäre",
            description: "Genießen Sie unsere luxuriöse und beruhigende Umgebung",
            bgColor: "bg-gradient-to-br from-emerald-300 to-teal-500"
        },
        {
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            title: "Gel & Shellac",
            description: "Langanhaltende Farbe und perfekter Glanz",
            bgColor: "bg-gradient-to-br from-green-500 to-emerald-600"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-100 via-gray-200 to-green-100 text-gray-800 overflow-x-hidden">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
            }`}>
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
                            blickfang
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#home" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105">Home</a>
                            <a href="#gallery" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105">Galerie</a>
                            <a href="#about" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105">Über Mich</a>
                            <a href="#services" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105">Services</a>
                            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105">Kontakt</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section with Full Width Carousel */}
            <section id="home" className="relative min-h-screen flex flex-col items-center justify-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-lime-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-200 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>

                {/* Hero Text */}
                <div className="container mx-auto px-6 py-20 text-center relative z-10">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-600 via-lime-500 to-emerald-600 bg-clip-text text-transparent animate-fadeIn">
                        blickfang
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slideUp">
                        Ihr Nagelstudio für außergewöhnliche Designs
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-amber-400 mb-16">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-8 h-8 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                    </div>
                </div>

                {/* Full Width Carousel */}
                <div className="relative w-full h-96 md:h-[500px] overflow-hidden shadow-2xl">
                    {carouselImages.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-1000 transform ${
                                index === currentSlide
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-110'
                            }`}
                        >
                            <div className={`w-full h-full ${item.bgColor} flex items-center justify-center`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover mix-blend-overlay"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <div className="container mx-auto px-6">
                                    <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/20 max-w-2xl">
                                        <h3 className="text-3xl font-bold mb-3 text-green-600">{item.title}</h3>
                                        <p className="text-lg text-gray-800">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Carousel Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 text-gray-700"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 text-gray-700"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {carouselImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide
                                        ? 'bg-green-500 w-8'
                                        : 'bg-gray-400 hover:bg-gray-600'
                                }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative py-20 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image Side */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-lime-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700&q=80"
                                    alt="Nagelstudio Betreiberin"
                                    className="w-full h-[600px] object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjcwMCIgdmlld0JveD0iMCAwIDYwMCA3MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNzAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGJ1aWxkZXIgdHlwZT0ibGluZWFyIiBpZD0iZ3JhZGllbnQiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzA1OTY2OSIgc3RvcC1vcGFjaXR5PSIwLjgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMGRiNzQ3IiBzdG9wLW9wYWNpdHk9IjAuNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==';
                                    }}
                                />
                                {/* Floating Elements */}
                                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-lime-600 rounded-2xl p-4 shadow-xl animate-float">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-2xl p-4 shadow-xl animate-float-delay">
                                    <Heart className="w-8 h-8 text-gray-800" />
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
                                    Über Mich
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-lime-500 rounded-full mb-8"></div>
                            </div>

                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p className="transform hover:scale-105 transition-all duration-300 hover:text-gray-800">
                                    Willkommen bei <span className="text-green-600 font-semibold">blickfang</span>! Ich bin Sarah,
                                    Ihre Nageldesignerin mit über 8 Jahren Erfahrung in der Kunst der Nagelpflege und des kreativen Designs.
                                </p>

                                <p className="transform hover:scale-105 transition-all duration-300 hover:text-gray-800">
                                    Meine Leidenschaft liegt darin, jedem Kunden ein einzigartiges und unvergessliches Erlebnis zu bieten.
                                    Mit modernsten Techniken und hochwertigen Produkten verwandle ich Ihre Nägel in kleine Kunstwerke,
                                    die Ihre Persönlichkeit perfekt widerspiegeln.
                                </p>

                                <p className="transform hover:scale-105 transition-all duration-300 hover:text-gray-800">
                                    In meinem Studio steht nicht nur die Schönheit im Vordergrund, sondern auch Ihr Wohlbefinden.
                                    Ich lege größten Wert auf Hygiene, Qualität und eine entspannte Atmosphäre, in der Sie sich
                                    rundum wohlfühlen können.
                                </p>

                                <p className="transform hover:scale-105 transition-all duration-300 hover:text-gray-800">
                                    Jeder Nagel erzählt eine Geschichte – lassen Sie uns gemeinsam Ihre Geschichte in Farben und
                                    Designs zum Leben erwecken. Von klassisch elegant bis gewagt kreativ – bei blickfang wird
                                    jeder Wunsch zur Realität.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <div className="text-center group">
                                    <div className="text-3xl font-bold text-green-600 group-hover:scale-110 transition-all duration-300">8+</div>
                                    <div className="text-sm text-gray-500">Jahre Erfahrung</div>
                                </div>
                                <div className="text-center group">
                                    <div className="text-3xl font-bold text-green-600 group-hover:scale-110 transition-all duration-300">1000+</div>
                                    <div className="text-sm text-gray-500">Zufriedene Kunden</div>
                                </div>
                                <div className="text-center group">
                                    <div className="text-3xl font-bold text-green-600 group-hover:scale-110 transition-all duration-300">500+</div>
                                    <div className="text-sm text-gray-500">Designs erstellt</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="relative py-20 bg-gradient-to-br from-stone-50 to-green-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
                            Unsere Services
                        </h2>
                        <p className="text-xl text-gray-600">Professionelle Nagelpflege auf höchstem Niveau</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Sparkles className="w-12 h-12" />,
                                title: "Gel Maniküre",
                                price: "ab 35€",
                                description: "Langanhaltender Glanz mit perfekter Haltbarkeit",
                                image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                            },
                            {
                                icon: <Heart className="w-12 h-12" />,
                                title: "Nail Art Design",
                                price: "ab 50€",
                                description: "Individuelle Kunstwerke nach Ihren Wünschen",
                                image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                            },
                            {
                                icon: <Award className="w-12 h-12" />,
                                title: "Shellac Treatment",
                                price: "ab 40€",
                                description: "2 Wochen perfekte Nägel ohne Absplittern",
                                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 hover:scale-105 transition-all duration-500 border border-green-200 hover:border-green-400 shadow-lg hover:shadow-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-lime-100/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                <div className="relative z-10">
                                    <div className="mb-4 overflow-hidden rounded-2xl">
                                        <div className="bg-gradient-to-br from-green-400 to-lime-500 h-48 flex items-center justify-center">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 mix-blend-overlay"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="text-green-600 mb-4 group-hover:scale-110 transition-all duration-300">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                                        {service.description}
                                    </p>

                                    <div className="text-2xl font-bold text-green-600">
                                        {service.price}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative py-20">
                <div className="absolute inset-0 bg-gradient-to-t from-green-100/20 to-transparent"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
                            Kontakt
                        </h2>
                        <p className="text-xl text-gray-600">Vereinbaren Sie Ihren Termin</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            {[
                                { icon: <Phone className="w-6 h-6" />, label: "Telefon", value: "+43 123 456 7890" },
                                { icon: <Mail className="w-6 h-6" />, label: "E-Mail", value: "info@blickfang-nails.at" },
                                { icon: <MapPin className="w-6 h-6" />, label: "Adresse", value: "Musterstraße 123, 8570 Voitsberg" },
                                { icon: <Clock className="w-6 h-6" />, label: "Öffnungszeiten", value: "Mo-Fr: 9-19 Uhr, Sa: 9-16 Uhr" }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300"
                                >
                                    <div className="text-green-600 group-hover:text-lime-500 transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                                            {item.label}
                                        </div>
                                        <div className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                                            {item.value}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links & CTA */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-green-200 shadow-lg">
                            <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">Folgen Sie uns</h3>

                            <div className="flex justify-center space-x-6 mb-8">
                                <a
                                    href="#"
                                    className="bg-gradient-to-br from-green-500 to-lime-600 rounded-full p-4 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-400/50"
                                >
                                    <Instagram className="w-6 h-6 text-white" />
                                </a>
                                <a
                                    href="#"
                                    className="bg-gradient-to-br from-green-500 to-lime-600 rounded-full p-4 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-400/50"
                                >
                                    <Facebook className="w-6 h-6 text-white" />
                                </a>
                            </div>

                            <button className="w-full bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-white font-bold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-400/50">
                                Jetzt Termin vereinbaren
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-green-200 py-8 bg-stone-50">
                <div className="container mx-auto px-6 text-center">
                    <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
                        blickfang
                    </div>
                    <p className="text-gray-600">
                        © 2024 blickfang Nagelstudio. Alle Rechte vorbehalten.
                    </p>
                </div>
            </footer>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(50px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes float-delay {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }

                .animate-fadeIn { animation: fadeIn 1s ease-out; }
                .animate-slideUp { animation: slideUp 1s ease-out 0.3s both; }
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-float-delay { animation: float-delay 3s ease-in-out infinite 1.5s; }
            `}</style>
        </div>
    );
};

export default BlickfangNailStudio;