'use client'
import React, { useEffect, useState } from 'react'

const Carousel = () => {
    const data = [
      {
        heading: "Title Example",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris.",
        image: "slide-1.jpg"
      },
      {
        heading: "Title Example 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris.",
        image: "slide-2.jpg"
      },
      {
        heading: "Title Example 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris.",
        image: "slide-3.jpg"
      },
      {
        heading: "Title Example 4",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris.",
        image: "slide-4.jpg"
      },
    ];

    const [activeSlide, setActiveSlide] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const duration = 17000;

    useEffect(() => {
      const interval = setInterval(() => {
        setElapsedTime((prev) => prev + 10);
        if (elapsedTime >= duration) {
          setActiveSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
          setElapsedTime(0);
        }
      }, 10);

      return () => clearInterval(interval);
    }, [activeSlide, elapsedTime, data]);

    const percentageComplete = (elapsedTime / duration) * 100;
    
    return (
        <div className='max-w-6xl flex space-x-6 mt-10'>

            {
            data.map((item, key) => (
                <div key={key} className={`flex h-96 bg-white rounded-3xl ${activeSlide === key ? 'w-[100%]' : 'w-[20%]'} relative overflow-hidden transition-all duration-700`}>
                <img onClick={() => setActiveSlide(key) } className={`rounded-l-3xl ${activeSlide === key ? 'w-[70%]' : 'w-full'} h-full object-cover ${activeSlide === key ? '' : 'hover:scale-105 cursor-pointer'} transition-all duration-200`} src={`/home/` + item.image } alt="" style={{
                  clipPath: activeSlide === key ? 'polygon(0% 0%, 0% 100%, 96.88% 100%, 96.82% 98.00%, 96.66% 96.00%, 96.39% 94.00%, 96.03% 92.00%, 95.59% 90.00%, 95.08% 88.00%, 94.53% 86.00%, 93.95% 84.00%, 93.36% 82.00%, 92.78% 80.00%, 92.24% 78.00%, 91.76% 76.00%, 91.34% 74.00%, 91.01% 72.00%, 90.78% 70.00%, 90.65% 68.00%, 90.63% 66.00%, 90.72% 64.00%, 90.92% 62.00%, 91.22% 60.00%, 91.61% 58.00%, 92.08% 56.00%, 92.60% 54.00%, 93.16% 52.00%, 93.75% 50.00%, 94.34% 48.00%, 94.90% 46.00%, 95.42% 44.00%, 95.89% 42.00%, 96.28% 40.00%, 96.58% 38.00%, 96.78% 36.00%, 96.87% 34.00%, 96.85% 32.00%, 96.72% 30.00%, 96.49% 28.00%, 96.16% 26.00%, 95.74% 24.00%, 95.26% 22.00%, 94.72% 20.00%, 94.14% 18.00%, 93.55% 16.00%, 92.97% 14.00%, 92.42% 12.00%, 91.91% 10.00%, 91.47% 8.00%, 91.11% 6.00%, 90.84% 4.00%, 90.68% 2.00%, 90.63% 0%)' : 'polygon(0% 0%, 0% 100%, 99.33% 100%, 99.33% 98.00%, 99.33% 96.00%, 99.33% 94.00%, 99.33% 92.00%, 99.33% 90.00%, 99.33% 88.00%, 99.33% 86.00%, 99.33% 84.00%, 99.33% 82.00%, 99.33% 80.00%, 99.33% 78.00%, 99.33% 76.00%, 99.33% 74.00%, 99.33% 72.00%, 99.33% 70.00%, 99.33% 68.00%, 99.33% 66.00%, 99.33% 64.00%, 99.33% 62.00%, 99.33% 60.00%, 99.33% 58.00%, 99.33% 56.00%, 99.33% 54.00%, 99.33% 52.00%, 99.33% 50.00%, 99.33% 48.00%, 99.33% 46.00%, 99.33% 44.00%, 99.33% 42.00%, 99.33% 40.00%, 99.33% 38.00%, 99.33% 36.00%, 99.33% 34.00%, 99.33% 32.00%, 99.33% 30.00%, 99.33% 28.00%, 99.33% 26.00%, 99.33% 24.00%, 99.33% 22.00%, 99.33% 20.00%, 99.33% 18.00%, 99.33% 16.00%, 99.33% 14.00%, 99.33% 12.00%, 99.33% 10.00%, 99.33% 8.00%, 99.33% 6.00%, 99.33% 4.00%, 99.33% 2.00%, 99.33% 0%)'
                }}/>
                <div className={`p-6 text-center  ${activeSlide === key ? 'w-[80%]' : 'w-0'} transition-all duration-500`}>
                    <div className={`${activeSlide === key ? 'opacity-100' : 'opacity-0'} transition-all duration-200 delay-[400ms]`}>
                        <h1>{ item.heading }</h1>
                        <p className='mt-2'>{ item.text }</p>
                    </div>
                </div>
                {
                    activeSlide === key && (
                        <div className="w-[95%] absolute inset-x-0 bottom-0 flex mx-auto items-center justify-center">
                            <div className="flex w-full h-1 bg-zinc-950/40 rounded-full overflow-hidden">
                                <div className="flex flex-col justify-center rounded-full overflow-hidden bg-sky-200 text-xs text-white text-center whitespace-nowrap transition duration-500" style={{
                                width: percentageComplete.toFixed(2)+'%'
                                }}></div>
                            </div>
                        </div>
                    )
                }
                </div>
            ))
            }

        </div>
    )
}

export default Carousel