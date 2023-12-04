function Home() {
  return (
    <>
      {/* Building Container for the chat  */}

      <body>
        <main id="content" role="main">
          <div class="max-w-[100rem] mx-auto min-h-screen py-10 px-4 sm:px-6 lg:px-8  bg-white">
            <div
              id="docs-sidebar"
              class="hs-overlay fixed top-0 start-0 bottom-0 z-[60] w-96 pt-7 pb-10 overflow-y-auto bg-purple-500"
            ></div>
          </div>
        </main>
      </body>
    </>
  );
}

export default Home;
