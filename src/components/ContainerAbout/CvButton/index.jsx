import MeCV from "./me-cv.pdf";

function CvButton({ title }) {
  return (
    <a
      href={MeCV}
      className="font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer text-blue_ dark:text-yellow_	"
      download
    >
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span className="group-hover:text-lg">{title}</span>
    </a>
  );
}

export default CvButton;