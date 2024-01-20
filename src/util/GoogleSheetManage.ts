import { google } from 'googleapis';
import { auth } from './GoogleSheet';

const service = google.sheets({ version: 'v4', auth: auth });

export const resultBirthDays = async () => {
	const result = await service.spreadsheets.values.get({
		spreadsheetId: process.env.SPREADS_SHEET_ID,
		range: 'birthdays!A2:E100',
	});

	const allBirthDay = result.data.values.map((row) => {
		return {
			name: row[0],
			birthday: row[1],
		};
	});
	return allBirthDay;
};

export const resultNotify = async () => {
	const result = await service.spreadsheets.values.get({
		spreadsheetId: process.env.SPREADS_SHEET_ID,
		range: 'notify-birthday!A2:C100',
	});

	const allServerNotify = result.data.values.map((row) => {
		return {
			server_id: row[0],
			channel_id: row[1],
			info: row[2],
		};
	});
	return allServerNotify;
};
