import "../globals.css";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <div>
      <div className={`${styles["section-navy"]}`}>
        <div className="flex">
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-7xl">
              Hello!<br></br> I am Negra!
            </h1>
          </div>
          <div className="flex-1">
            <img className="aspect-video" src="hello-avatar.webp" />
          </div>
        </div>
      </div>
      <div className={`${styles["section-light-gray"]} m-1`}>
        <span className="text-2xl">Please choose how you want to meet me:</span>
        <br></br>
        <button className={`${styles["button-1"]} m-1`}>CLICK ME</button>
        <button className={`${styles["button-2"]} m-1`}>CLICK ME</button>
      </div>
      <div className="columns-2 gap-0">
        <div className={`${styles["section-soft-pink"]} m-1`}>Next section</div>

        <div className={`${styles["section-turquoise"]} m-1`}>Next section</div>
      </div>
    </div>
  );
}
