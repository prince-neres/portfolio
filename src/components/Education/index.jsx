import { formatDate, formatLocation } from '../../commons/utils.js';
import educationJson from './education.json';

const Education = () => {
	return (
		<div className='h-auto p-5 lg:px-56'>
			{educationJson.academic.map((education, index) => (
				<div key={index} className='px-10 py-4'>
					<h3 className='font-bold text-xl text-sun'>{education.institute}</h3>
					<h4 className='font-bold'>{`${education.course} · ${education.type}`}</h4>
					 <p><i>{formatLocation(education.location)}</i></p>
					<span>{`${formatDate(education.start_date)} - ${formatDate(education.end_date)}`}</span>
					<p className='indent-8 text-justify pt-2'>{education.description}</p>
					<div className='flex flex-row flex-wrap pt-2 items-center'>
						<strong>Competências: </strong>
						{education.teachings.map((teaching, index) =>
							<div key={index} className='my-3'>
								<span className='p-2 bg-sun rounded-full text-dark-200 font-fira text-base mx-2'>
									{`${teaching}`}
								</span>
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	)
};

export default Education;
