import fit1 from "../assets/fit1.png"
import fit2 from "../assets/fit2.png"
import fit3 from "../assets/fit3.png"
import { ArrowLeft, Award, Users, Target, Calendar, MessageCircle, Clock, Home } from 'lucide-react';
import {useNavigate} from "react-router-dom";

const FitImJob = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        // In a real app, this would navigate back
        navigate("/Unternehmen");
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header with back button */}
            <div className="bg-blue-50 border-b border-blue-100">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <button
                        onClick={handleBackClick}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Zurück zur Unternehmensseite</span>
                    </button>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-full">
                            <Award className="w-6 h-6" />
                            <span className="font-semibold">Gesundheitspreis Gewinner 2017</span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
                            PROMAX gewinnt Gesundheitspreis
                            <span className="block text-blue-600 font-normal">„fit im Job" 2017</span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            Am Montag, den 30. Oktober 2017, wurde in der Helmut-List-Halle in Graz zum sechzehnten Mal
                            der steirische Gesundheitspreis „fit im job" an steirische Unternehmen verliehen - und PROMAX hat gewonnen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Award Images Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Group Photo */}
                        <div className="lg:col-span-2">
                            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <img
                                    src={fit1}
                                    alt="Preisverleihung fit im job 2017 - Gruppenfoto aller Gewinner"
                                    className="w-full h-80 lg:h-96 object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                    <p className="text-white text-sm font-medium">
                                        Alle Gewinner des Gesundheitspreises „fit im job" 2017
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Award Ceremony */}
                        <div className="space-y-8">
                            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <img
                                    src={fit2}
                                    alt="PROMAX Geschäftsführung bei der Preisübergabe"
                                    className="w-full h-60 object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <p className="text-white text-sm font-medium">
                                        Preisübergabe an PROMAX
                                    </p>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <img
                                    src={fit3}
                                    alt="Gold Auszeichnung fit im job 2017 für PROMAX"
                                    className="w-full h-60 object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <p className="text-white text-sm font-medium">
                                        Gold Auszeichnung 2017
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Excellence Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-light text-slate-900">
                                Ausgezeichnete Unternehmensführung
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                PROMAX Project Management GesmbH zeichnet sich durch eine hohe soziale und
                                kommunikative Kompetenz der Unternehmensführung aus. Die Zuständigkeit für
                                Betriebliche Gesundheitsförderung liegt im Unternehmen bei der Geschäftsführung.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Users className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Soziale Kompetenz</h3>
                                        <p className="text-slate-600 text-sm">Wertschätzung und Vertrauen</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Kommunikation</h3>
                                        <p className="text-slate-600 text-sm">Offener Dialog im Team</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <Target className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Gesundheitsfokus</h3>
                                        <p className="text-slate-600 text-sm">Betriebliche Gesundheitsförderung</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Structured Health Culture */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-light text-slate-900 mb-4">
                            Strukturierte Gesundheitskultur
                        </h2>
                        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center space-y-4 p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                <Calendar className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-slate-900">Regelmäßige Reviews</h3>
                            <p className="text-slate-600 text-sm">Projektreviews und kontinuierliche Bewertung</p>
                        </div>

                        <div className="text-center space-y-4 p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                <Clock className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-slate-900">Jour Fixe</h3>
                            <p className="text-slate-600 text-sm">Alle 14 Tage strukturierte Termine</p>
                        </div>

                        <div className="text-center space-y-4 p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                <Users className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-slate-900">Mitarbeitergespräche</h3>
                            <p className="text-slate-600 text-sm">Regelmäßiger Austausch und Feedback</p>
                        </div>

                        <div className="text-center space-y-4 p-6 bg-slate-50 rounded-lg hover:bg-white hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                <MessageCircle className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-slate-900">Informationstage</h3>
                            <p className="text-slate-600 text-sm">Regelmäßige Mitarbeiterinformation</p>
                        </div>
                    </div>

                    <div className="mt-12 bg-blue-50 rounded-lg p-8">
                        <p className="text-lg text-slate-700 leading-relaxed text-center">
                            Durch regelmäßige Projektreviews, einen alle vierzehn Tage stattfindenden Jour fixe,
                            regelmäßige MitarbeiterInneninformationstage und MitarbeiterInnengespräche sowie
                            Gruppeninterviews ergibt sich eine sehr gut strukturierte gesundheitsfördernde Unternehmenskultur.
                        </p>
                    </div>
                </div>
            </section>

            {/* Work-Life Balance */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-light text-slate-900">
                                Vereinbarkeit von Beruf und Familie
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                Die Vereinbarkeit von Beruf und Familie wird durch flexible Arbeitszeiten
                                und die Möglichkeit zur Teilzeitarbeit umgesetzt.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-slate-700">Gleitzeitsystem</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-slate-700">Zeitausgleich</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-slate-700">Selbstständige Pauseneinteilung</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-slate-700">Möglichkeit zur Teilzeitarbeit</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <h3 className="text-xl font-semibold text-slate-900 mb-6">Projektziele</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-900">Mitarbeiterzufriedenheit</h4>
                                        <p className="text-slate-600 text-sm">Steigerung der Zufriedenheit und des Betriebsklimas</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-900">Unternehmensbindung</h4>
                                        <p className="text-slate-600 text-sm">Verbesserung der Bindung an das Unternehmen</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-900">Burn-out Prävention</h4>
                                        <p className="text-slate-600 text-sm">Senkung des Burn-out-Risikos</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-900">Wertschätzung</h4>
                                        <p className="text-slate-600 text-sm">Pflege eines wertschätzenden Umgangs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-light text-slate-900 mb-4">
                            Unser Siegervideo
                        </h2>
                        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
                    </div>

                    <div className="relative bg-slate-100 rounded-lg overflow-hidden shadow-lg aspect-video">
                        <iframe
                            src="https://www.youtube.com/embed/RfHVzflhIio"
                            title="PROMAX fit im job Siegervideo 2017"
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-slate-600">
                            Hier finden Sie unser Siegervideo zur Auszeichnung mit dem Gesundheitspreis „fit im job" 2017
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-light text-slate-900 mb-6">
                        Interesse an einer Karriere bei PROMAX?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Werden Sie Teil unseres ausgezeichneten Teams und profitieren Sie von unserem
                        preisgekrönten Gesundheitsprogramm.
                    </p>
                    <button
                        onClick={() => navigate('/Karriere')}
                        className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                    >
                        <Home className="w-5 h-5" />
                        <span>Zur Karriereseite</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default FitImJob;