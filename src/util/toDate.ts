import moment from 'moment';

const toDateString = (birth_date: string) => {
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
	return moment(result).format('YYYYMMDD');
};

const toMoment = (birth_date: string) => {
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
	return moment(result);
};

export { toDateString, toMoment };
