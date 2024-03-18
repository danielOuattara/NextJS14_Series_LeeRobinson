type TypeQuizPage = {
  params: {
    quizId: string;
  };
};

export default function QuizPage({ params }: TypeQuizPage) {
  return (
    <section>
      <h1>quiz {params.quizId} page</h1>
    </section>
  );
}
