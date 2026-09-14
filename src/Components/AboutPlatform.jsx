// IMG
import MasterImg from "../assets/Master/master no transparent.jpeg";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faGraduationCap,
  faFileLines,
  faChalkboardTeacher,
  faCircleCheck,
  faVideo,
  faClipboardCheck,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPlatform() {
  return (
    <section dir="rtl" className="bg-midnight py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ================= Section Heading ================= */}
        <div className="text-center mb-12">
          <h1
            className="
      text-3xl
      sm:text-4xl
      md:text-5xl
      font-bold
      text-warm-white
      mb-4
    "
          >
            عن المنصة
          </h1>

          <h2
            className="
      text-base
      sm:text-lg
      md:text-xl
      text-gray-300
      max-w-2xl
      mx-auto
      leading-8
    "
          >
            نعمل على تقديم تجربة تعليمية مميزه تساعدك على فهم التاريخ بسهولة
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ================= Card 1 ================= */}
          <div
            className="
              bg-charcoal
              border
              border-border-navy
              rounded-2xl
              p-7
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-[1.01]
              hover:border-gold
              hover:shadow-[0_15px_40px_rgba(212,175,55,0.25)]
              cursor-pointer
            "
          >
            <h2 className="text-xl sm:text-2xl font-bold text-warm-white mb-6">
              مميزات التعلم معنا
            </h2>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <FontAwesomeIcon icon={faBookOpen} />
                </div>

                <p className="text-warm-white font-semibold">
                  فهم الأحداث بطريقة سهلة ومبسطة
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>

                <p className="text-warm-white font-semibold">
                  الاستعداد للامتحانات بثقة
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>

                <p className="text-warm-white font-semibold">
                  التركيز على أهم النقاط والأسئلة
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <FontAwesomeIcon icon={faLayerGroup} />
                </div>

                <p className="text-warm-white font-semibold">
                  ترتيب المحتوى بطريقة منظمة
                </p>
              </div>
            </div>
          </div>

          {/* ================= About Mohamed Khaled ================= */}
          <div
            className="
            cursor-pointer
              bg-charcoal
              border
              border-border-navy
              rounded-2xl
              p-7
              shadow-lg
              text-center
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-[1.01]
              hover:border-gold
              hover:shadow-[0_15px_40px_rgba(212,175,55,0.25)]
            "
          >
            <img
              src={MasterImg}
              alt="أ. محمد خالد"
              className="
                w-22
                h-22
                object-contain
                rounded-full
                mx-auto
                mb-5
                border-2
                border-gold
                shadow-lg
              "
            />

            <h2 className="text-2xl sm:text-3xl font-bold text-gold mb-5">
              محمد خالد
            </h2>

            <p className="text-white leading-8 text-sm sm:text-base">
              مدرس الدراسات الاجتماعية للمرحلة الإعدادية والتاريخ للمرحلة
              الثانوية، نقدم شرحًا مبسطًا ومنظمًا يساعدك على فهم التاريخ وربط
              الأحداث بطريقة سهلة وشيقة، مع التركيز على أهم النقاط التي تحتاجها
              لتحقيق أفضل نتيجة.
            </p>
          </div>

          {/* ================= Platform Card ================= */}
          <div
            className="
              bg-charcoal
              border
              border-border-navy
              rounded-2xl
              p-7
              shadow-lg
              transition-all
              duration-300
            hover:-translate-y-1
              hover:scale-[1.01]
              hover:border-gold
              hover:shadow-[0_15px_40px_rgba(212,175,55,0.25)]
              cursor-pointer
            "
          >
            <h2 className="text-xl sm:text-2xl font-bold text-warm-white mb-6">
              ماذا تقدم لك المنصة؟
            </h2>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <FontAwesomeIcon icon={faFileLines} />
                </div>

                <p className="text-warm-white font-semibold">
                  شرح ودروس منظمة باستمرار
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <FontAwesomeIcon icon={faChalkboardTeacher} />
                </div>

                <p className="text-warm-white font-semibold">
                  محتوى تعليمي مناسب لكل صف
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <FontAwesomeIcon icon={faVideo} />
                </div>

                <p className="text-warm-white font-semibold">
                  فيديوهات ودروس تعليمية واضحة
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <FontAwesomeIcon icon={faClipboardCheck} />
                </div>

                <p className="text-warm-white font-semibold">
                  أسئلة وتقييمات تساعدك على التطور
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
