import Sidebar from "../Components/Sidebar";

function Home() {
  return (
    <>
      {/* Building Container for the chat  */}

      <body>
        <main id="content" role="main">
          <div class="max-w-[100rem] mx-auto min-h-screen py-10 px-4 sm:px-6 lg:px-8  bg-white">
            <Sidebar />
          </div>
        </main>
      </body>
    </>
  );
}

export default Home;
