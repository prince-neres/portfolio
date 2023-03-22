const ptbrMonths = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const enusMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const formatDate = (date, language) => {
	const dateObj = new Date(date);
	const day = dateObj.getDate();
	const month = language === 'pt-BR' ? ptbrMonths[dateObj.getMonth()] : enusMonths[dateObj.getMonth()];
	const year = dateObj.getFullYear();
	const response = language === 'pt-BR' ? `${day} de ${month} de ${year}` : `${month} ${day}, ${year}`;
	return response;
};

const formatLocation = ({city, state, country}) => `${city}, ${state}, ${country}`;

const monthsDiff = (startDate, endDate, language) => {
		const startDateObj = new Date(startDate);
		const endDateObj = new Date(endDate);
		var months;
		months = (endDateObj.getFullYear() - startDateObj.getFullYear()) * 12;
		months -= startDateObj.getMonth();
		months += endDateObj.getMonth();
		const months_count = months <= 0 ? 0 : months + 1;
		const response = `${months_count} ${language === 'pt-BR' ? 'meses' : 'months'}`;
		return response;
};

export { ptbrMonths, formatDate, formatLocation, monthsDiff };
