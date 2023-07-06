import Image from 'next/image'
import Link from 'next/link'

import PlanetGif from "@next-app/assets/planet.gif"

export default function Home() {
  return (
    <main className="flex justify-start items-start text-primary">
      <div className='flex flex-col items-start justify-start gap-14 mr-80 -ml-48'>
        <div className='flex flex-col items-start justify-start gap-5 w-[380px]'>
          <h1 className='font-bold text-title leading-tight'>
            Ops, esta página não foi encontrada
          </h1>
          <span className='brightness-75 text-lg font-light'>
            Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <Link href="#" className='hover:bg-opacity-80 bg-button-bg-primary rounded-full gap-2 py-[12px] px-[24px] text-xs text-[#E2E2F5] leading-snug text-center'>
            VOLTAR
          </Link>
          <Link href="#" className='hover:bg-opacity-80 bg-button-bg-primary rounded-full gap-2 py-[12px] px-[24px] text-xs text-[#E2E2F5] leading-snug text-center'>
            IR PARA A HOME
          </Link>
        </div>
      </div>
      <div className='relative flex gap-1 items-center bg-transparent'>
        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="107" viewBox="0 0 81 107" fill="none">
          <path d="M0.84375 84.9688L13.832 6.74219H33.7969L20.6602 84.9688H0.84375ZM0.84375 84.9688L12.4961 67.082H52.7969V84.9688H0.84375ZM69.3477 84.9688V67.082H81V84.9688H69.3477ZM51.3125 106.195V0.804688H70.832V106.195H51.3125Z" fill="#BF7BFB"/>
        </svg>
        <Image 
          src={PlanetGif}
          alt=''
          width={230}
          height={230}
        />
        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="107" viewBox="0 0 81 107" fill="none">
          <path d="M0.84375 84.9688L13.832 6.74219H33.7969L20.6602 84.9688H0.84375ZM0.84375 84.9688L12.4961 67.082H52.7969V84.9688H0.84375ZM69.3477 84.9688V67.082H81V84.9688H69.3477ZM51.3125 106.195V0.804688H70.832V106.195H51.3125Z" fill="#BF7BFB"/>
        </svg>
      </div>
    </main>
  )
}
