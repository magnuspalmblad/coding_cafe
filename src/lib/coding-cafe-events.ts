import rawEvents from '$lib/content/coding-cafe-events.json';

export type CodingCafeEvent = {
	id: string;
	type: 'cafe';
	title: string;
	date: string;
	location: string;
	speaker?: string;
	description: string;
	registrationLink?: string;
};

type RawCodingCafeEvent = {
	title: string;
	subtitle?: string;
	date: string;
	time?: string;
	location: string;
	speaker?: string;
	description?: string;
	slug?: string;
	registrationLink?: string;
};

const startTimeToIso = (date: string, time?: string) => {
	if (date.includes('T')) {
		return date;
	}

	const start = time?.split('-')[0]?.trim();
	const match = start?.match(/^(\d{1,2}):(\d{2})$/);

	if (!match) {
		return `${date}T16:00:00`;
	}

	const [_, hh, mm] = match;
	return `${date}T${hh.padStart(2, '0')}:${mm}:00`;
};

const events = rawEvents as RawCodingCafeEvent[];

export const codingCafeEvents: CodingCafeEvent[] = events.map((event, index) => {
	if (!event.title || !event.date || !event.location) {
		throw new Error(`Invalid coding-cafe-events.json entry at index ${index}`);
	}

	return {
		id: event.slug || `cafe-${event.date}-${index}`,
		type: 'cafe',
		title: event.subtitle ? `${event.title} ${event.subtitle}` : event.title,
		date: startTimeToIso(event.date, event.time),
		location: event.location,
		speaker: event.speaker || undefined,
		description: event.description || event.subtitle || event.title,
		registrationLink: event.registrationLink || undefined
	};
});
