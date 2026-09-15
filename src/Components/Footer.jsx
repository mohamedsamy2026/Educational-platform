// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MasterFooter from "../assets/Master/master no transparent.jpeg";

// Icons
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// Solid Icons
import { faEnvelope, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    // Footer Start
    <footer
      id="footer"
      dir="rtl"
      className="relative bg-midnight border-t border-gold/30 pt-16 pb-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/*  Main Footer Start */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">

          {/*  Platform Info Start */}
          <div className="sm:border-0 border-navy sm:pb-0 pb-3 border-b-2">
            <div className="flex items-center gap-4 mb-5">
              <img
                src={MasterFooter}
                alt="مستر محمد خالد"
                className="w-16 h-16 shrink-0 rounded-full object-cover border-2 border-gold shadow-lg"
              />

              <h2 className="text-2xl font-bold text-gold">
                الغازي في التاريخ
              </h2>
            </div>

            <p className="text-[#d9d5cc] leading-8 text-sm sm:text-base max-w-sm">
              منصة تعليمية تهدف إلى تقديم شرح مبسط ومميز لمادة التاريخ والدراسات
              الاجتماعية مع مستر محمد خالد.
            </p>

            <p className="mt-5 text-white font-semibold leading-7">
              نتعلم التاريخ لنفهم الحاضر ونصنع المستقبل.
            </p>
          </div>
          {/*  Platform Info End */}

          {/*  Quick Links Start  */}
          <div className="lg:ms-20 sm:border-0 border-navy sm:pb-0 pb-3 border-b-2">
            <h3 className="text-xl font-bold text-warm-white mb-6">
              روابط سريعة
            </h3>

            <div className="space-y-4">
              <a
                href="#heroSection"
                className="block text-[#d9d5cc] hover:text-gold transition-colors duration-200"
              >
                الرئيسية
              </a>

              <a
                href="#aboutPlatform"
                className="block text-[#d9d5cc] hover:text-gold transition-colors duration-200"
              >
                تعرف على المنصة
              </a>

              <a
                href="#courses"
                className="block text-[#d9d5cc] hover:text-gold transition-colors duration-200"
              >
                الكورسات
              </a>

              <a
                href="#StudentOpinions"
                className="block text-[#d9d5cc] hover:text-gold transition-colors duration-200"
              >
                آراء الطلاب
              </a>
            </div>
          </div>
          {/*  Quick Links End  */}

          {/*  Follow Us Start */}
          <div className="sm:border-0 border-navy sm:pb-0 pb-3 border-b-2">
            <h3 className="text-xl font-bold text-warm-white mb-4">تابعنا</h3>

            <p className="text-[#d9d5cc] leading-7 text-sm mb-6">
              تابع مستر محمد خالد على مواقع التواصل الاجتماعي.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              {/* Facebook */}
              <a
                target="_blank"
                href="https://www.facebook.com/share/19RrYLGj8s/"
                aria-label="فيسبوك"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-charcoal border-2 border-border-navy text-white text-xl transition-all duration-300 hover:bg-gold hover:text-midnight hover:border-gold hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              {/* Instagram */}
              <a
                target="_blank"
                href="https://www.instagram.com/mhmdkhldltnyn?stkn=MXhzM3ludzB1MzVzdg=="
                aria-label="إنستجرام"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-charcoal border-2 border-border-navy text-white text-xl transition-all duration-300 hover:bg-gold hover:text-midnight hover:border-gold hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              {/* TikTok */}
              <a
                target="_blank"
                href="https://www.tiktok.com/@mr..mohamed.khaled?_r=1&_t=ZS-99VfIpXBVsj"
                aria-label="تيك توك"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-charcoal border-2 border-border-navy text-white text-xl transition-all duration-300 hover:bg-gold hover:text-midnight hover:border-gold hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>
          {/*  Follow Us End */}


            {/*  Scientific Support Start */}
            <div className="sm:border-0 border-navy sm:pb-0 pb-3 border-b-2">
              <h3 className="text-xl font-bold text-warm-white mb-4">
                الدعم العلمي
              </h3>

              <p className="text-[#d9d5cc] leading-7 text-sm mb-5">
                لديك سؤال عن درس أو محتوى دراسي؟ تواصل معنا وسنساعدك.
              </p>

              <div className="flex items-center gap-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/201006254308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white h-12 w-12 rounded-full flex justify-center items-center border-2 bg-charcoal text-xl border-border-navy text-center hover:bg-[#25D366] hover:border-0 duration-300 hover:-translate-y-1"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/mohamed25721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white h-12 w-12 rounded-full flex justify-center items-center border-2 bg-charcoal text-xl border-border-navy text-center hover:bg-[#229ED9] hover:border-0 duration-300 hover:-translate-y-1"
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
              </div>
            </div>
            {/*  Scientific Support End */}

            {/*  Technical Support Start */}
            <div>
              <h3 className="text-xl font-bold text-warm-white mb-4">
                الدعم الفني
              </h3>

              <p className="text-[#d9d5cc] leading-7 text-sm mb-5">
                لديك مشكلة تقنية أو استفسار عن الحساب؟ تواصل معنا وسنساعدك.
              </p>

              <div className="flex items-center gap-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/201115083459"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="واتساب"
                  className="text-white h-12 w-12 rounded-full flex justify-center items-center border-2 bg-charcoal text-xl border-border-navy text-center hover:bg-[#25D366] hover:border-0 duration-300 hover:-translate-y-1"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/mohamed1_2_3_4"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="تليجرام"
                  className="text-white h-12 w-12 rounded-full flex justify-center items-center border-2 bg-charcoal text-xl border-border-navy text-center hover:bg-[#229ED9] hover:border-0 duration-300 hover:-translate-y-1"
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mohamedeng747@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="البريد الإلكتروني"
                  className="text-white h-12 w-12 rounded-full flex justify-center items-center border-2 bg-charcoal text-xl border-border-navy text-center hover:bg-gold hover:border-0 duration-300 hover:-translate-y-1"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
            {/*  Technical Support End */}
        </div>
        {/*  Main Footer End */}

        {/*  Bottom Footer Start */}
        <div className="border-t border-border-navy mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center">
          <p className="text-[#d9d5cc] font-bold text-sm md:order-1 order-2">
            الغازي في التاريخ - جميع الحقوق محفوظة © 2026
          </p>

          <a
            href="#heroSection"
            className="md:order-2 order-1 flex items-center gap-2 text-sm text-[#d9d5cc]font-bold hover:text-gold transition-colors duration-200"
          >
            <span>العودة إلى الرئيسية</span>

            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </div>
        {/*  Bottom Footer End */}
      </div>
    </footer>
    // Footer End
  );
}
