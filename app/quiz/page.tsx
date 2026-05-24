import type { Metadata } from "next";
import { QuizFlow } from "@/components/quiz/quiz-flow";

export const metadata: Metadata = {
  title: "KIQ Labs — подберите оптовое предложение за 60 секунд",
  description:
    "Ответьте на 5 вопросов — получите персональный B2B-прайс под ваш бизнес. Витамины, БАДы, спортпит из США и ЕС.",
};

export default function QuizPage() {
  return <QuizFlow />;
}
