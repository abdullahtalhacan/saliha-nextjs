'use client'
import React, { useState } from 'react'

const TextSlide = () => {
    const data = [
        {
          title: "Anksiyete Bozuklukları",
          desc: "Anksiyete bozuklukları, bireyin sürekli endişe, korku veya gerginlik hissi yaşadığı bir grup zihinsel sağlık durumunu kapsar. Genel anksiyete bozukluğu, sürekli endişe ve gerginlik hissiyle karakterizedir. Panik bozukluk, aniden ortaya çıkan şiddetli panik ataklarını içerir. Sosyal anksiyete bozukluğu, sosyal durumlarla başa çıkma konusunda aşırı endişe içeren bir durumdur. Obsesif-kompulsif bozukluk (OKB), tekrarlayan düşünceler ve bu düşünceleri engellemek için yapılan tekrarlayan davranışlarla belirlenir."
        },
        {
          title: "Duygudurum Bozuklukları",
          desc: "Duygudurum bozuklukları, bireyin duygusal durumunu etkileyen bir dizi zihinsel sağlık durumunu içerir. Depresyon, umutsuzluk, ilgi kaybı ve enerji eksikliği gibi belirtilerle karakterizedir. Bipolar bozukluk, mani (aşırı enerji ve aktivite) ve depresyon arasında değişen zıt uçlu duygu durumlarına sahiptir."
        },
        {
          title: "Panik Atak",
          desc: "Panik atak, aniden ortaya çıkan yoğun bir korku ve endişe hissiyle karakterizedir. Kalp çarpıntısı, terleme, titreme ve nefes darlığı gibi fiziksel semptomlarla birlikte gelir. Bu ataklar genellikle beklenmedik ve kontrol edilemezdir."
        },
        {
          title: "Depresyon",
          desc: "Depresyon, bireyin genel yaşam kalitesini etkileyen uzun süreli bir duygu durumu bozukluğudur. Kişi, umutsuzluk, ilgi kaybı, enerji eksikliği ve uyku düzeninde değişiklik gibi belirtiler yaşar."
        },
        {
          title: "Obsesif Kompülsif Bozukluk (OKB)",
          desc: "OKB, tekrarlayan obsesyonlar (rahatsız edici düşünceler) ve bu obsesyonları kontrol etmek için yapılan kompulsiyonlar (tekrarlayıcı davranışlar) ile belirlenir. Birey, bu davranışları gerçekleştirmeksizin obsesyonlarıyla başa çıkmakta zorlanır."
        },
        {
          title: "Yeme Bozuklukları",
          desc: "Yeme bozuklukları, bireyin beslenme alışkanlıklarında anormal davranışları içerir. Anoreksiya nervoza, aşırı kilo kaybı ve düşük vücut ağırlığı ile karakterizedir. Bulimia nervoza, aşırı yeme ataklarından sonra bilinçli olarak kusma veya aşırı egzersiz gibi yöntemlerle kilo kontrolüdür."
        },
        {
          title: "Travma Sonrası Stres Bozukluğu (TSSB)",
          desc: "Travma sonrası stres bozukluğu, bireyin maruz kaldığı ciddi bir travmatik olayın ardından ortaya çıkan belirtileri içerir. Bu belirtiler arasında kabuslar, anksiyete, duygusal uyuşukluk ve sürekli hatıralar yer alır."
        },
        {
          title: "Şizofreni",
          desc: "Şizofreni, gerçeklikten kopma, düşünce bozuklukları, duygusal düzensizlikler ve işlevsellikte azalma ile karakterizedir. Birey, gerçekle bağlantı kurmakta ve sosyal etkileşimde bulunmakta zorlanabilir."
        },
        {
          title: "Bipolar Bozukluk",
          desc: "Bipolar bozukluk, mani (aşırı enerji ve yüksek aktivite) ve depresyon (umutsuzluk ve düşük enerji) arasında gidip gelen bir durumdur. Bu durum, bireyin genel yaşam kalitesini ve ilişkilerini etkileyebilir."
        },
        {
          title: "Uyku Bozuklukları",
          desc: "Uyku bozuklukları, düzenli ve sağlıklı bir uyku alışkanlığını engelleyen durumları içerir. İnsomni, uyku apnesi ve narkolepsi gibi durumlar bu kategoriye girer."
        },
        {
          title: "Öfke Kontrol Bozukluğu",
          desc: "Öfke kontrol bozukluğu, bireyin öfke patlamaları, şiddet eğilimi ve öfke yönetimi güçlükleri ile başa çıkmasını zorlaştıran bir durumdur. Bu durum, sosyal ilişkilerde ve işlevsellikte sorunlara neden olabilir."
        }
      ];
    const [activeText, setActiveText] = useState(0)
    const handleTextMove = (direction: 'prev' | 'next') => {
        let pos = activeText
        direction === 'next' 
        ? pos = pos === (Math.floor(data.length / 2)) - 1 ? 0 : pos + 1
        : pos = pos === 0 ? (Math.floor(data.length / 2)) - 1 : pos - 1
        
        setActiveText(pos)
    }
  return (
    <section className='mx-auto px-24 grid grid-cols-1 text-center items-center justify-center'>
        <div className='space-y-5'>
            <h1 className='text-3xl'>Zihinsel Sağlık Hizmetleri</h1>
            <p className=''>Zihinsel sağlık konusunda bireylerin ihtiyaçlarına özel destek sunan bir profesyonelim.İhtiyaçlarınıza uygun çözümler sunmak için bana ulaşmaktan çekinmeyin</p>

            <div className='grid grid-cols-2 gap-y-4 h-56 w-full overflow-hidden'>
                <div className={`px-5 space-y-4 text-center transition-all duration-500`}>
                    <h1 className='text-2xl'>{ data[activeText].title }</h1>
                    <p className='text-left'>
                        {data[activeText].desc}
                    </p>
                </div>
                <div className={`px-5 space-y-4 text-center transition-all duration-500`}>
                    <h1 className='text-2xl'>{ data[activeText +1 ].title }</h1>
                    <p className='text-left'>
                        {data[activeText + 1].desc}
                    </p>
                </div>
            </div>

        </div>
        <div className='flex justify-between items-center mt-6'>
            <div>
                <span className='place-self-end text-zinc-500 text-lg'>
                    <span className='text-sky-500 font-medium'>
                        {activeText + 1}
                    </span>/{ (Math.floor(data.length / 2)) }
                </span>
            </div>
            <div className='flex space-x-4 place-self-center mt-auto'>
                <button onClick={() => handleTextMove('prev')} className='px-1.5 py-1.5 rounded-xl bg-indigo-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button onClick={() => handleTextMove('next')} className='px-1.5 py-1.5 rounded-xl bg-indigo-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
  )
}

export default TextSlide