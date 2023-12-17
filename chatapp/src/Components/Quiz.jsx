import QuizSection from "./QuizSection";
import vector1 from "../images/undraw_Coding_re_iv62-removebg-preview.png";
import vector2 from "../images/undraw_Programmer_re_owql-removebg-preview.png";

function Quiz() {
  return (
    <>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 relative left-44 top-20 flex flex-row ">
        <div>
          <img
            src={vector1}
            alt=""
            width={300}
            height={220}
            className="relative bottom-28 right-11"
          />
        </div>
        <div className="flex flex-col">
          <div class="mt-5 max-w-2xl text-center mx-auto bottom-24 relative left-2 ">
            <h1 class="block font-bold text-gray-800 md:text-5xl lg:text-4xl dark:text-gray-200 text-center ">
              Build Knowledge
              <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                Quiz Smarter
              </span>
            </h1>

            <div class="mt-5 max-w-3xl text-center mx-auto">
              <p class="text-lg text-gray-600 dark:text-gray-400">
                Preline UI is an open-source set of prebuilt UI components,
                ready-to-use examples and Figma design system based on the
                utility-first Tailwind CSS framework.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            src={vector2}
            alt=""
            width={250}
            height={100}
            className="relative bottom-28 left-14"
          />
        </div>
      </div>

      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative left-44 bottom-24">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <QuizSection />
          <QuizSection />
          <QuizSection />
          <QuizSection />
          <QuizSection />
          <QuizSection />
          <QuizSection />
          <QuizSection />
          <QuizSection />
          <QuizSection />
          <QuizSection />
          <QuizSection />
          <QuizSection />
          <QuizSection />
          <QuizSection />
        </div>
      </div>
    </>
  );
}

export default Quiz;
