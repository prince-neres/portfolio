import InMaintenance from '../../assets/maintenance.png';

const Mintenance = () => {
	return (
		<div className='shadow-lg flex flex-col h-auto m-auto text-center justify-center mx-5 mb-5 bg-light-100 dark:bg-dark-200 rounded-xl py-10'>
		  <img src={InMaintenance} className='w-72 m-auto'/>
			<p className='text-3xl text-sun font-bold'>Área ainda em desenvolvimento...</p>
		</div>
	)
}

export default Mintenance;
