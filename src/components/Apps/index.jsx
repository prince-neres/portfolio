import projectsJson from './projects.json';

const Apps = () => {
	return (
		<div className='h-auto p-3 lg:px-56'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-10 md:px-32 lg:px-0'>
				{projectsJson.map((project, index) =>
					<div key={index} className='text-center'>
						<div className='group'>
							<img src={project.previews[0]} className='pb-3 group-hover:hidden' />
							<img src={project.previews[1] || project.previews[0]} className='pb-3 hidden group-hover:block' />
						</div>
						<h3 className='font-bold text-sun'>{project.name}</h3>
						{project.url ? <a href={project.url} target='_blank' className='block hover:text-sun duration-100'><i>Link</i></a> : null}
						{project.repo ? <a href={project.repo} target='_blank' className='block hover:text-sun duration-100'><i>Repositório</i></a> : null}
					</div>
				)}
			</div>
		</div>
	)
};

export default Apps;
