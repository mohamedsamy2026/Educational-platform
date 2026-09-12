import MasterImg from "../assets/Master/master-home.png";
import HeroImg from "../assets/Background/hero-bg.webp";

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Start */}
      <div className="absolute inset-0 z-0">
     <img
  src={HeroImg}
  alt="خلفية تاريخية"
  className="w-full h-full object-cover object-[50%_center] lg:object-center"
/>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Blue Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#061522]/75 via-[#071b2b]/35 to-black/40"></div>

        {/* Bottom Dark Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#030b12] via-[#030b12]/60 to-transparent"></div>
      </div>
      {/*  Background End  */}

      {/*  Content Start  */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-4">
          {/*  Text Start  */}
          <div className="order-1 lg:order-2 text-right">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl font-bold text-white leading-tight mb-6">
              تعلم التاريخ
              <br />
              <span className="text-gold">بأسلوب مختلف</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl mb-8 opacity-95">
              تعلم التاريخ مع مستر محمد خالد - بخبرة تمتد لأكثر من 3 سنوات في
              التدريس، نقدم لك أفضل أسلوب لشرح الدراسات الاجتماعية للصفوف
              الإعدادية والثانوية بطريقة مبسطة وشيقة تجعلك تحب التاريخ وتفهمه
              بعمق.
            </p>

            {/* ================= Buttons ================= */}

            <div className="flex flex-col w-full sm:flex-row gap-4 justify-start items-start">
              <a
                href="/signup"
                className="bg-gold text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300hover:bg-gold-light sm:w-auto w-full"
              >
                ابدأ التعلم
              </a>

              <a
                href="/courses"
                className="border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-gold hover:text-white sm:w-auto w-full"
              >
                شاهد الكورسات
              </a>
            </div>
          </div>

          {/* ================= Text End ================= */}

          {/* ================= Master Start ================= */}

          <div className="order-1 lg:order-2 relative flex items-center justify-center min-h-[450px] lg:min-h-[650px]">
            {/* Person */}

            <div className="relative w-full max-w-xl lg:min-w-3xl flex justify-center items-start">
              <img
                src={MasterImg}
                alt="مستر محمد خالد"
                className="
      relative
      z-10
      w-full
      h-auto
      object-contain
      object-bottom
      drop-shadow-2xl
      lg:scale-130
      scale-120
      lg:translate-y-6
    "
         style={{
  WebkitMaskImage:
    "linear-gradient(to bottom, black 88%, transparent 100%)",
  maskImage:
    "linear-gradient(to bottom, black 85%, transparent 100%)",
}}
              />
            </div>
          </div>

          {/* ================= Master End ================= */}
        </div>
      </div>

      {/* ================= Content End ================= */}
    </section>
  );
}
