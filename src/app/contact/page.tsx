import Link from "next/link";
import Counter from "../counter/counter";

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <div className="text-5xl font-extrabold ...">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Hello world
        </span>
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        <h1>This is my contact page!</h1>
        <Counter></Counter>
        <div className="columns-2 md:columns-3 hover:gap-5">
          <p>Column 1</p>
          <p>Column 2</p>
          <p>Column 3</p>
          <p>Column 1</p>
          <p>Column 2</p>
          <p>Column 3</p>
        </div>
        <div className="columns-3">
          <p>HEY 5</p>
          <p>HELLO 6</p>
        </div>
        <div>
          <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
            Hello
            <br />
            World
          </span>
          <br />
          <div className="box-decoration-clone hover:box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
            Hello
            <br />
            World
          </div>
        </div>
        <div className="font-mono">
          When controlling the flow of text, using the CSS property
          <span className="inline bg-gradient-to-r from-indigo-600 to-pink-500">
            display: inline
          </span>
          will cause the text inside the element to wrap normally. While using
          the property{" "}
          <span className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500">
            display: inline-block
          </span>
          will wrap the element to prevent the text inside from extending beyond
          its parent. Lastly, using the property
          <span className="block bg-gradient-to-r from-indigo-600 to-pink-500">
            display: block
          </span>
          will put the element on its own line and fill its parent.
        </div>

        <div className="flex items-center">
          <div>
            <strong>Andrew Alfred</strong>
            <br></br>
            <span>Technical advisor</span>
          </div>
        </div>
        <h3>
          <Link href="/" className="font-bold underline">
            Back to home
          </Link>
        </h3>
      </div>
      <span className="flex grid-cols-3 gap-4 m-4 hover:hidden">
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
      </span>
      <span className="inline-grid grid-cols-3 gap-4">
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
      </span>

      <div className="table w-full ...">
        <div className="table-header-group ...">
          <div className="table-row">
            <div className="table-cell text-left ...">Song</div>
            <div className="table-cell text-left ...">Artist</div>
            <div className="table-cell text-left ...">Year</div>
          </div>
        </div>
        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell ...">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </div>
            <div className="table-cell ...">Malcolm Lockyer</div>
            <div className="table-cell ...">1961</div>
          </div>
          <div className="table-row">
            <div className="table-cell ...">Witchy Woman</div>
            <div className="table-cell ...">The Eagles</div>
            <div className="table-cell ...">1972</div>
          </div>
          <div className="table-row">
            <div className="table-cell ...">Shining Star</div>
            <div className="table-cell ...">Earth, Wind, and Fire</div>
            <div className="table-cell ...">1975</div>
          </div>
        </div>
      </div>
    </div>
  );
}
