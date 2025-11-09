import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm p-4">
      <motion.div
        className="relative max-w-xl w-full max-h-[90vh] border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-hidden flex flex-col"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-3 right-3 bg-midnight hover:bg-gray-500 z-10"
        >
          <img src="assets/close.svg" className="w-5 h-5" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl object-cover h-48" />
        <div className="p-4 overflow-y-auto flex-1">
          <h5 className="mb-2 text-xl font-bold text-white">{title}</h5>
          <p className="mb-2 text-sm font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-2 text-sm font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-3 pt-2 border-t border-white/10">
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-8 hover-animation"
                />
              ))}
            </div>
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium cursor-pointer hover-animation text-white"
            >
              View Project{" "}
              <img src="assets/arrow-up.svg" className="size-3" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
