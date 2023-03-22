import { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';
import projects_en from './projects_en.json';
import projects_pt from './projects_pt.json';

const ContainerProjects = () => {
	const [language] = useContext(Context);
	const defineContent = language === 'pt-BR' ? projects_pt : projects_en
	const [content, setContent] = useState(defineContent)

	useEffect(() => {
		setContent(defineContent)
	}, [language])

	return (
		<div className='h-auto p-3 lg:px-56'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-10 md:px-32 lg:px-0'>
				{content.projects.map((project, index) =>
					<div key={index} className='text-center'>
						<div className='group'>
							<img src={project.previews[0]} className='pb-3 group-hover:hidden' />
							<img src={project.previews[1] || project.previews[0]} className='pb-3 hidden group-hover:block' />
						</div>
						<h3 className='font-bold text-sun'>{project.name}</h3>
						{project.url ? <a href={project.url} target='_blank' className='block hover:text-sun duration-100'><i>{content.titles.link}</i></a> : null}
						{project.repo ? <a href={project.repo} target='_blank' className='block hover:text-sun duration-100'><i>{content.titles.repo}</i></a> : null}
					</div>
				)}
			</div>
		</div>
	)
};

export default ContainerProjects;
