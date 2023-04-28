function CertificatesButton({ url, title }) {
  return (
    <a
      href={url}
      target="_blank"
      className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue_ dark:text-yellow_ transition duration-300 ease-out border-2 border-blue_ dark:border-yellow_ rounded-full shadow-md group"
    >
      <span className="absolute inset-0 flex items-center w-full justify-center text-sun duration-300 -translate-x-full	 group-hover:translate-x-0 ease">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      </span>
      <span className="absolute font-bold flex items-center justify-center w-full h-full text-sun transition-all duration-300 transform group-hover:translate-x-full ease">
        {title}
      </span>
      <span className="relative invisible">{title}</span>
    </a>
  );
}

export default CertificatesButton;
