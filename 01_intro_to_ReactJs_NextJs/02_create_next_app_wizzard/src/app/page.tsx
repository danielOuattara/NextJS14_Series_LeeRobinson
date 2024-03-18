import Quizzes from "@/components/Quizzes";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1>All Quizzes</h1>
      <Quizzes />
    </section>
  );
}
