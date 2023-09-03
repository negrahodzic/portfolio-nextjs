import styles from "./project-preview.module.css";
interface ProjectCardProps {
  title: string;
  techStack: string[];
  problemSolved: string;
  previewImage: string;
  link: string;
  goals: string[];
}

export default function ProjectPreview({
  title,
  techStack,
  problemSolved,
  previewImage,
  link,
  goals,
}: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <h3>{title}</h3>
      <img
        src={previewImage}
        alt={`${title} Preview`}
        className={styles.projectPreview}
      />
      <p>{problemSolved}</p>
      <ul>
        <li>
          <strong>Tech Stack:</strong> {techStack.join(", ")}
        </li>
        <li>
          <strong>Problem Solved:</strong> {problemSolved}
        </li>
        <li>
          <strong>Goals:</strong> {goals.join(", ")}
        </li>
      </ul>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectLink}
      >
        View Project
      </a>
    </div>
  );
}
