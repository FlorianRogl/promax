import { useEffect, useState } from 'react';
import { Building2, Phone, Mail, Globe, FileText, Scale, MapPin, Shield } from 'lucide-react';

const Rechtliches = () => {
    const getMainNavHeight = () => {
        const width = window.innerWidth;
        if (width <= 360) return 55;
        if (width <= 480) return 60;
        if (width <= 768) return 65;
        if (width >= 1920) return 85;
        return 75;
    };

    const [mainNavHeight, setMainNavHeight] = useState(getMainNavHeight());

    useEffect(() => {
        const handleResize = () => {
            setMainNavHeight(getMainNavHeight());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    const elementPosition = element.offsetTop - mainNavHeight - 20;
                    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }, 100);
            }
        }
    }, [mainNavHeight]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <section id="impressum" className="mb-20" style={{ scrollMarginTop: `${mainNavHeight + 20}px` }}>
                    <div className="mb-12">
                        <div className="flex items-center space-x-3 mb-4">
                            <FileText className="h-8 w-8 text-orange-500" />
                            <h2 className="text-4xl font-bold text-slate-800">Impressum</h2>
                        </div>
                        <p className="text-slate-600 text-lg">Rechtliche Informationen gemäß § 5 TMG</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="border-l-4 border-orange-500 pl-4">
                                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                                    <Building2 className="h-5 w-5 mr-2 text-slate-600" />
                                    Firmeninformationen
                                </h3>
                                <div className="space-y-3 text-slate-700">
                                    <p className="font-medium text-lg">PROMAX Project Management GesmbH</p>
                                    <div className="flex items-start space-x-2">
                                        <MapPin className="h-4 w-4 mt-1 text-slate-500 flex-shrink-0" />
                                        <p>Parkring 18/F<br />8074 Raaba-Grambach<br />Österreich</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-l-4 border-slate-400 pl-4">
                                <h3 className="text-xl font-semibold text-slate-800 mb-4">Kontakt</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Phone className="h-4 w-4 text-slate-500" />
                                        <span className="text-slate-700">+43 (0) 316 / 241 393</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Phone className="h-4 w-4 text-slate-500" />
                                        <span className="text-slate-700">+43 (0) 316 / 241 393 - 99 (Fax)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Mail className="h-4 w-4 text-slate-500" />
                                        <a href="mailto:office@promax.at" className="text-orange-600 hover:text-orange-700 transition-colors">office@promax.at</a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Globe className="h-4 w-4 text-slate-500" />
                                        <a href="https://www.promax.at" className="text-orange-600 hover:text-orange-700 transition-colors">www.promax.at</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="border-l-4 border-slate-600 pl-4">
                                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                                    <Scale className="h-5 w-5 mr-2 text-slate-600" />
                                    Rechtliche Angaben
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <div className="grid gap-3">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-slate-600">Firmenbuchnummer:</span>
                                                <span className="text-slate-800">181286y</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-slate-600">UID-Nummer:</span>
                                                <span className="text-slate-800">ATU47536901</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-slate-600">DVR:</span>
                                                <span className="text-slate-800">1018329</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-600 mb-1">Firmengericht:</p>
                                        <p className="text-slate-800">Landesgericht für ZRS Graz</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-600 mb-1">Behörde gem. ECG:</p>
                                        <p className="text-slate-800">Bezirkshauptmannschaft Graz-Umgebung</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-200">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-3">Haftungsausschluss</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-3">Urheberrecht</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">© 2026 PROMAX Project Management GesmbH. Alle Rechte vorbehalten. Die Inhalte und Werke auf dieser Website unterliegen dem österreichischen Urheberrecht.</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-slate-800 mb-3">Bildnachweis</h3>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <p className="text-slate-600 text-xs leading-relaxed">© Andrei Merkulov - Fotolia.com | © werbefoto-burger.ch - Fotolia.com | © Gina Sanders - Fotolia.com | © coramax - Fotolia.com | © Moreno Soppelsa - Fotolia.com | © pressmaster - Fotolia.com | © CandyBox Images - Fotolia.com | © erikdegraaf - Fotolia.com | © guukaa - Fotolia.com | © photollurg - Fotolia.com | © FotoGentile</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="datenschutz" className="mb-20" style={{ scrollMarginTop: `${mainNavHeight + 20}px` }}>
                    <div className="mb-12">
                        <div className="flex items-center space-x-3 mb-4">
                            <Shield className="h-8 w-8 text-orange-500" />
                            <h2 className="text-4xl font-bold text-slate-800">Datenschutzerklärung</h2>
                        </div>
                        <p className="text-slate-600 text-lg">Informationen zur Verarbeitung Ihrer personenbezogenen Daten</p>
                    </div>

                    <div className="space-y-8">
                        <div className="border-l-4 border-orange-500 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Rechtsgrundlage</h3>
                            <div className="space-y-4">
                                <p className="text-slate-600 text-sm leading-relaxed">Die EU-Datenschutz-Grundverordnung, das Datenschutzgesetz 2000 sowie das Datenschutz-Anpassungsgesetz 2018 dienen dem Recht auf Schutz personenbezogener Daten. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGV, DSG 2018, TKG 2003).</p>
                                <p className="text-slate-600 text-sm leading-relaxed">Uns ist es ein besonderes Anliegen, alle personenbezogenen Daten, die Sie uns anvertrauen, zu schützen und sicher zu verwahren. In diesem Dokument erfahren Sie mehr darüber, wie wir Ihre personenbezogenen Daten verwenden und verarbeiten.</p>
                                <p className="text-slate-600 text-sm leading-relaxed">Die rechtlichen Grundlagen für die Verarbeitung von Ihren personenbezogenen Daten sind einerseits Vertragserfüllung, berechtigte Interessen, die Erfüllung unserer rechtlichen bzw. vertraglichen Verpflichtungen sowie andererseits Ihre Einwilligung (zB Kontaktformular, Cookies).</p>
                            </div>
                        </div>

                        <div className="border-l-4 border-slate-400 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Verantwortlicher</h3>
                            <p className="text-slate-700 mb-2">Verantwortlicher im Sinne der DSGVO:</p>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <p className="font-medium">PROMAX Project Management GesmbH</p>
                                <p>Parkring 18/F, 8074 Raaba-Grambach</p>
                                <p>E-Mail: <a href="mailto:office@promax.at" className="text-orange-600 hover:text-orange-700">office@promax.at</a></p>
                                <p>Telefon: +43 (0) 316 / 241 393</p>
                            </div>
                        </div>

                        <div className="border-l-4 border-slate-500 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Zweckbindung</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Zudem verarbeiten wir Daten, die wir von Kunden und Lieferanten zulässigerweise zum Zwecke der Vertragserfüllung, erhalten haben. Dabei handelt es sich um grundlegende personenbezogene Daten wie: Namen, Titel, berufliche Position, E-Mail-Adresse, Firmen-Adresse, Firmen-Telefonnummer</p>
                        </div>

                        <div className="border-l-4 border-orange-400 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Speicherdauer</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Wir verarbeiten Ihre personenbezogenen Daten (Namen, Titel, berufliche Position, E-Mail-Adresse, Firmen-Adresse, Firmen-Telefonnummer) soweit erforderlich, für die Dauer der gesamten Geschäftsbeziehung (von der Anbahnung, Abwicklung bis zur Beendigung eines Vertrags) sowie darüber hinaus gemäß den gesetzlichen Aufbewahrungs- und Dokumentationspflichten, die sich u.a. aus dem Unternehmensgesetzbuch (UGB), der Bundesabgabenordnung (BAO) ergeben sowie bis zur Beendigung eines allfälligen Rechtsstreits, fortlaufender Gewährleistungs- und Garantiefristen.</p>
                        </div>

                        <div className="border-l-4 border-slate-600 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Auftragsverarbeitung</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Unser beauftragter Softwaredienstleister, der im Zuge seiner Tätigkeit Zugriff auf Ihre personenbezogenen Daten erlangen kann, sofern diese die Daten zur Erfüllung seiner jeweiligen Leistung benötigt werden, hat sich zur Einhaltung der geltenden datenschutzrechtlichen Bestimmungen uns gegenüber verpflichtet. Es wurden Auftragsverarbeitungsverträge gemäß Art 28 DSGVO abgeschlossen.</p>
                        </div>

                        <div className="border-l-4 border-orange-300 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Datenverarbeitung auf dieser Website</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">Erfassung allgemeiner Informationen</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">Wenn Sie auf unsere Webseite zugreifen, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet Service Providers und Ähnliches. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen. Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an. Anonyme Informationen dieser Art werden von uns statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">Kontaktformular</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">Ihre Angaben inklusive persönlicher Daten aus unserem Kontaktformular werden zur Bearbeitung Ihrer Anfrage über unseren eigenen Mailserver an uns übermittelt, weiterverarbeitet und bei uns gespeichert. Diese Daten werden ohne Ihre Einverständniserklärung nicht erhoben oder weitergegeben. Ohne diese Daten können wir Ihre Anfragen nicht bearbeiten.</p>
                                    <p className="text-slate-600 text-sm leading-relaxed mt-2">Treten Sie per E-Mail oder Kontaktformular mit uns in Kontakt, werden die von Ihnen gemachten Angaben zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">SSL-Verschlüsselung</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">Erbringung kostenpflichtiger Leistungen</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">Zur Erbringung kostenpflichtiger Leistungen werden von uns zusätzliche Daten erfragt, wie z.B. Zahlungsangaben.</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-l-4 border-slate-700 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Einwilligung und Recht auf Widerruf</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Ist für die Verarbeitung Ihrer Daten Ihre Zustimmung notwendig, verarbeiten wir diese erst nach Ihrer ausdrücklichen Zustimmung. Ihre Zustimmung können Sie jederzeit unter folgender E-Mail-Adresse widerrufen: <a href="mailto:office@promax.at" className="text-orange-600 hover:text-orange-700">office@promax.at</a>. Mittels des Widerrufs der Zustimmung wird die Rechtmäßigkeit der aufgrund der Zustimmung bis zum Widerruf erfolgten Verarbeitung nicht berührt.</p>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Datensicherheit</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">PROMAX Project GesmbH setzt technische und organisatorische Sicherheitsmaßnahmen ein, um die gespeicherten personenbezogenen Daten gegen zufällige oder vorsätzliche Manipulation, Verlust oder Zerstörung und gegen den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend des technischen Fortschritts fortlaufend verbessert.</p>
                        </div>

                        <div className="border-l-4 border-slate-500 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Löschung bzw. Sperrung der Daten</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Wir halten uns an die Grundsätze der Datenvermeidung und Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.</p>
                        </div>

                        <div className="border-l-4 border-orange-400 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Newsletter</h3>
                            <div className="space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">Bei der Anmeldung zum Bezug unseres Newsletters werden die von Ihnen angegebenen Daten ausschließlich für diesen Zweck verwendet. Abonnenten können auch über Umstände per E-Mail informiert werden, die für den Dienst oder die Registrierung relevant sind (Beispielsweise Änderungen des Newsletterangebots oder technische Gegebenheiten).</p>
                                <p className="text-slate-600 text-sm leading-relaxed">Für eine wirksame Registrierung benötigen wir eine valide E-Mail-Adresse. Um zu überprüfen, dass eine Anmeldung tatsächlich durch den Inhaber einer E-Mail-Adresse erfolgt, setzen wir das „Double-opt-in"-Verfahren ein. Hierzu protokollieren wir die Bestellung des Newsletters, den Versand einer Bestätigungsmail und den Eingang der hiermit angeforderten Antwort. Weitere Daten werden nicht erhoben. Die Daten werden ausschließlich für den Newsletterversand verwendet und nicht an Dritte weitergegeben.</p>
                                <p className="text-slate-600 text-sm leading-relaxed">Die Einwilligung zur Speicherung Ihrer persönlichen Daten und ihrer Nutzung für den Newsletterversand können Sie jederzeit widerrufen. In jedem Newsletter findet sich dazu ein entsprechender Link. Außerdem können Sie sich jederzeit auch direkt auf dieser Webseite abmelden oder uns Ihren entsprechenden Wunsch über die am Ende dieser Datenschutzhinweise angegebene Kontaktmöglichkeit mitteilen.</p>
                            </div>
                        </div>

                        <div className="border-l-4 border-slate-600 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Verwendung von Google Analytics</h3>
                            <div className="space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">Diese Webseite benutzt Google Analytics, einen Webanalysedienst der Google Inc. (folgend: Google). Google Analytics verwendet sog. „Cookies", also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Webseite wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Webseitennutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</p>
                                <p className="text-slate-600 text-sm leading-relaxed">Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Webseite vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="text-orange-600 hover:text-orange-700">https://tools.google.com/dlpage/gaoptout?hl=de</a></p>
                                <p className="text-slate-600 text-sm leading-relaxed">Zusätzlich oder als Alternative zum Browser-Add-On können Sie das Tracking durch Google Analytics auf unseren Seiten unterbinden, indem Sie den folgenden Link anklicken (Tracking beenden). Dabei wird ein Opt-Out-Cookie auf Ihrem Gerät installiert. Damit wird die Erfassung durch Google Analytics für diese Website und für diesen Browser zukünftig verhindert, so lange der Cookie in Ihrem Browser installiert bleibt.</p>
                            </div>
                        </div>

                        <div className="border-l-4 border-slate-700 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Verwendung von Google Maps</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Diese Webseite verwendet Google Maps API, um geographische Informationen visuell darzustellen. Bei der Nutzung von Google Maps werden von Google auch Daten über die Nutzung der Kartenfunktionen durch Besucher erhoben, verarbeitet und genutzt. Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen (<a href="https://policies.google.com/privacy" className="text-orange-600 hover:text-orange-700">https://policies.google.com/privacy</a>) entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern. Ausführliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten finden Sie unter folgendem Link: <a href="https://support.google.com/accounts/answer/3024190" className="text-orange-600 hover:text-orange-700">https://support.google.com/accounts/answer/3024190</a></p>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Eingebettete YouTube-Videos</h3>
                            <div className="space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">Auf einigen unserer Webseiten betten wir Youtube-Videos ein. Betreiber der entsprechenden Plugins ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wenn Sie eine Seite mit dem YouTube-Plugin besuchen, wird eine Verbindung zu Servern von Youtube hergestellt. Dabei wird Youtube mitgeteilt, welche Seiten Sie besuchen. Wenn Sie in Ihrem Youtube-Account eingeloggt sind, kann Youtube Ihr Surfverhalten Ihnen persönlich zuzuordnen. Dies verhindern Sie, indem Sie sich vorher aus Ihrem Youtube-Account ausloggen.</p>
                                <p className="text-slate-600 text-sm leading-relaxed">Wird ein Youtube-Video gestartet, setzt der Anbieter Cookies ein, die Hinweise über das Nutzerverhalten sammeln.</p>
                                <p className="text-slate-600 text-sm leading-relaxed">Wer das Speichern von Cookies für das Google-Ad-Programm deaktiviert hat, wird auch beim Anschauen von Youtube-Videos mit keinen solchen Cookies rechnen müssen. Youtube legt aber auch in anderen Cookies nicht-personenbezogene Nutzungsinformationen ab. Möchten Sie dies verhindern, so müssen Sie das Speichern von Cookies im Browser blockieren.</p>
                                <p className="text-slate-600 text-sm leading-relaxed">Weitere Informationen zum Datenschutz bei „Youtube" finden Sie in der Datenschutzerklärung des Anbieters unter: <a href="https://www.google.de/intl/de/policies/privacy/" className="text-orange-600 hover:text-orange-700">https://www.google.de/intl/de/policies/privacy/</a></p>
                            </div>
                        </div>

                        <div className="border-l-4 border-slate-600 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Social Plugins</h3>
                            <div className="space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">Wir bieten Ihnen auf unserer Webseite die Möglichkeit der Nutzung von sog. „Social-Media-Buttons" an. Zum Schutze Ihrer Daten setzen wir bei der Implementierung auf die Lösung „Shariff". Hierdurch werden diese Buttons auf der Webseite lediglich als Grafik eingebunden, die eine Verlinkung auf die entsprechende Webseite des Button-Anbieters enthält. Durch Anklicken der Grafik werden Sie somit zu den Diensten der jeweiligen Anbieter weitergeleitet. Erst dann werden Ihre Daten an die jeweiligen Anbieter gesendet. Sofern Sie die Grafik nicht anklicken, findet keinerlei Austausch zwischen Ihnen und den Anbietern der Social-Media-Buttons statt. Informationen über die Erhebung und Verwendung Ihrer Daten in den sozialen Netzwerken finden Sie in den jeweiligen Nutzungsbedingungen der entsprechenden Anbieter. Mehr Informationen zur Shariff-Lösung finden Sie hier: <a href="http://www.heise.de/ct/artikel/Shariff-Social-Media-Buttons-mit-Datenschutz-2467514.html" className="text-orange-600 hover:text-orange-700">http://www.heise.de/ct/artikel/Shariff-Social-Media-Buttons-mit-Datenschutz-2467514.html</a></p>
                                <p className="text-slate-600 text-sm leading-relaxed">Wir haben auf unserer Website die Social-Media-Buttons folgender Unternehmen eingebunden: Facebook Inc. (1601 S. California Ave - Palo Alto - CA 94304 - USA)</p>
                            </div>
                        </div>

                        <div className="border-l-4 border-orange-400 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Google AdWords</h3>
                            <div className="space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">Unsere Webseite nutzt das Google Conversion-Tracking. Sind Sie über eine von Google geschaltete Anzeige auf unsere Webseite gelangt, wird von Google Adwords ein Cookie auf Ihrem Rechner gesetzt. Das Cookie für Conversion-Tracking wird gesetzt, wenn ein Nutzer auf eine von Google geschaltete Anzeige klickt. Diese Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung. Besucht der Nutzer bestimmte Seiten unserer Website und das Cookie ist noch nicht abgelaufen, können wir und Google erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder Google AdWords-Kunde erhält ein anderes Cookie. Cookies können somit nicht über die Websites von AdWords-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu, Conversion-Statistiken für AdWords-Kunden zu erstellen, die sich für Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren lassen.</p>
                                <p className="text-slate-600 text-sm leading-relaxed">Möchten Sie nicht am Tracking teilnehmen, können Sie das hierfür erforderliche Setzen eines Cookies ablehnen - etwa per Browser-Einstellung, die das automatische Setzen von Cookies generell deaktiviert oder Ihren Browser so einstellen, dass Cookies von der Domain „googleleadservices.com" blockiert werden.</p>
                                <p className="text-slate-600 text-sm leading-relaxed">Bitte beachten Sie, dass Sie die Opt-out-Cookies nicht löschen dürfen, solange Sie keine Aufzeichnung von Messdaten wünschen. Haben Sie alle Ihre Cookies im Browser gelöscht, müssen Sie das jeweilige Opt-out Cookie erneut setzen.</p>
                            </div>
                        </div>

                        <div className="border-l-4 border-slate-700 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Ihre Rechte</h3>
                            <div className="space-y-4">
                                <p className="text-slate-600 text-sm leading-relaxed">Sie haben jederzeit das Recht auf Auskunft seitens des u. a. Verantwortlichen über die betreffenden personenbezogenen Daten. Soweit keine gesetzliche Aufbewahrungspflicht besteht, haben Sie das Recht auf Löschung dieser Daten sowie Widerspruch gegen die Verarbeitung. Ferner haben Sie das Recht auf Berichtigung der Daten sowie auf Einschränkung der Verarbeitung, auf Datenübertragbarkeit sowie auf Beschwerde bei der Österreichischen Datenschutzbehörde (Wickenburggasse 8-10, 1080 Wien, E-Mail: dsb@dsb.gv.at).</p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-slate-800 mb-2">Auskunftsrecht</h4>
                                        <p className="text-slate-600 text-sm">Sie haben das Recht auf Auskunft über die von uns verarbeiteten personenbezogenen Daten.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800 mb-2">Berichtigung</h4>
                                        <p className="text-slate-600 text-sm">Sie haben das Recht auf Berichtigung unrichtiger Daten.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800 mb-2">Löschung</h4>
                                        <p className="text-slate-600 text-sm">Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800 mb-2">Widerspruch</h4>
                                        <p className="text-slate-600 text-sm">Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mt-4">Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. Ebenso haben Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von der vorgeschriebenen Datenspeicherung zur Geschäftsabwicklung, Löschung Ihrer personenbezogenen Daten. Bitte wenden Sie sich dazu an unseren Datenschutzbeauftragten unter <a href="mailto:office@promax.at" className="text-orange-600 hover:text-orange-700">office@promax.at</a>.</p>
                                <p className="text-slate-600 text-sm leading-relaxed">Damit eine Sperre von Daten jederzeit berücksichtigt werden kann, müssen diese Daten zu Kontrollzwecken in einer Sperrdatei vorgehalten werden. Sie können auch die Löschung der Daten verlangen, soweit keine gesetzliche Archivierungsverpflichtung besteht. Soweit eine solche Verpflichtung besteht, sperren wir Ihre Daten auf Wunsch.</p>
                                <p className="text-slate-600 text-sm leading-relaxed">Sie können Änderungen oder den Widerruf einer Einwilligung durch entsprechende Mitteilung an uns mit Wirkung für die Zukunft vornehmen.</p>
                            </div>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Änderung unserer Datenschutzbestimmungen</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
                        </div>

                        <div className="border-l-4 border-slate-600 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Fragen zum Datenschutz</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an unseren Verantwortlichen / Ansprechpartnerin unter <a href="mailto:office@promax.at" className="text-orange-600 hover:text-orange-700">office@promax.at</a></p>
                        </div>
                    </div>
                </section>

                <div className="text-center mt-12 pt-8 border-t border-slate-200 text-slate-500 text-sm">
                    <p>2026|PROMAX Project Management GesmbH</p>
                </div>
            </div>
        </div>
    );
};

export default Rechtliches;