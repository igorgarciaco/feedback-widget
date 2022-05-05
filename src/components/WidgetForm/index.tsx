import { useState } from "react";

import CloseButton from "../CloseButton";
import bugImgUrl from "../../assets/bug.svg"
import ideaImgUrl from "../../assets/idea.svg"
import thoughtImgUrl from "../../assets/thought.svg"
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImgUrl,
      alt: 'Ilustração de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImgUrl,
      alt: 'Ilustração de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImgUrl,
      alt: 'Ilustração nuvem de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <>
              <FeedbackContentStep
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            </>
          )}
        </>
      )}

      <footer className="text-xs text-zinc-600">
        Code by
        <a href="https://github.com/igorgarciaco" target="_blank" className="underline underline-offset-2 text-zinc-600 pl-1 pr-1">
          @igorgarciaco
        </a>
        + Rocketseat
      </footer>
    </div>
  )
}
