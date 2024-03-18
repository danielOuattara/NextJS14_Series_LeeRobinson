import { Header } from "./components/Header";
import { Tweet } from "react-tweet";

export default function HomePage() {
  return (
    <div>
      <Header subject="Next.js" />
      <h2>Main page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ullam
        quibusdam non.
      </p>
      <Tweet id="1721221768013119762" />
    </div>
  );
}
