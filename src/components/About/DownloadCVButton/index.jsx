import { LinkIcon } from "@heroicons/react/20/solid";

const DownloadCVButton = ({ title }) => {
  const cvUrl =
    "https://wallboxbucket.s3.sa-east-1.amazonaws.com/portfolio/cv-prince-neres.pdf";
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob(["Hello, world!"], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = cv;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <a
      className="bg-light-bghover dark:bg-dark-bghover p-3 rounded hover:text-purple_ flex items-center justify-center gap-2	duration-200 hover:scale-110"
      onClick={handleDownload}
      href={cvUrl}
      target="_blank"
    >
      <LinkIcon className="w-5" />
      {title}
    </a>
  );
};

export default DownloadCVButton;
