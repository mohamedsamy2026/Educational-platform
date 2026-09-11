// Import IMG
import HeroImg from "/assets/Background/hero-bg.webp";
import MasterImg from "/assets/Master/Master transparent.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* الخلفية التاريخية */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImg}
          alt="خلفية تاريخية"
          className="w-full h-full object-cover"
        />
        {/* Overlay غامق عشان النص يبان */}
        <div className="absolute inset-0 bg-gradient-to-l from-midnight via-midnight/90 to-midnight/70"></div>
      </div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* النص (على اليمين في RTL) */}
          <div className="text-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-warm-white mb-6 leading-tight">
              تعلم التاريخ
              <br />
              <span className="text-gold">بأسلوب مختلف</span>
            </h1>

            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-2xl">
              تعلم التاريخ مع مستر محمد خالد - أفضل مدرس دراسات اجتماعية للصفوف
              الإعدادية والثانوية بأسلوب مبسط وشيق يجعلك تحب التاريخ وتفهمه بعمق
            </p>

            {/* الأزرار */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a
                href="/signup"
                className="bg-gold text-midnight px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-light transition-all duration-200 shadow-lg hover:shadow-gold/50"
              >
                ابدأ التعلم
              </a>
              <a
                href="/courses"
                className="border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold hover:text-midnight transition-all duration-200"
              >
                شاهد الكورسات
              </a>
            </div>
          </div>

          {/* صورة المدرس (على اليسار في RTL) */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* تأثير الإضاءة الخلفية */}
              <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full"></div>
              <img
                src={MasterImg}
                alt="مستر محمد خالد"
                className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* تأثير ذهبي في الأسفل */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent"></div>
    </section>
  );
}
