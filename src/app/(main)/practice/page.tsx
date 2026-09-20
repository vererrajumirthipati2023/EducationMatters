import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Compass, Calculator, Brain, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cognitive Assessment Practice Games",
  description:
    "Practise interactive cognitive mini-game simulations individually including Path Finder, Bubble Math, and Memory Maze.",
};

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      {/* =================================================================== 
          3. AVAILABLE PRACTICE GAMES 
          =================================================================== */} 
      <div className="mb-14"> 
        <div className="mb-8"> 
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d97706] mb-2"> 
            Cognitive Practice 
          </div> 

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b5c] tracking-tight"> 
            Games Available for Practice 
          </h2> 

          <p className="text-slate-600 text-sm mt-2"> 
            Practise the three cognitive tasks individually before attempting 
            the assessment simulation. 
          </p> 
        </div> 

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"> 

          {/* Path Finder */} 
          <Card className="flex flex-col justify-between bg-white rounded-2xl border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 p-6 sm:p-7"> 
            <div> 
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#0f2b5c] border border-blue-100 flex items-center justify-center mb-5"> 
                <Compass className="h-6 w-6" /> 
              </div> 

              <CardTitle className="text-lg font-bold text-[#0f2b5c] tracking-tight"> 
                PATH FINDER 
              </CardTitle> 

              <p className="text-xs font-semibold text-[#d97706] uppercase tracking-wider mt-0.5 mb-3"> 
                Image Rotation Ability 
              </p> 

              <CardDescription className="text-sm text-slate-600 leading-relaxed mb-6"> 
                Connect the path by rotating and changing directional tiles 
                on 3×3 and 4×4 grids from start to destination. 
              </CardDescription> 
            </div> 

            <div> 
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium mb-4 flex items-center justify-between"> 
                <span>5 Questions</span> 
                <span className="text-slate-400">•</span> 
                <span>Easy to Hard</span> 
              </div> 

              <Button 
                asChild 
                className="w-full bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg h-10" 
              > 
                <Link href="/practice/path-finder"> 
                  Start Practice 
                  <ArrowRight className="ml-2 h-4 w-4 text-amber-300" /> 
                </Link> 
              </Button> 
            </div> 
          </Card> 

          {/* Bubble Math */} 
          <Card className="flex flex-col justify-between bg-white rounded-2xl border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 p-6 sm:p-7"> 
            <div> 
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#0f2b5c] border border-blue-100 flex items-center justify-center mb-5"> 
                <Calculator className="h-6 w-6" /> 
              </div> 

              <CardTitle className="text-lg font-bold text-[#0f2b5c] tracking-tight"> 
                BUBBLE MATH 
              </CardTitle> 

              <p className="text-xs font-semibold text-[#d97706] uppercase tracking-wider mt-0.5 mb-3"> 
                Numerical Ability 
              </p> 

              <CardDescription className="text-sm text-slate-600 leading-relaxed mb-6"> 
                Rapidly calculate mental math expressions and select bubbles 
                in strictly ascending order under time pressure. 
              </CardDescription> 
            </div> 

            <div> 
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium mb-4 flex items-center justify-between"> 
                <span>5 Questions</span> 
                <span className="text-slate-400">•</span> 
                <span>Timed Practice</span> 
              </div> 

              <Button 
                asChild 
                className="w-full bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg h-10" 
              > 
                <Link href="/practice/bubble-math"> 
                  Start Practice 
                  <ArrowRight className="ml-2 h-4 w-4 text-amber-300" /> 
                </Link> 
              </Button> 
            </div> 
          </Card> 

          {/* Memory Maze */} 
          <Card className="flex flex-col justify-between bg-white rounded-2xl border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 p-6 sm:p-7"> 
            <div> 
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#0f2b5c] border border-blue-100 flex items-center justify-center mb-5"> 
                <Brain className="h-6 w-6" /> 
              </div> 

              <CardTitle className="text-lg font-bold text-[#0f2b5c] tracking-tight"> 
                MEMORY MAZE 
              </CardTitle> 

              <p className="text-xs font-semibold text-[#d97706] uppercase tracking-wider mt-0.5 mb-3"> 
                Perceptual Ability 
              </p> 

              <CardDescription className="text-sm text-slate-600 leading-relaxed mb-6"> 
                Memorize the grid obstacles and key locations before they 
                vanish, then navigate safely to the exit. 
              </CardDescription> 
            </div> 

            <div> 
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium mb-4 flex items-center justify-between"> 
                <span>5 Questions</span> 
                <span className="text-slate-400">•</span> 
                <span>Spatial Recall</span> 
              </div> 

              <Button 
                asChild 
                className="w-full bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg h-10" 
              > 
                <Link href="/practice/memory-maze"> 
                  Start Practice 
                  <ArrowRight className="ml-2 h-4 w-4 text-amber-300" /> 
                </Link> 
              </Button> 
            </div> 
          </Card> 

        </div> 
      </div>
    </div>
  );
}
