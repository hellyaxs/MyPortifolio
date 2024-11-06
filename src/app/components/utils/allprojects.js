import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineAppstore } from 'react-icons/ai'
import { imagens } from './icons-LP'

export default function AllProjects({ title }) {
  return (
    <>
      <div className="mt-24 flex items-center w-screen max-w-[600px] h-auto rounded-[15px] bg-dark border dark:border-blue-900">
        <div className="flex flex-col py-8 justify-start mr-10 items-center">
        <h4 className="font-black text-[1.8rem] mb-5 dark:text-emerald-600">{title}</h4>
          <Link href={'https://github.com/hellyaxs?tab=repositories'} target='_blank'>
            <button className="inline-flex justify-center dark:text-emerald-600 items-center text-center gap-[7px] cursor-pointer border-[0.25em] border-secondColor px-6 py-4 text-[1rem] font-bold bg-transparent rounded-[1em] outline-none relative -top-1 transition-all duration-300 hover:text-black hover:bg-white hover:shadow-[0_0_1em_0.25em_var(--hoverSecond),_0_0_4em_2em_var(--hoverSecond),_inset_0_0_0.75em_0.25em_white]">
              Projetos <AiOutlineAppstore size={20} />
            </button>
          </Link>
        </div>

          <div className="cubo">
            <div className="stage-cube-cont ">
              <div className="cubespinner">
                <div className="face1">
                  <Image
                    width={72}
                    height={72}
                    src={imagens.angular}
                    alt="Html"
                  />
                </div>
                <div className="face2">
                  <Image
                    width={72}
                    height={72}
                    src={imagens.nextjs}
                    alt="Css"
                  />
                </div>
                <div className="face3">
                  <Image
                    width={72}
                    height={72}
                    src={imagens.javascript}
                    alt="JavaScript"
                  />
                </div>
                <div className="face4">
                  <Image
                    width={72}
                    height={72}
                    src={imagens.docker}
                    alt="React JS"
                  />
                </div>
                <div className="face5">
                  <Image
                    width={72}
                    height={72}
                    src={imagens.typescript}
                    alt="TypeScript"
                  />
                </div>
                <div className="face6">
                  <Image
                    width={72}
                    height={72}
                    src={imagens.nestjs}
                    alt="Next JS"
                  />
                </div>
              </div>
            </div>
          </div>
      
      </div>
    </>
  )
}
