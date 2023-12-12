import QuizSection from "./QuizSection";

function Quiz() {
  return (
    <>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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
        </div>
      </div>
    </>
  );
}

export default Quiz;
