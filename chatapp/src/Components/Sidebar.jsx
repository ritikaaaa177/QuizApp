import Navbar from "./Navbar";

function Sidebar() {
  return (
    <>
      <div
        id="docs-sidebar"
        class="hs-overlay fixed top-0 start-0 bottom-0 z-[60] w-96 pt-7 pb-10 overflow-y-auto bg-purple-500"
      >
        <Navbar />
      </div>
    </>
  );
}

export default Sidebar;
