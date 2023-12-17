import SideBar from "../Components/Sidebar";
import Quiz from "../Components/Quiz";
import Landing from "../Components/Landing";
import vector from "../images/undraw_Questions_re_1fy7-removebg-preview.png";

function Home() {
  return (
    <div>
      <div className=" flex flex-row mx-auto justify-evenly">
        {/* <div>
          <SideBar />
        </div> */}

        <div className="first w-full h-98 bg-blue-950 flex flex-column">
          <div className=" h-96 relative bottom-6 ">
            <Quiz />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
