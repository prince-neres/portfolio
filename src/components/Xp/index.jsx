import { formatDate, formatLocation, monthsDiff } from '../../commons/utils.js';
import XpJSON from './xp.json';

const Xp = () => {
	return (
		<div className='h-auto p-3 lg:px-72'>
			{XpJSON.map((xp, index) => (
				<div key={index} className='px-10 py-4'>
					<h3 className='font-bold text-xl text-sun'>{xp.office}</h3>
					<h4 className='font-bold'>{`${xp.company} · ${xp.type}`}</h4>
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
