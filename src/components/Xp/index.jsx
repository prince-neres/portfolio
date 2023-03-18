import XpJSON from './xp.json';

const Xp = () => {
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

	return (
		<div className='h-auto mx-5 mb-5 py-5 lg:px-56'>
			{XpJSON.map((xp, index) => (
				<div key={index} className='px-10 py-4'>
					<h3 className='font-bold text-xl text-sun'>{xp.office}</h3>
					<h4>{`${xp.company} · ${xp.type}`}</h4>
					 <p><i>{formatLocation(xp.location)}</i></p>
					<span>{`${formatDate(xp.start_date)} - ${formatDate(xp.end_date)} - ${monthsDiff(xp.start_date, xp.end_date)} meses`}</span>
					<p className='indent-8 text-justify pt-2'>{xp.description}</p>
					<div className='flex flex-row flex-wrap pt-2 items-center'>
						<strong>Competências: </strong>
						{xp.skills.map((skill, index) =>
							<div key={index} className='my-3'>
								<span className='p-2 bg-sun rounded-full text-dark-200 font-fira text-base mx-2'>
									{`${skill}`}
								</span>
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	)
};

export default Xp;
