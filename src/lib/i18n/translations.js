/** @typedef {'sv' | 'en' | 'de' | 'da' | 'nl'} Locale */

/** @type {Record<Locale, {
 *   meta: { title: string; description: string };
 *   nav: { label: string; about: string; pricing: string; gallery: string; location: string; visitInfo: string; guides: string; faq: string; book: string };
 *   hero: { eyebrow: string; title: string; lead: string; cta: string; imageAlt: string };
 *   about: {
 *     title: string; tag: string; p1: string; seaPlungeBold: string; seaPlunge: string;
 *     features: string[]; imageAlt: string; imageCaption: string;
 *   };
 *   pricing: {
 *     title: string; intro: string; label: string; duration: string;
 *     includedBold: string; included: string; footnote: string; cta: string;
 *   };
 *   gallery: {
 *     title: string;
 *     captions: { sauna: string; view: string; inside: string; autumn: string; coords: string };
 *     alts: { sauna: string; view: string; inside: string; autumn: string; coords: string; bay: string; whisk: string; firewood: string; reflection: string };
 *   };
 *   location: {
 *     title: string; coords: string; directions: string; mapLink: string; plaqueAlt: string;
 *     parkingTitle: string; parking: string;
 *   };
 *   visitInfo: {
 *     title: string; intro: string;
 *     privyTitle: string; privy: string; privyLink: string;
 *     waterTitle: string; water: string;
 *     trashTitle: string; trash: string;
 *     rulesTitle: string; rules: string;
 *     heatingTitle: string; heating: string;
 *   };
 *   book: { title: string; p: string; ctaLabel: string; hint: string };
 *   guides: { title: string; intro: string; pillar: string; faq: string };
 * }>} */
export const translations = {
	sv: {
		meta: {
			title: 'Ekudden Bastu – Boka Kvädö Sauna',
			description:
				'Boka en privat vedeldad bastu med havsdopp vid Kvädö Sauna – en äkta nordisk upplevelse på svenska kusten. 2 000 kr för 4 timmar.'
		},
		nav: {
			label: 'Huvudmeny',
			about: 'Om',
			pricing: 'Priser',
			gallery: 'Galleri',
			location: 'Plats',
			visitInfo: 'Praktisk info',
			guides: 'Guider',
			faq: 'FAQ',
			book: 'Boka'
		},
		hero: {
			eyebrow: 'Välkommen till',
			title: 'Ekudden Bastu',
			lead:
				'En äkta svensk basturitual — vedeldad värme, skogens stillhet och ett dopp i Östersjön. Den nordiska upplevelsen som besökare reser långt för.',
			cta: 'Boka bastun',
			imageAlt: 'Kvädö Sauna – röd trästuga i skogen'
		},
		about: {
			title: 'Om bastun',
			tag: 'En äkta svensk upplevelse',
			p1:
				'Kvädö Sauna är en klassisk skandinavisk bastu — en röd trästuga med riktig vedeldad kamin, dubbla bänkar och utsikt över skogen. Det här är den långsamma, äkta nordiska ritualen som internationella besökare söker: inget spa-paket, utan det riktiga.',
			seaPlungeBold: 'Havsdoppet är en del av upplevelsen.',
			seaPlunge:
				'Steg från den heta bastun rakt ner i det svala Östersjövattnet — kontrasten är det som gör en svensk bastu oförglömlig. Värme, ånga, tystnad… sedan chocken av havet. Vila, upprepa.',
			features: [
				'Vedeldad kamin med bastusten (löyly)',
				'Havsdopp — direkt tillgång till Östersjön',
				'Dubbla träbänkar i traditionell stil',
				'Avskild kustmiljö i naturen'
			],
			imageAlt: 'Kvädö Sauna med utsikt mot vattnet och brygga för havsdopp',
			imageCaption: 'Utsikt mot vattnet — från bastu till hav'
		},
		pricing: {
			title: 'Pris',
			intro: 'Ett fast pris för hela bokningen, året runt och för hela ert sällskap. Bokningen omfattar 4 timmar på plats – uppvärmningen (1–2 timmar) ingår i tiden.',
			label: 'Fast pris · hela året',
			duration: 'per bokning · 4 timmar på plats',
			includedBold: 'Det här ingår:',
			included: ' privat bastu i 4 timmar, ved och uppvärmning, samt hela het–kall-ritualen med havsdopp från bryggan.',
			footnote: 'EUR- och DKK-belopp är ungefärliga riktmärken (1 EUR ≈ 11 SEK, 1 DKK ≈ 1,5 SEK). Du betalar i SEK.',
			cta: 'Kontrollera tillgänglighet & boka'
		},
		gallery: {
			title: 'Galleri',
			captions: {
				sauna: 'Bastustugan',
				view: 'Utsikt & havsdopp',
				inside: 'Vedeldad interiör',
				autumn: 'Höst vid Ekudden',
				coords: 'Plakett med koordinater'
			},
			alts: {
				sauna: 'Exteriör av Kvädö Sauna',
				view: 'Bastu med utsikt över Östersjön och träbrygga',
				inside: 'Interiör i bastun',
				autumn: 'Kvädö Sauna på hösten, gyllene ljus över vattnet',
				coords: 'Plakett med koordinater: 58.060240, 16.808000',
				bay: 'Stilla vik vid skymning med en tall på klipporna',
				whisk: 'Bastukvastar av björk och en sprakande vedeld',
				firewood: 'Kluven björkved staplad inför eldningen',
				reflection: 'Granskog som speglas i en blank sjö'
			}
		},
		location: {
			title: 'Hitta hit',
			coords: 'Kvädö Sauna ligger på koordinaterna',
			directions:
				'Använd kartlänken nedan för vägbeskrivning. Bastun ligger på en lugn sluttning ovan vattnet — följ koordinaterna och leta efter den röda stugan vid stranden.',
			mapLink: 'Öppna i Google Maps →',
			plaqueAlt: 'Plakett med koordinater, Kvädö Sauna',
			parkingTitle: 'Parkering',
			parking:
				'Parkera på fastigheten vid Ekuddevägen 10. Bastun ligger på samma tomt — följ stigen ner mot vattnet efter att du parkerat.'
		},
		visitInfo: {
			title: 'Praktisk information',
			intro: 'Det här behöver du veta inför besöket.',
			privyTitle: 'Toalett',
			privy:
				'Torrtutrustad toalett (torrtoa) finns i närheten av bastuområdet — inte i själva bastun. Se karta:',
			privyLink: 'Ekudden torrtoa på Naturkartan',
			waterTitle: 'Vatten',
			water:
				'Färskt vatten hämtas från en manuell vattenpump på fastigheten. Instruktioner finns uppsatta vid bastun.',
			trashTitle: 'Sopor',
			trash:
				'Lägg allt skräp i soptunnan i omklädningsrummet inne i bastun. Lämna inget kvar ute.',
			rulesTitle: 'Skötsel & hänsyn',
			rules:
				'Vi förväntar oss att bastun lämnas ren och snygg för nästa gäster. Var rumsren med ljudnivån — bastun ligger i ett bostadsområde och vi ber dig ta hänsyn till grannar, särskilt på kvällen.',
			heatingTitle: 'Uppvärmning & bokningstid',
			heating:
				'Det tar 1–2 timmar innan bastun är varm. Bokningen omfattar 4 timmar på plats inklusive uppvärmningen – elda direkt när du kommer, så har du resten av tiden i varm bastu.'
		},
		guides: {
			title: 'Guider & frågor',
			intro: 'Läs mer om bastu, havsbad och Kvädöfjärden innan du bokar.',
			pillar: 'Komplett guide till privat bastu & havsbad',
			faq: 'Vanliga frågor'
		},
		book: {
			title: 'Boka din session',
			p: 'Fyll i formuläret så återkommer vi med en bekräftelse. Räkna med 1–2 timmars uppvärmning före bastutiden.',
			ctaLabel: 'Skicka bokningsförfrågan',
			hint: 'Bokningen är en förfrågan – den är inte bekräftad förrän vi har svarat.'
		}
	},
	en: {
		meta: {
			title: 'Ekudden Bastu – Book Kvädö Sauna',
			description:
				'Book a private wood-fired sauna with sea plunge at Kvädö Sauna – a genuine Nordic experience on the Swedish coast. 2,000 SEK for 4 hours.'
		},
		nav: {
			label: 'Main',
			about: 'About',
			pricing: 'Pricing',
			gallery: 'Gallery',
			location: 'Location',
			visitInfo: 'Practical info',
			guides: 'Guides',
			faq: 'FAQ',
			book: 'Book'
		},
		hero: {
			eyebrow: 'Welcome to',
			title: 'Ekudden Bastu',
			lead:
				'A genuine Swedish sauna ritual — wood-fired heat, forest stillness, and a plunge in the Baltic Sea. The Nordic experience visitors travel for.',
			cta: 'Book the sauna',
			imageAlt: 'Kvädö Sauna – red wooden cabin in the forest'
		},
		about: {
			title: 'About the sauna',
			tag: 'A genuine Swedish experience',
			p1:
				'Kvädö Sauna is classic Scandinavian bastu — a red wooden cabin with a real wood-burning stove, tiered benches, and views of the surrounding forest. This is the slow, authentic Nordic ritual that international visitors seek out: not a spa package, but the real thing.',
			seaPlungeBold: 'The sea plunge is part of the experience.',
			seaPlunge:
				'Step from the hot sauna straight into the cool Baltic water — the contrast is what makes a Swedish bastu unforgettable. Heat, steam, silence… then the shock of the sea. Rest, repeat.',
			features: [
				'Wood-fired stove with sauna stones (löyly)',
				'Sea plunge — direct access to the Baltic',
				'Two-tier wooden benches in traditional style',
				'Secluded coastal setting in nature'
			],
			imageAlt: 'Kvädö Sauna overlooking the water with dock for sea plunge',
			imageCaption: 'Waterfront view — step straight from sauna to sea'
		},
		pricing: {
			title: 'Price',
			intro: 'One fixed price for the whole booking, all year round and for your whole group. Each booking covers 4 hours on site – the 1–2 hours of heating are included in that time.',
			label: 'Fixed price · all year',
			duration: 'per booking · 4 hours on site',
			includedBold: 'What\'s included:',
			included: ' 4 hours of private sauna, firewood and heating, and the full hot–cold ritual with a sea plunge from the jetty.',
			footnote: 'EUR and DKK amounts are approximate guides (1 EUR ≈ 11 SEK, 1 DKK ≈ 1.5 SEK). You pay in SEK.',
			cta: 'Check availability & book'
		},
		gallery: {
			title: 'Gallery',
			captions: {
				sauna: 'The sauna cabin',
				view: 'Waterfront view & sea plunge',
				inside: 'Wood-fired interior',
				autumn: 'Autumn at Ekudden',
				coords: 'Location plaque'
			},
			alts: {
				sauna: 'Exterior of Kvädö Sauna',
				view: 'Sauna overlooking the Baltic with wooden dock',
				inside: 'Interior of the sauna',
				autumn: 'Kvädö Sauna in autumn, golden light over the water',
				coords: 'Coordinates plaque: 58.060240, 16.808000',
				bay: 'Calm bay at dusk with a pine on the rocks',
				whisk: 'Birch sauna whisks and a crackling wood fire',
				firewood: 'Split birch firewood stacked for the stove',
				reflection: 'Spruce forest mirrored in a still lake'
			}
		},
		location: {
			title: 'Find us',
			coords: 'Kvädö Sauna is located at coordinates',
			directions:
				'Use the map link below for directions. The sauna sits on a quiet hillside above the water — follow the coordinates and look for the red cabin by the shore.',
			mapLink: 'Open in Google Maps →',
			plaqueAlt: 'Kvädö Sauna coordinates plaque',
			parkingTitle: 'Parking',
			parking:
				'Park on the property at Ekuddevägen 10. The sauna is on the same plot — follow the path down toward the water after parking.'
		},
		visitInfo: {
			title: 'Practical information',
			intro: 'What you need to know before your visit.',
			privyTitle: 'Toilet',
			privy:
				'A dry privy (composting toilet) is located near the sauna area — not inside the sauna itself. See map:',
			privyLink: 'Ekudden dry toilet on Naturkartan',
			waterTitle: 'Water',
			water:
				'Fresh water is available from a manual pump on the property. Instructions are posted at the sauna.',
			trashTitle: 'Rubbish',
			trash:
				'Please put all rubbish in the bin in the changing room inside the sauna. Do not leave anything outside.',
			rulesTitle: 'Care & consideration',
			rules:
				'We expect the sauna to be left clean and tidy for the next guests. Please keep noise levels down — the sauna is in a residential area and we ask you to be mindful of neighbours, especially in the evening.',
			heatingTitle: 'Heating & booking length',
			heating:
				'It takes 1–2 hours for the sauna to heat up. Your booking covers 4 hours on site including heating – light the stove as soon as you arrive and enjoy the rest of the time in a hot sauna.'
		},
		guides: {
			title: 'Guides & FAQ',
			intro: 'Read about the sauna, sea plunge, and Kvädöfjärden before you book.',
			pillar: 'Complete guide to private sauna & sea bathing',
			faq: 'Frequently asked questions'
		},
		book: {
			title: 'Book your session',
			p: 'Fill in the form and we will get back to you with a confirmation. Allow 1–2 hours of heating before your sauna time.',
			ctaLabel: 'Send booking request',
			hint: 'This is a booking request – it is not confirmed until we reply.'
		}
	},
	de: {
		meta: {
			title: 'Ekudden Bastu – Kvädö Sauna buchen',
			description:
				'Buchen Sie eine private Holzsauna mit Meeresbad bei Kvädö Sauna – ein authentisches nordisches Erlebnis an der schwedischen Küste. 2.000 SEK für 4 Stunden.'
		},
		nav: {
			label: 'Hauptmenü',
			about: 'Über uns',
			pricing: 'Preise',
			gallery: 'Galerie',
			location: 'Standort',
			visitInfo: 'Praktische Infos',
			guides: 'Guides',
			faq: 'FAQ',
			book: 'Buchen'
		},
		hero: {
			eyebrow: 'Willkommen bei',
			title: 'Ekudden Bastu',
			lead:
				'Eine echte schwedische Sauna — Wärme vom Holzfeuer, Stille im Wald und ein Bad in der Ostsee. Genau das nordische Ritual, wofür Gäste extra anreisen.',
			cta: 'Sauna buchen',
			imageAlt: 'Kvädö Sauna – rote Holzhütte im Wald'
		},
		about: {
			title: 'Über die Sauna',
			tag: 'Ein echtes schwedisches Erlebnis',
			p1:
				'Kvädö Sauna ist eine klassische skandinavische Bastu — eine rote Holzhütte mit echtem Holzofen, zweistufigen Bänken und Blick auf den Wald. Das ist das langsame, authentische nordische Ritual, das internationale Gäste suchen: kein Spa-Paket, sondern das Echte.',
			seaPlungeBold: 'Das Meeresbad gehört zum Erlebnis dazu.',
			seaPlunge:
				'Treten Sie aus der heißen Sauna direkt ins kühle Ostseewasser — der Kontrast macht eine schwedische Bastu unvergesslich. Hitze, Dampf, Stille… dann der Schock des Meeres. Ausruhen, wiederholen.',
			features: [
				'Holzofen mit Saunasteinen (Löyly)',
				'Meeresbad — direkter Zugang zur Ostsee',
				'Zweistufige Holzbänke im traditionellen Stil',
				'Abgeschiedene Küstenlage in der Natur'
			],
			imageAlt: 'Kvädö Sauna mit Wasserblick und Steg zum Meeresbad',
			imageCaption: 'Wasserblick — direkt von der Sauna ins Meer'
		},
		pricing: {
			title: 'Preis',
			intro: 'Ein Festpreis für die gesamte Buchung – das ganze Jahr über und für Ihre ganze Gruppe. Jede Buchung umfasst 4 Stunden vor Ort, die 1–2 Stunden Aufheizzeit sind darin enthalten.',
			label: 'Festpreis · ganzjährig',
			duration: 'pro Buchung · 4 Stunden vor Ort',
			includedBold: 'Inklusive:',
			included: ' 4 Stunden private Sauna, Brennholz und Aufheizen sowie das volle Heiß-Kalt-Ritual mit Meeresbad vom Steg.',
			footnote: 'EUR- und DKK-Beträge sind ungefähre Richtwerte (1 EUR ≈ 11 SEK, 1 DKK ≈ 1,5 SEK). Sie zahlen in SEK.',
			cta: 'Verfügbarkeit prüfen & buchen'
		},
		gallery: {
			title: 'Galerie',
			captions: {
				sauna: 'Die Sauna-Hütte',
				view: 'Wasserblick & Meeresbad',
				inside: 'Holzofen-Innenausstattung',
				autumn: 'Herbst an Ekudden',
				coords: 'Koordinaten-Plakette'
			},
			alts: {
				sauna: 'Außenansicht der Kvädö Sauna',
				view: 'Sauna mit Ostseeblick und Holzsteg',
				inside: 'Innenansicht der Sauna',
				autumn: 'Kvädö Sauna im Herbst, goldenes Licht über dem Wasser',
				coords: 'Koordinaten-Plakette: 58.060240, 16.808000',
				bay: 'Ruhige Bucht in der Dämmerung mit Kiefer auf den Felsen',
				whisk: 'Saunaquasten aus Birke und ein knisterndes Holzfeuer',
				firewood: 'Gespaltenes Birkenholz, gestapelt für den Ofen',
				reflection: 'Fichtenwald, der sich in einem stillen See spiegelt'
			}
		},
		location: {
			title: 'Anfahrt',
			coords: 'Kvädö Sauna befindet sich an den Koordinaten',
			directions:
				'Nutzen Sie den Kartlink für die Wegbeschreibung. Die Sauna liegt an einem ruhigen Hang über dem Wasser — folgen Sie den Koordinaten und suchen Sie die rote Hütte am Ufer.',
			mapLink: 'In Google Maps öffnen →',
			plaqueAlt: 'Koordinaten-Plakette, Kvädö Sauna',
			parkingTitle: 'Parken',
			parking:
				'Parken Sie auf dem Grundstück an der Ekuddevägen 10. Die Sauna liegt auf demselben Gelände — folgen Sie nach dem Parken dem Pfad zum Wasser hinunter.'
		},
		visitInfo: {
			title: 'Praktische Informationen',
			intro: 'Das sollten Sie vor Ihrem Besuch wissen.',
			privyTitle: 'Toilette',
			privy:
				'Eine Trockentoilette (Komposttoilette) befindet sich in der Nähe der Sauna — nicht in der Sauna selbst. Siehe Karte:',
			privyLink: 'Ekudden Trockentoilette auf Naturkartan',
			waterTitle: 'Wasser',
			water:
				'Frisches Wasser ist über eine manuelle Pumpe auf dem Grundstück verfügbar. Anweisungen hängen an der Sauna aus.',
			trashTitle: 'Müll',
			trash:
				'Bitte werfen Sie allen Müll in den Eimer im Umkleideraum in der Sauna. Lassen Sie nichts draußen liegen.',
			rulesTitle: 'Pflege & Rücksicht',
			rules:
				'Wir erwarten, dass die Sauna sauber und ordentlich für die nächsten Gäste hinterlassen wird. Bitte halten Sie die Lautstärke niedrig — die Sauna liegt in einem Wohngebiet und wir bitten Sie, Rücksicht auf Nachbarn zu nehmen, besonders am Abend.',
			heatingTitle: 'Aufheizen & Buchungsdauer',
			heating:
				'Es dauert 1–2 Stunden, bis die Sauna heiß ist. Ihre Buchung umfasst 4 Stunden vor Ort inklusive Aufheizen – zünden Sie den Ofen gleich bei Ankunft an und genießen Sie die restliche Zeit in der heißen Sauna.'
		},
		guides: {
			title: 'Guides & FAQ',
			intro: 'Alles Wissenswerte zu Sauna, Meeresbad und Kvädöfjärden vor der Buchung.',
			pillar: 'Ausführlicher Guide: private Sauna & Meeresbad',
			faq: 'Häufige Fragen'
		},
		book: {
			title: 'Session buchen',
			p: 'Füllen Sie das Formular aus, und wir melden uns mit einer Bestätigung. Rechnen Sie mit 1–2 Stunden Aufheizzeit vor der Saunazeit.',
			ctaLabel: 'Buchungsanfrage senden',
			hint: 'Dies ist eine Buchungsanfrage – sie ist erst nach unserer Antwort bestätigt.'
		}
	},
	nl: {
		meta: {
			title: 'Ekudden Bastu – Boek Kvädö Sauna',
			description:
				'Boek een privé houtgestookte sauna met duik in zee bij Kvädö Sauna – een authentieke Nordic ervaring aan de Zweedse kust. 2.000 SEK voor 4 uur.'
		},
		nav: {
			label: 'Hoofdmenu',
			about: 'Over',
			pricing: 'Prijzen',
			gallery: 'Galerij',
			location: 'Locatie',
			visitInfo: 'Praktische info',
			guides: 'Guides',
			faq: 'FAQ',
			book: 'Boeken'
		},
		hero: {
			eyebrow: 'Welkom bij',
			title: 'Ekudden Bastu',
			lead:
				'Een echte Zweedse sauna — houtvuur, stilte in het bos en een duik in de Oostzee. Precies de Nordic ervaring waar veel bezoekers voor komen.',
			cta: 'Boek de sauna',
			imageAlt: 'Kvädö Sauna – rode houten cabin in het bos'
		},
		about: {
			title: 'Over de sauna',
			tag: 'Een echte Zweedse ervaring',
			p1:
				'Kvädö Sauna is een klassieke Scandinavische bastu — een rode houten cabin met echte houtkachel, dubbele banken en uitzicht op het bos. Dit is het langzame, authentieke Nordic ritueel dat internationale bezoekers zoeken: geen spa-pakket, maar het echte werk.',
			seaPlungeBold: 'De duik in zee hoort bij de ervaring.',
			seaPlunge:
				'Stap vanuit de hete sauna recht het koele Oostzee-water in — het contrast maakt een Zweedse bastu onvergetelijk. Warmte, stoom, stilte… dan de schok van de zee. Rust, herhaal.',
			features: [
				'Houtkachel met saunastenen (löyly)',
				'Duik in zee — directe toegang tot de Oostzee',
				'Twee houten banken in traditionele stijl',
				'Afgesloten kustlocatie in de natuur'
			],
			imageAlt: 'Kvädö Sauna met uitzicht op het water en steiger voor zeeduik',
			imageCaption: 'Uitzicht op het water — van sauna naar zee'
		},
		pricing: {
			title: 'Prijs',
			intro: 'Eén vaste prijs voor de hele boeking, het hele jaar door en voor uw hele groep. Elke boeking omvat 4 uur ter plaatse – de 1–2 uur opwarmen zit daarbij inbegrepen.',
			label: 'Vaste prijs · hele jaar',
			duration: 'per boeking · 4 uur ter plaatse',
			includedBold: 'Inbegrepen:',
			included: ' 4 uur privé sauna, brandhout en opwarmen, en het volledige warm-koud ritueel met een duik in zee vanaf de steiger.',
			footnote: 'EUR- en DKK-bedragen zijn indicatief (1 EUR ≈ 11 SEK, 1 DKK ≈ 1,5 SEK). U betaalt in SEK.',
			cta: 'Beschikbaarheid controleren & boeken'
		},
		gallery: {
			title: 'Galerij',
			captions: {
				sauna: 'De saunacabin',
				view: 'Uitzicht & zeeduik',
				inside: 'Houtgestookte interieur',
				autumn: 'Herfst bij Ekudden',
				coords: 'Locatieplaque'
			},
			alts: {
				sauna: 'Exterieur van Kvädö Sauna',
				view: 'Sauna met uitzicht op de Oostzee en houten steiger',
				inside: 'Interieur van de sauna',
				autumn: 'Kvädö Sauna in de herfst, gouden licht over het water',
				coords: 'Coördinatenplaque: 58.060240, 16.808000',
				bay: 'Rustige baai bij schemering met een den op de rotsen',
				whisk: 'Berkentakken voor de sauna en een knapperend houtvuur',
				firewood: 'Gekloofd berkenhout, opgestapeld voor de kachel',
				reflection: 'Sparrenbos weerspiegeld in een stil meer'
			}
		},
		location: {
			title: 'Route',
			coords: 'Kvädö Sauna bevindt zich op coördinaten',
			directions:
				'Gebruik de kaartlink voor routebeschrijving. De sauna ligt op een rustige helling boven het water — volg de coördinaten en zoek de rode cabin aan de oever.',
			mapLink: 'Openen in Google Maps →',
			plaqueAlt: 'Coördinatenplaque, Kvädö Sauna',
			parkingTitle: 'Parkeren',
			parking:
				'Parkeer op het terrein aan Ekuddevägen 10. De sauna ligt op hetzelfde perceel — volg na het parkeren het pad naar het water.'
		},
		visitInfo: {
			title: 'Praktische informatie',
			intro: 'Dit moet u weten voor uw bezoek.',
			privyTitle: 'Toilet',
			privy:
				'Een droog toilet (composttoilet) bevindt zich bij het sauna-gebied — niet in de sauna zelf. Zie kaart:',
			privyLink: 'Ekudden droog toilet op Naturkartan',
			waterTitle: 'Water',
			water:
				'Vers water is beschikbaar via een handpomp op het terrein. Instructies hangen bij de sauna.',
			trashTitle: 'Afval',
			trash:
				'Gooi al het afval in de prullenbak in de kleedkamer in de sauna. Laat niets buiten achter.',
			rulesTitle: 'Onderhoud & consideratie',
			rules:
				'We verwachten dat de sauna schoon en netjes wordt achtergelaten voor de volgende gasten. Houd het geluidsniveau laag — de sauna ligt in een woonwijk en we vragen u rekening te houden met buren, vooral \'s avonds.',
			heatingTitle: 'Opwarmen & boekingsduur',
			heating:
				'Het duurt 1–2 uur voordat de sauna heet is. Uw boeking omvat 4 uur ter plaatse inclusief opwarmen – steek de kachel direct bij aankomst aan en geniet de rest van de tijd van de hete sauna.'
		},
		guides: {
			title: 'Gidsen & FAQ',
			intro: 'Lees over sauna, zeeduik en Kvädöfjärden voordat u boekt.',
			pillar: 'Volledige gids: privé sauna & zeebad',
			faq: 'Veelgestelde vragen'
		},
		book: {
			title: 'Boek uw sessie',
			p: 'Vul het formulier in en wij nemen contact op met een bevestiging. Reken op 1–2 uur opwarmen vóór de saunatijd.',
			ctaLabel: 'Boekingsverzoek versturen',
			hint: 'Dit is een boekingsverzoek – het is pas bevestigd nadat wij hebben gereageerd.'
		}
	},
	da: {
		meta: {
			title: 'Ekudden Bastu – Book Kvädö Sauna',
			description:
				'Book en privat træfyret sauna med havbad ved Kvädö Sauna – en ægte nordisk oplevelse på den svenske kyst. 2.000 SEK (ca. 1.330 DKK) for 4 timer.'
		},
		nav: {
			label: 'Hovedmenu',
			about: 'Om',
			pricing: 'Priser',
			gallery: 'Galleri',
			location: 'Placering',
			visitInfo: 'Praktisk info',
			guides: 'Guides',
			faq: 'FAQ',
			book: 'Book'
		},
		hero: {
			eyebrow: 'Velkommen til',
			title: 'Ekudden Bastu',
			lead:
				'En ægte svensk saunaoplevelse — varme fra træfyret, skovens ro og et dip i Østersøen. Netop den nordiske ritual mange rejsende søger.',
			cta: 'Book saunaen',
			imageAlt: 'Kvädö Sauna – rødt træhus ved kysten'
		},
		about: {
			title: 'Om saunen',
			tag: 'En ægte svensk oplevelse',
			p1:
				'Kvädö Sauna er en klassisk skandinavisk bastu — et rødt træhus med rigtig brændeovn, to bænkeniveauer og udsigt over skov og vand. Det er den langsomme, autentiske nordiske ritual uden spa-pakker.',
			seaPlungeBold: 'Havbadet hører med til oplevelsen.',
			seaPlunge:
				'Gå fra den varme sauna direkte ned i det kølige Østersøvand — kontrasten er det, der gør en svensk bastu mindeværdig. Varme, damp, stilhed… og så chokket fra havet. Hvil, gentag.',
			features: [
				'Brændeovn med saunasten (löyly)',
				'Havbad — direkte adgang til vandet',
				'To træbænke i traditionel stil',
				'Fredelig kystnatur'
			],
			imageAlt: 'Kvädö Sauna med udsigt over vandet og badebro',
			imageCaption: 'Udsigt mod vandet — fra sauna til hav'
		},
		pricing: {
			title: 'Pris',
			intro: 'Én fast pris for hele bookingen – hele året og for hele jeres selskab. Hver booking er 4 timer på stedet, og de 1–2 timers opvarmning er inkluderet i tiden.',
			label: 'Fast pris · hele året',
			duration: 'per booking · 4 timer på stedet',
			includedBold: 'Dette er inkluderet:',
			included: ' 4 timers privat sauna, brænde og opvarmning samt hele varme–kold-ritualen med havbad fra broen.',
			footnote: 'EUR- og DKK-beløb er vejledende (1 EUR ≈ 11 SEK, 1 DKK ≈ 1,5 SEK). I betaler i SEK.',
			cta: 'Tjek ledighed & book'
		},
		gallery: {
			title: 'Galleri',
			captions: {
				sauna: 'Saunahytten',
				view: 'Udsigt & havbad',
				inside: 'Træfyret indeni',
				autumn: 'Efterår ved Ekudden',
				coords: 'Koordinatplade'
			},
			alts: {
				sauna: 'Kvädö Sauna set udefra',
				view: 'Sauna med udsigt over Østersøen og træbro',
				inside: 'Inde i saunen',
				autumn: 'Kvädö Sauna om efteråret',
				coords: 'Koordinatplade: 58.060240, 16.808000',
				bay: 'Stille vig i skumringen med en fyr på klipperne',
				whisk: 'Saunaris af birk og et knitrende brændebål',
				firewood: 'Kløvet birkebrænde stablet til ovnen',
				reflection: 'Granskov der spejler sig i en blank sø'
			}
		},
		location: {
			title: 'Find vej',
			coords: 'Kvädö Sauna ligger på koordinaterne',
			directions:
				'Brug kortlinket herunder. Saunen ligger på en rolig skråning over vandet — følg koordinaterne og led efter det røde hus ved vandkanten.',
			mapLink: 'Åbn i Google Maps →',
			plaqueAlt: 'Koordinatplade, Kvädö Sauna',
			parkingTitle: 'Parkering',
			parking:
				'Parkér på grunden ved Ekuddevägen 10. Saunen ligger på samme grund — følg stien ned mod vandet efter parkering.'
		},
		visitInfo: {
			title: 'Praktisk information',
			intro: 'Det du bør vide inden besøget.',
			privyTitle: 'Toilet',
			privy:
				'Tørkloset (komposttoilet) findes i nærheden af saunaområdet — ikke inde i saunen. Se kort:',
			privyLink: 'Ekudden tørkloset på Naturkartan',
			waterTitle: 'Vand',
			water:
				'Friskvand hentes ved en manuel pumpe på grunden. Instruktioner hænger ved saunen.',
			trashTitle: 'Affald',
			trash:
				'Læg alt affald i skraldespanden i omklædningsrummet inde i saunen. Efterlad intet ude.',
			rulesTitle: 'Rengøring & hensyn',
			rules:
				'Vi forventer, at saunen efterlades pæn og ren til næste gæster. Hold lydniveauet nede — saunen ligger i et boligområde, og vi beder om hensyn til naboer, især om aftenen.',
			heatingTitle: 'Opvarmning & bookingtid',
			heating:
				'Det tager 1–2 timer, før saunen er varm. Bookingen er 4 timer på stedet inklusive opvarmning – tænd op, så snart I ankommer, og nyd resten af tiden i en varm sauna.'
		},
		guides: {
			title: 'Guides & spørgsmål',
			intro: 'Læs om sauna, havbad og Kvädöfjärden, før I booker.',
			pillar: 'Fuld guide til privat sauna & havbad',
			faq: 'Ofte stillede spørgsmål'
		},
		book: {
			title: 'Book jeres session',
			p: 'Udfyld formularen, så vender vi tilbage med en bekræftelse. Regn med 1–2 timers opvarmning før saunatiden.',
			ctaLabel: 'Send bookingforespørgsel',
			hint: 'Dette er en bookingforespørgsel – den er først bekræftet, når vi har svaret.'
		}
	}
};

/** @type {{ code: Locale; label: string }[]} */
export const languageOptions = [
	{ code: 'sv', label: 'SV' },
	{ code: 'en', label: 'EN' },
	{ code: 'de', label: 'DE' },
	{ code: 'da', label: 'DA' },
	{ code: 'nl', label: 'NL' }
];
