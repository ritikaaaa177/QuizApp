import SideBar from "../Components/Sidebar";
// import Quiz from "../Components/Quiz";
import Landing from "../Components/Landing";
import vector from "../images/undraw_Questions_re_1fy7-removebg-preview.png";

function Home() {
  return (
    <>
      <div className=" flex flex-row mx-auto justify-evenly">
        <div>
          <SideBar />
        </div>

        <div className=" w-full flex flex-column">
          <div className="flex flex-row">
            <Landing />
            <img
              src={vector}
              width={600}
              height={500}
              className="relative left-28"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
