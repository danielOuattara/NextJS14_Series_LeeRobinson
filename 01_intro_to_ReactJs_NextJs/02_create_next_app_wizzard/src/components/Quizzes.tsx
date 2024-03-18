import Link from "next/link";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL! as string);

type TypeQuiz = {
  quizId: string;
  title: string;
};

export default async function Quizzes() {
  const quizzes: TypeQuiz[] | [] = await sql`
        SELECT * FROM quizzes 
    `;

  return (
    <div>
      <ul>
        {quizzes.map((quiz) => (
          <li>
            <Link href={`/quiz/${quiz.quizId}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
