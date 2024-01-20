import { Events } from 'discord.js';
import { google } from 'googleapis';
import { Event } from './index.ts';

export default {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client;

		// try {
		// 	console.log(await resultNotify());
		// } catch (err) {
		// 	// TODO (developer) - Handle exception
		// 	throw err;
		// }
	},
} satisfies Event<Events.ClientReady>;
