import type { Metadata } from "next";
import QuizPage from "@/app/quiz/page";

export const metadata: Metadata = {
  title: "KIQ Labs — get a wholesale offer in 60 seconds",
  description:
    "Answer 5 questions and get a custom B2B price list. Vitamins, supplements and sports nutrition from US & EU.",
  alternates: {
    languages: {
      ru: "/quiz",
      en: "/en/quiz",
    },
  },
};

export default QuizPage;
