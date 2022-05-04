import CloseButton from "./CloseButton";

import bugImgUrl from "../assets/bug.svg"
import ideaImgUrl from "../assets/idea.svg"
import thoughtImgUrl from "../assets/thought.svg"

const feedbackTypes = {
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

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>
        <div className="flex py-8 gap-2 w-full">
          { Object.entries(feedbackTypes).map(([key, value]) => {
            return(
              <button
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              // onClick=""
              type="button"
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            )
          }) }
        </div>
      <footer className="text-xs">
        <a href="https://github.com/igorgarciaco" target="_blank" className="underline underline-offset-2 text-zinc-600">@igorgarciaco</a>
      </footer>
    </div>
  )
}
