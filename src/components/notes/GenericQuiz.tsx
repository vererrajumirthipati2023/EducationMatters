"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, Trophy, Sparkles } from "lucide-react";
import { QuizQuestion } from "@/lib/db/notes-types";

interface GenericQuizProps {
  questions: QuizQuestion[];
}

export function GenericQuiz({ questions }: GenericQuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!questions || questions.length === 0) return null;

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === questions[currentQ].correctOptionIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="my-10 max-w-2xl w-full mx-auto p-8 sm:p-12 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm not-prose min-h-[350px]">
        <div className="bg-emerald-100 h-16 w-16 rounded-full flex items-center justify-center mb-4">
          <Trophy className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#0f2b5c] mb-2">
          Quiz Completed!
        </h3>
        <p className="text-emerald-800 text-lg font-medium mb-4">
          You scored <strong className="text-3xl text-emerald-600">{score}</strong> out of {questions.length}.
        </p>
        <p className="text-slate-600 text-base mb-8 max-w-md mx-auto leading-relaxed">
          {score === questions.length
            ? "Outstanding! You have mastered this topic."
            : score >= questions.length / 2
            ? "Great job! You have a solid understanding."
            : "Keep practicing! Read through the notes again to get a better grasp."}
        </p>
        <button 
          onClick={() => { 
            setIsFinished(false); 
            setCurrentQ(0); 
            setScore(0); 
            setSelectedOption(null); 
            setIsAnswered(false); 
          }}
          className="bg-emerald-600 text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-emerald-700 transition-colors shadow-sm"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQ];

  return (
    <div className="my-10 max-w-2xl w-full mx-auto p-5 sm:p-6 bg-white border border-slate-200 rounded-2xl shadow-sm not-prose">
      <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
        <span className="bg-[#0f2b5c] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
          Topic Quiz
        </span>
        <span className="text-xs font-semibold text-slate-400">
          Q {currentQ + 1} of {questions.length}
        </span>
      </div>

      {/* ✅ UPDATED: Now supports HTML (text + images) inside the question */}
      <div 
        className="text-base sm:text-lg font-bold text-[#0f2b5c] mb-5 leading-snug [&>img]:max-h-[250px] [&>img]:w-auto [&>img]:mx-auto [&>img]:my-4 [&>img]:rounded-lg [&>img]:border [&>img]:border-slate-200"
        dangerouslySetInnerHTML={{ __html: currentQuestion.question }} 
      />

      <div className="space-y-2.5 mb-5">
        {currentQuestion.options.map((opt, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = index === currentQuestion.correctOptionIndex;

          let btnClass = "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700";
          if (isAnswered) {
            if (isCorrect)
              btnClass = "border-emerald-500 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-500";
            else if (isSelected && !isCorrect)
              btnClass = "border-red-500 bg-red-50 text-red-900 ring-1 ring-red-500";
            else btnClass = "border-slate-200 bg-white opacity-50";
          } else if (isSelected) {
            btnClass = "border-[#0f2b5c] bg-blue-50 text-[#0f2b5c] ring-1 ring-[#0f2b5c]";
          }

          return (
            <button
              key={index}
              disabled={isAnswered}
              onClick={() => setSelectedOption(index)}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all flex items-center justify-between text-sm sm:text-base font-medium ${btnClass}`}
            >
              <span>{opt}</span>
              {isAnswered && isCorrect && (
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 shrink-0 ml-2" />
              )}
              {isAnswered && isSelected && !isCorrect && (
                <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 shrink-0 ml-2" />
              )}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300 mb-5">
          <div
            className={`p-3.5 rounded-xl text-sm ${
              selectedOption === currentQuestion.correctOptionIndex
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            <p className="font-bold flex items-center gap-1.5 mb-1">
              {selectedOption === currentQuestion.correctOptionIndex ? (
                <><Sparkles className="h-4 w-4" /> Correct!</>
              ) : (
                <><XCircle className="h-4 w-4" /> Incorrect. The answer is {String.fromCharCode(65 + currentQuestion.correctOptionIndex)}.</>
              )}
            </p>
            <p className="opacity-90">{currentQuestion.explanation}</p>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        {!isAnswered ? (
          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="bg-[#0f2b5c] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#163b78] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-[#d97706] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-amber-600 transition-colors flex items-center gap-1.5"
          >
            {currentQ + 1 < questions.length ? "Next Question" : "See Results"}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}