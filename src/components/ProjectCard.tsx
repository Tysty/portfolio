import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

interface Props {
  title: string;
  image: string;
  desc: string | React.ReactNode;
  link: string;
}

function ProjectCard({ title, image, desc, link }: Props) {
  const navigate = useNavigate();
  return (
    <motion.div
      className="project-card"
      style={{ position: "relative" }}
      whileHover={{ scale: 1.1 }}
    >
      <div
        className="card p-2 staggered-fade"
        style={{
          height: "32rem",
        }}
      >
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{
            marginTop: "60px",
            height: "200px",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">
            <strong>{title}</strong>
          </h5>
          <p className="card-text truncate">{desc}</p>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              navigate(link);
            }}
            className="btn btn-primary"
            style={{ borderRadius: "3px" }}
          >
            Go to Project
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
export default ProjectCard;
