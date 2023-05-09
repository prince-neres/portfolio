import cv from "./me-cv.pdf";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/20/solid";

const DownloadCVButton = ({ title }) => {
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
    <motion.button
      className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 pl-3 pr-4 rounded flex items-center justify-center duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleDownload}
    >
      <ArrowDownIcon className="w-5" />
      {title}
    </motion.button>
  );
};

export default DownloadCVButton;
