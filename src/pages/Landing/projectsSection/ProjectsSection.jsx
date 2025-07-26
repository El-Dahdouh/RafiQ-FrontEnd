import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProjectsSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import teamPhoto from "../../../../public/assets/imgs/StudentsCollaborating.jpg";

const fakePosts = [
  {
    id: 1,
    author: "Ahmed Hassan",
    rating: 4.5,
    timeAgo: "2 hours ago",
    title: "Mobile App for Task Management",
    description:
      "We need a mobile developer to build a simple and efficient task management app for students",
    tags: ["React Native", "Firebase", "UI/UX"],
    status: "Open",
    isTranslation: true,
    authorImg: teamPhoto,
  },
  {
    id: 2,
    author: "Sara Johnson",
    rating: 4.8,
    timeAgo: "1 day ago",
    title: "Travel Planning Website",
    description:
      "Looking for a developer to create a website where students can share and plan travel itineraries",
    tags: ["Next.js", "MongoDB", "TailwindCSS"],
    status: "Closed",
    isTranslation: false,
    authorImg: teamPhoto,
  },
  {
    id: 3,
    author: "Mohammed Ali",
    rating: 4.7,
    timeAgo: "3 hours ago",
    title: "Educational Quiz Platform",
    description:
      "Seeking a full-stack developer to build an interactive quiz platform for online learning",
    tags: ["Vue.js", "Node.js", "PostgreSQL"],
    status: "Open",
    isTranslation: true,
    authorImg: teamPhoto,
  },
  {
    id: 4,
    author: "Emily Carter",
    rating: 4.9,
    timeAgo: "2 days ago",
    title: "E-commerce Store for Handmade Crafts",
    description:
      "Need a developer to create an e-commerce platform to sell handmade crafts with a focus on user experience",
    tags: ["Shopify", "JavaScript", "CSS"],
    status: "Closed",
    isTranslation: false,
    authorImg: teamPhoto,
  },
  {
    id: 5,
    author: "Omar Khaled",
    rating: 4.6,
    timeAgo: "5 hours ago",
    title: "Fitness Tracking Mobile App",
    description:
      "Looking for a mobile developer to create a fitness app with workout tracking and gamification features",
    tags: ["Flutter", "Firebase", "API Integration"],
    status: "Open",
    isTranslation: true,
    authorImg: teamPhoto,
  },
  {
    id: 6,
    author: "Layla Brown",
    rating: 4.8,
    timeAgo: "1 day ago",
    title: "Portfolio Website for Freelancers",
    description:
      "Need a web developer to design a sleek portfolio website for freelancers to showcase their work",
    tags: ["React", "Gatsby", "GraphQL"],
    status: "Closed",
    isTranslation: false,
    authorImg: teamPhoto,
  },
  {
    id: 7,
    author: "Fatima Zahra",
    rating: 4.4,
    timeAgo: "4 hours ago",
    title: "AI-Powered Study Buddy Chatbot",
    description:
      "Seeking a developer to build an AI chatbot to assist students with study planning and resources",
    tags: ["Python", "TensorFlow", "Dialogflow"],
    status: "Open",
    isTranslation: true,
    authorImg: teamPhoto,
  },
  {
    id: 8,
    author: "James Wilson",
    rating: 4.9,
    timeAgo: "3 days ago",
    title: "Event Management Platform",
    description:
      "Looking for a developer to create a platform for organizing and promoting student events",
    tags: ["Django", "PostgreSQL", "Bootstrap"],
    status: "Closed",
    isTranslation: false,
    authorImg: teamPhoto,
  },
  {
    id: 9,
    author: "Aisha Rahman",
    rating: 4.7,
    timeAgo: "6 hours ago",
    title: "Language Learning App",
    description:
      "Need a mobile developer to create an app for interactive language learning with speech recognition",
    tags: ["React Native", "AWS", "Speech-to-Text"],
    status: "Open",
    isTranslation: true,
    authorImg: teamPhoto,
  },
  {
    id: 10,
    author: "David Lee",
    rating: 4.8,
    timeAgo: "2 days ago",
    title: "Virtual Study Room Platform",
    description:
      "Seeking a developer to build a web app for virtual study rooms with video and collaboration tools",
    tags: ["WebRTC", "Node.js", "React"],
    status: "Closed",
    isTranslation: false,
    authorImg: teamPhoto,
  },
  {
    id: 11,
    author: "Nour El-Din",
    rating: 4.6,
    timeAgo: "1 hour ago",
    title: "Crowdfunding Platform for Student Projects",
    description:
      "Looking for a developer to create a crowdfunding site to support student-led projects and innovations",
    tags: ["Laravel", "MySQL", "Stripe"],
    status: "Open",
    isTranslation: true,
    authorImg: teamPhoto,
  },
];

const ProjectsSection = () => {
  return (
    <div className="div trip" id="trips">
      <div className="title">
        <h1>Explore Our Projects</h1>
        <p>
          Discover innovative student projects and collaborate to bring your
          ideas to life.
        </p>
      </div>
      <div className="row">
        <Swiper
          effect="cards"
          grabCursor={true}
          autoplay={{
            delay: 60000,
            disableOnInteraction: false,
          }}
          cardsEffect={{
            perSlideOffset: 8,
            perSlideRotate: 2,
            rotate: true,
            slideShadows: true,
          }}
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[EffectCards, Navigation, Pagination, Autoplay]}
          className="swiper-container mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          {fakePosts.map((post) => (
            <SwiperSlide key={post.id} className="swiper-slide">
              <div className="post-card">
                <div className="post-header">
                  <img
                    src={post.authorImg}
                    alt={post.author}
                    className="post-author-image"
                  />
                  <div className="post-header-text">
                    <h4 className="post-author-name">{post.author}</h4>
                    <div className="post-meta">
                      <span className="post-rating">{post.rating} ⭐</span>
                      <span className="post-time">{post.timeAgo}</span>
                    </div>
                  </div>
                </div>
                <img
                  src={post.authorImg}
                  alt={post.author}
                  className="post-image"
                />
                <div className="post-content">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">{post.description}</p>
                  <div className="post-footer">
                    <p className="post-status">
                      <strong>Status:</strong>
                      <span
                        className={
                          post.status === "Open"
                            ? "status-open"
                            : "status-closed"
                        }
                      >
                        {post.status}
                      </span>
                    </p>
                    <div className="post-tags">
                      <strong>Tags:</strong>
                      {post.tags.map((tag, index) => (
                        <span key={index} className="tag">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Link to={`/login`} className="btn">
                  View Details
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination"></div>
        <div className="custom-next">
          <ArrowRight className="swiper-icon" />
        </div>
        <div className="custom-prev">
          <ArrowLeft className="swiper-icon" />
        </div>
      </div>
      <div className="explore">
        <Link to="/login" className="btn">
          Explore All Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
