import SideBar from "../Components/Sidebar";
// import Quiz from "../Components/Quiz";
import Landing from "../Components/Landing";

function Home() {
  return (
    <>
      <div className=" flex flex-row mx-auto justify-evenly">
        <div>
          <SideBar />
        </div>

        <div>
          <Landing />
        </div>
      </div>
    </>
  );
}

export default Home;
