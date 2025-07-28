import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";

const ProjectsCarousel = ({ projects }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (isMobile) {
    return (
      <div className="px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, key) => (
        <ProjectCard project={project} key={key} />
      ))}
    </div>
  );
};

export default ProjectsCarousel;

