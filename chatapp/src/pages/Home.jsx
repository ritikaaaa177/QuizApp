import SideBar from "../Components/Sidebar";
import Quiz from "../Components/Quiz";

function Home() {
  return (
    <>
      <div className=" flex flex-row mx-auto justify-evenly">
        <div>
          <SideBar />
        </div>

        <div>
          <Quiz />
        </div>
      </div>
    </>
  );
}

export default Home;
