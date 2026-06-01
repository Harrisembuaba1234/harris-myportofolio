import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import projects from "../data/projectData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        My Projects
      </h2>

      <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ id, title, images }) => (
          <Link
            key={id}
            to={`/project/${id}`}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 hover:shadow-xl transition cursor-pointer block"
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full h-64 rounded-lg bg-transparent flex items-center justify-center overflow-hidden">
                    <img
                      src={img}
                      alt={`${title} screen ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <p className="mt-4 text-center text-lg font-medium text-gray-700 dark:text-gray-200">
              {title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
