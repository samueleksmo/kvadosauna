/** Labels and messages for the booking request form. */
/** @type {Record<import('./translations.js').Locale, Record<string, string>>} */
export const bookingForm = {
	sv: {
		name: 'Namn',
		email: 'E-post',
		phone: 'Telefon',
		date: 'Önskat datum',
		arrival: 'Ankomsttid (för uppvärmning)',
		guests: 'Antal gäster',
		message: 'Meddelande (valfritt)',
		messagePlaceholder: 'T.ex. önskad bastutid, frågor eller önskemål',
		sending: 'Skickar…',
		success: 'Tack! Din förfrågan är skickad. Vi återkommer så snart vi kan för att bekräfta.',
		error: 'Något gick fel. Försök igen eller kontakta oss direkt.',
		invalid: 'Kontrollera att alla obligatoriska fält är korrekt ifyllda.'
	},
	en: {
		name: 'Name',
		email: 'Email',
		phone: 'Phone',
		date: 'Preferred date',
		arrival: 'Arrival time (for heating)',
		guests: 'Number of guests',
		message: 'Message (optional)',
		messagePlaceholder: 'E.g. preferred sauna time, questions or requests',
		sending: 'Sending…',
		success: 'Thank you! Your request has been sent. We will get back to you as soon as we can to confirm.',
		error: 'Something went wrong. Please try again or contact us directly.',
		invalid: 'Please check that all required fields are filled in correctly.'
	},
	de: {
		name: 'Name',
		email: 'E-Mail',
		phone: 'Telefon',
		date: 'Wunschdatum',
		arrival: 'Ankunftszeit (zum Aufheizen)',
		guests: 'Anzahl Gäste',
		message: 'Nachricht (optional)',
		messagePlaceholder: 'Z. B. gewünschte Saunazeit, Fragen oder Wünsche',
		sending: 'Wird gesendet…',
		success: 'Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns so bald wie möglich zur Bestätigung.',
		error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
		invalid: 'Bitte prüfen Sie, ob alle Pflichtfelder korrekt ausgefüllt sind.'
	},
	nl: {
		name: 'Naam',
		email: 'E-mail',
		phone: 'Telefoon',
		date: 'Gewenste datum',
		arrival: 'Aankomsttijd (voor opwarmen)',
		guests: 'Aantal gasten',
		message: 'Bericht (optioneel)',
		messagePlaceholder: 'Bijv. gewenste saunatijd, vragen of wensen',
		sending: 'Verzenden…',
		success: 'Bedankt! Uw verzoek is verzonden. Wij nemen zo snel mogelijk contact op ter bevestiging.',
		error: 'Er ging iets mis. Probeer het opnieuw of neem rechtstreeks contact met ons op.',
		invalid: 'Controleer of alle verplichte velden correct zijn ingevuld.'
	},
	da: {
		name: 'Navn',
		email: 'E-mail',
		phone: 'Telefon',
		date: 'Ønsket dato',
		arrival: 'Ankomsttid (til opvarmning)',
		guests: 'Antal gæster',
		message: 'Besked (valgfri)',
		messagePlaceholder: 'F.eks. ønsket saunatid, spørgsmål eller ønsker',
		sending: 'Sender…',
		success: 'Tak! Din forespørgsel er sendt. Vi vender tilbage hurtigst muligt for at bekræfte.',
		error: 'Noget gik galt. Prøv igen eller kontakt os direkte.',
		invalid: 'Kontrollér, at alle obligatoriske felter er udfyldt korrekt.'
	}
};
