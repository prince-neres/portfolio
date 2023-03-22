import { formatDate, formatLocation } from '../../commons/utils.js';
import education_pt from './education_pt.json';
import education_en from './education_en.json';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context';

const ContainerEducation = () => {
	const [language] = useContext(Context);
	const defineContent = language === 'pt-BR' ? education_pt : education_en;
	const [content, setContent] = useState(defineContent);

	useEffect(() => {
		setContent(defineContent);
	}, [language]);

	return (
		<div className='h-auto p-3 lg:px-56'>
			{content.academic.map((education, index) => (
				<div key={index} className='px-10 py-4'>
					<h3 className='font-bold text-xl text-sun'>{education.institute}</h3>
					<h4 className='font-bold'>{`${education.course} · ${education.type}`}</h4>
					 <p><i>{formatLocation(education.location)}</i></p>
					<span>{`${formatDate(education.start_date)} - ${formatDate(education.end_date)}`}</span>
					<p className='indent-8 text-justify pt-2'>{education.description}</p>
					<div className='flex flex-row flex-wrap pt-2 items-center'>
						<strong>{language === 'pt-BR' ? 'Competências' : 'Skills'}:</strong>
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
			<div className='text-center py-10'>
				<a href={content.certifications.url} target='_blank'>
	        <button className='font-bold text-dark-200 dark:text-light-100 outline outline-sun p-5 rounded-full hover:p-6 hover:bg-sun hover:dark:text-dark-200 duration-300'>
						{content.certifications.title}
					</button>
				</a>
			</div>
		</div>
	)
};

export default ContainerEducation;
