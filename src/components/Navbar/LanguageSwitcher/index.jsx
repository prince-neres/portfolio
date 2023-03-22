const LanguageSwitcher = ({language, setLanguage}) => {
	return (
		<span className='bg-sun mr-5 flex flex-col sm:flex-row outline outline-2 outline-light-200'>
			<button onClick={() => setLanguage('pt-BR')} className={`px-2 ${language == 'pt-BR' ? 'bg-dark-200 text-light-200' : 'bg-light-200 text-dark-200'}`}>PT</button>
			<button onClick={() => setLanguage('en-US')} className={`px-2 ${language == 'pt-BR' ? 'bg-light-200 text-dark-200' : 'bg-dark-200 text-light-200'}`}>EN</button>
		</span>
	)
};

export default LanguageSwitcher;
