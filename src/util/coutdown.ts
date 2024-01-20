import moment from 'moment';

const countDown = (birth_date: string) => {
	let result: null | Date = null;
	if (moment(birth_date, 'DD-MM').isSame(moment(), 'day')) {
		result = moment(birth_date, 'DD-MM').toDate();
	} else if (moment(birth_date, 'DD-MM').isAfter(moment(), 'day')) {
		result = moment(birth_date, 'DD-MM').toDate();
	} else if (moment(birth_date, 'DD-MM').isBefore(moment(), 'day')) {
		result = moment(birth_date, 'DD-MM').add(1, 'year').toDate();
	} else {
		result = moment(birth_date, 'DD-MM').add(1, 'year').toDate();
	}

	let duration = moment.duration(moment(result).diff(moment()));

	return duration;
};

export default countDown;
