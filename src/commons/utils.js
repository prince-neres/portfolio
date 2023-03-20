const ptbrMonths = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];

const formatDate = (date) => {
	const dateObj = new Date(date);
	const day = dateObj.getDate();
	const month = ptbrMonths[dateObj.getMonth()];
	const year = dateObj.getFullYear();
	return `${day} de ${month} de ${year}`;
};

const formatLocation = ({city, state, country}) => `${city}, ${state}, ${country}`;

const monthsDiff = (startDate, endDate) => {
		const startDateObj = new Date(startDate);
		const endDateObj = new Date(endDate);
		var months;
		months = (endDateObj.getFullYear() - startDateObj.getFullYear()) * 12;
		months -= startDateObj.getMonth();
		months += endDateObj.getMonth();
		return months <= 0 ? 0 : months+1;
};

export { ptbrMonths, formatDate, formatLocation, monthsDiff };
