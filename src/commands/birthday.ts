import { resultBirthDays } from '../util/GoogleSheetManage.ts';
import countDown from '../util/coutdown.ts';
import { toDateString, toMoment } from '../util/toDate.ts';
import type { Command } from './index.ts';
import _ from 'lodash';
import axios from 'axios';

export default {
	data: {
		name: 'birthday',
		description: 'Show the birthday of friends.',
	},
	async execute(interaction) {
		const { data: resultUrl } = await axios.get(process.env.BIRTHDAY_JSON_URL!);

		const result = JSON.parse(resultUrl.files['birthday.json'].content);

		await interaction.reply({
			embeds: [
				{
					title: 'Birthdays',
					fields: _.orderBy(result, (e) => toDateString(e.birthday)).map((row) => ({
						name: `${row.name}`,
						value: `🎂 **${toMoment(row.birthday).format('DD MMM')}** (${countDown(row.birthday).asDays().toFixed(0)} days)`,
					})),
					color: 0x0099ff,
				},
			],
		});
	},
} satisfies Command;
