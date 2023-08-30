import Link from "next/link";
import "../globals.css";
import styles from "./example.module.css";

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      {/* Navbar */}
      <div className={styles.navbar}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
      </div>

      {/* Hero Section */}
      <section className="text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Hello, I'm [Your Name]
        </span>
      </section>

      {/* Buttons */}
      <div className="flex space-x-4 mt-4">
        <button className={styles["button-1"]}>Contact Me</button>
        <button className={styles["button-2"]}>See Projects</button>
        <button className={styles["button-3"]}>Blog</button>
        <button className={styles["button-4"]}>About</button>
      </div>

      {/* Portfolio Section */}
      <section className={styles["section-light"]}>
        <h1 className={styles.title}>Portfolio</h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className={styles["card-1"]}>
            <h2>Card 1</h2>
            <button className={styles["button-1"]}>Learn More</button>
          </div>
          {/* Add other cards with different styles */}
        </div>
      </section>

      {/* About Me Section */}
      <section className={styles["section-dark"]}>
        <h2>About Me</h2>
        <p>Your bio here.</p>
      </section>

      {/* Section Light */}
      <div className={styles["section-light"]}>
        <h1 className={styles.title}>Light Section</h1>

        {/* Card 1 */}
        <div className={styles["card-1"]}>
          <h2>Card 1</h2>
          <button className={styles["button-1"]}>Button 1</button>
        </div>

        {/* Card 2 */}
        <div className={styles["card-2"]}>
          <h2>Card 2</h2>
          <button className={styles["button-2"]}>Button 2</button>
        </div>

        {/* Card 3 */}
        <div className={styles["card-3"]}>
          <h2>Card 3</h2>
          <button className={styles["button-3"]}>Button 3</button>
        </div>
      </div>

      {/* Section Dark */}
      <div className={styles["section-dark"]}>
        <h1 className={styles.title}>Dark Section</h1>

        {/* Card 4 */}
        <div className={styles["card-4"]}>
          <h2>Card 4</h2>
          <button className={styles["button-4"]}>Button 4</button>
        </div>

        {/* Card 1 with Button 4 */}
        <div className={styles["card-1"]}>
          <h2>Card 1</h2>
          <button className={styles["button-4"]}>Button 4</button>
        </div>

        {/* Card 2 with Button 3 */}
        <div className={styles["card-2"]}>
          <h2>Card 2</h2>
          <button className={styles["button-3"]}>Button 3</button>
        </div>

        {/* Card 3 with Button 1 */}
        <div className={styles["card-3"]}>
          <h2>Card 3</h2>
          <button className={styles["button-1"]}>Button 1</button>
        </div>
      </div>
    </div>
  );
}
