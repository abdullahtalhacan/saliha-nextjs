import Carousel from './components/Carousel'
import Link from 'next/link'

export default function Home() {

  return (
    <div className='w-full flex flex-col items-center justify-center space-y-20'>

      <Carousel />

      <section className='max-w-6xl grid grid-cols-2 items-center py-36'>
        <div className='flex flex-col space-y-6 p-3 text-center items-center'>
          <h1 className='font-bold'>Navigate Through Our About Page to Discover Our Journey</h1>
          <p>The About page provides a glimpse into the history, values, and mission of the company, offering visitors a narrative that goes beyond the surface, forging a connection between the audience and the brand.</p>
          <Link className='flex group justify-center items-center px-3 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg text-center' href='/about'>
            About
            <div className='p-2 border border-zinc-950/80 rounded-full ml-4'>
              <div className="text-3xl group w-fit grid" style={{
                clipPath: 'inset(0 0 0 0 );'
              }} >
                <div className="[grid-area:1/1] flex items-center justify-center transition ease-in-out group-hover:delay-300 translate-y-10 -translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <div className="[grid-area:1/1] flex items-center justify-center transition ease-in-out delay-300 group-hover:delay-[0s] duration-300 group-hover:-translate-y-10 group-hover:translate-x-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className='flex justify-center items-center relative'>
          <div className='w-80 h-80 absolute rounded-full border border-dashed border-sky-400'></div>
          <div className='w-96 h-96 absolute rounded-full border border-dashed border-sky-400'></div>
          <img className='w-60 absolute' src="/assets/center.svg" alt="" />
          <img className='w-20 absolute left-[14rem] bottom-[10rem]' src="/assets/top.svg" alt="" />
          <img className='w-16 absolute left-[6rem]' src="/assets/left.svg" alt="" />
          <img className='w-14 absolute top-[3rem] right-[7rem]' src="/assets/right.svg" alt="" />
        </div>
      </section>

      <div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
            <div className="space-y-6 lg:space-y-10">
              <div className="flex">
                <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Creative minds
                  </h3>
                  <p className="mt-1 text-gray-600">
                    We choose our teams carefully. Our people are the secret to great work.
                  </p>
                </div>
              </div>

              <div className="flex">
                <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Effortless updates
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Benefit from automatic updates to all boards any time you need to make a change to your website.
                  </p>
                </div>
              </div>

              <div className="flex">
                <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Strong empathy
                  </h3>
                  <p className="mt-1 text-gray-600">
                    We&apos;ve user tested our own process by shipping over 1k products for clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-10">
              <div className="flex">
                <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Conquer the best
                  </h3>
                  <p className="mt-1 text-gray-600">
                    We stay lean and help your product do one thing well.
                  </p>
                </div>
              </div>

              <div className="flex">
                <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Designing for people
                  </h3>
                  <p className="mt-1 text-gray-600">
                    We actively pursue the right balance between functionality and aesthetics, creating delightful experiences.
                  </p>
                </div>
              </div>

              <div className="flex">
                <svg className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Simple and affordable
                  </h3>
                  <p className="mt-1 text-gray-600">
                    From boarding passes to movie tickets, there&apos;s pretty much nothing you can&apos;t store with Preline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300" href="#">
              PRO release - Join to waitlist
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600">
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </a>
          </div>

          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
              Let&apos;s Build
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Together</span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600">Preline UI is an open-source set of prebuilt UI components, ready-to-use examples and Figma design system based on the utility-first Tailwind CSS framework.</p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4" href="#">
              Get started
              <svg className="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a>
            <button type="button" className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
              $ npm i preline
              <span className="flex justify-center items-center bg-gray-200 rounded-md w-7 h-7">
                <svg className="flex-shrink-0 w-4 h-4 group-hover:rotate-6 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
              </span>
            </button>
          </div>

          <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
            <span className="text-sm text-gray-600">Package Manager:</span>
            <span className="text-sm font-bold text-gray-900">npm</span>
            <svg className="h-5 w-5 text-gray-300" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"/>
            </svg>
            <a className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="#">
              Installation Guide
              <svg className="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>



    </div>
  )
}
