import Carousel from './components/Carousel'
import Link from 'next/link'
import TextSlide from './components/TextSlide'
import LatestPosts from './components/LatestPosts'

export default function Home() {

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col'>
          <div className='flex flex-col space-y-3 px-16 mt-10'>
            <div className='flex space-x-5 justify-center items-center'>
              <div className='w-full h-0.5 bg-zinc-800/40'></div>
              <span className='w-full text-gray-800'>Bizimle yalnız değilsiniz</span>
            </div>
            <h2 className='text-5xl text-[3.5rem]'>Kendinizi ifade etmek, anlamak ve büyümek için güvenli bir ortam sunuyoruz</h2>
            <p className='text-gray-800'>Her sorunun bir çözümü vardır, ve bu serüveni birlikte paylaşarak daha güçlü olabiliriz. Unutmayın, sizin için buradayız.</p>
          </div>
          <div className='mt-auto mb-5 px-16'>
            <button className='relative flex items-center group px-4 py-2 bg-indigo-300 rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute flex-shrink-0 w-4 h-4 group-hover:opacity-0 transition-all duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`absolute flex-shrink-0 w-4 h-4 opacity-0 group-hover:opacity-80 transition-all duration-300`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
              <span className='ml-6'>Book an Appointment</span>
            </button>
          </div>
        </div>
        
        <div>
          <img src="/home/slide-4.jpg" className='object-cover' alt="" />
        </div>
      </div>


      <section className="relative w-full py-10 bg-white section-cover-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="mt-5 text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
              Terapi Nedir?
            </h1>
          </div>
          <div className="mt-5 text-center mx-auto space-y-3">
            <p className="text-lg text-gray-600">
              Zor zamanlar geçiriyor olabilirsin, her insan bu tür durumları hayatında bir çok kez yaşıyor ama yaşanan hiçbir şey sonsuza dek sürmez. İşte terapi burada yaşadığın sıkıntılı durumlarda zihninin derinliklerinde dolaşan karmaşık düşüncelerin ve karmaşık duyguların aydınlatılmasıdır. Adeta bir iç yolculuk, kendi zihinsel labirentlerinde kaybolmuş bir gezginin, bir rehberle birlikte bulduğu bir serüvendir.
            </p>
            <p className="text-lg text-gray-600">
              Her gün bedenimizi doyurduğumuz gibi zihnimizi ve ruhumuzu da doyurmamız gerekiyor terapi, ruhsal manevraların ve içsel diyaloğun sanatıdır. Terapist, bir hikayenin öğütülmüş ununu bir araya getirirken, birey de kendi içsel öyküsünü anlama ve yazma sürecinde önemli bir rol oynar. Her seans, bir çiçeğin yavaşça açılmasına benzer; içsel büyüme ve dönüşümün birleşimidir.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
        <TextSlide />
      </section>


      <section className="w-full grid grid-cols-2 items-center py-24 relative bg-white">
        <div className='flex justify-center items-center relative'>
          <div className='w-80 h-80 absolute rounded-full border border-dashed border-sky-400'></div>
          <div className='w-96 h-96 absolute rounded-full border border-dashed border-sky-400'></div>
          <img className='w-60 absolute' src="/assets/center.svg" alt="" />
          <img className='w-20 absolute left-[21.5rem] bottom-[10rem]' src="/assets/top.svg" alt="" />
          <img className='w-16 absolute left-[9.5rem]' src="/assets/left.svg" alt="" />
          <img className='w-14 absolute top-[3rem] right-[12rem]' src="/assets/right.svg" alt="" />
        </div>
        <div className='max-w-xl flex flex-col space-y-6'>
          <h1 className='font-semibold text-3xl'>Bilgili ve etkili bir rehber olarak sizinle birlikte çalışmaktan memnuniyet duyarım</h1>
          <Link className='flex group justify-center items-center px-4 py-6 bg-indigo-300/50 hover:bg-indigo-300 rounded text-center text-sm' href='/about'>
            Eğitim geçmişim ve daha fazla bilgi için &quot;Hakkımda&quot; sayfasına göz atın
            <div className='p-2 border border-zinc-950/80 rounded-full ml-4'>
              <div className="text-3xl group w-fit grid overflow-hidden">
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
          <p className='text-gray-800 text-sm'>Lisans eğitimim süresince gönüllü stajlarım ve katıldığım projelerle teorik bilgilerimi pratiğe dökme şansı elde ettim. Üniversite hayatımı, kariyerime yön verecek fırsatlarla donatarak, çeşitli seminerlere katılarak ve aktif iletişim becerilerimi geliştirerek geçirdim. Sonuç odaklı, planlı ve disiplinli bir yaklaşım benim için ön planda; iş hayatımda da sürekli öğrenmeyi ilke edinerek bu değerleri sürdürmeyi hedefliyorum</p>
          
        </div>
        
      </section>

      <section className="w-full relative mx-auto text-center">
        <div className='section-bg py-32'></div>
        <div className='absolute top-0 w-full h-full px-44 flex bg-zinc-950/40 text-center items-center justify-center'>
          <q className='text-4xl text-white'>
          Başarısızlık her zaman bir hata değildir, bu şartlar altında yapılabilecek en iyi şey olabilir. Asıl hata denemekten vazgeçmektir.
          </q>
        </div>
      </section>


      <section className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Son Yayınlarım</h2>
          <p className="mt-1 text-gray-600">See how game-changing companies are making the most of every engagement with Preline.</p>
        </div>
        <LatestPosts />
      </section>


    </div>
  )
}
