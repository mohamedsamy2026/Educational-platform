// FontAswome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icons
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";

// Background
import TestimonialsBg from "../assets/Background/1.jpg";

const testimonials = [
  {
    id: 1,
    name: "محمد عماد",
    initials: "م ع",
    review:
      "شرح مستر محمد خالد بسيط وواضح جدًا، وبقيت أفهم الأحداث وأربط بينها بسهولة.",
  },

  {
    id: 2,
    name: "مروان محمد",
    initials: "م م",
    review:
      "أكثر شيء عجبني هو طريقة عرض المعلومات، لأنها بتخلّي المذاكرة أسهل والمراجعة أسرع.",
  },

  {
    id: 3,
    name: "احمد اشرف",
    initials: "أ أ",
    review:
      "الشرح ساعدني أراجع أهم النقاط وأدخل الامتحان وأنا فاهم المنهج وواثق من إجاباتي.",
  },
];

export default function Testimonials() {
  return (
    <section
      dir="rtl"
      id="StudentOpinions"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* ================= Background Start ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={TestimonialsBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-midnight/20"></div>
      </div>
      {/* ================= Background End ================= */}

      {/* ================= Content Start ================= */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ================= Section Heading Start ================= */}
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
            آراء طلابنا
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
            تجارب حقيقية من طلابنا عن رحلتهم في تعلم التاريخ
          </h2>
        </div>
        {/* ================= Section Heading End ================= */}

        {/* ================= Testimonials Start ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((student) => (
            <div
              key={student.id}
              className={`
              
                group
                relative
                bg-charcoal/95
                border
                border-border-navy
                rounded-2xl
                p-7
                cursor-pointer
                shadow-lg
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-gold
                hover:shadow-[0_18px_40px_rgba(212,175,55,0.18)]
                ${student.id == 3 ? "md:col-span-2 md:justify-self-center md:w-[calc(60%-12px)] lg:col-span-1 lg:w-full" : ""}
              `}
            >
              {/* Quote Icon */}
              <div
                className="
                  absolute
                  top-6
                  left-6
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-gold/10
                  text-gold
                "
              >
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>

              {/* Student Header */}
              <div className="flex items-center gap-4 mb-6">
                {/* Initials Circle */}
                <div
                  className="
                    w-16
                    h-16
                    shrink-0
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-gold
                    to-[#b08d20]
                    text-midnight
                    text-lg
                    sm:text-xl
                    font-extrabold
                    border-2
                    border-gold-light
                    shadow-lg
                  "
                >
                  {student.initials}
                </div>

                {/* Student Name */}
                <div>
                  <h3
                    className="
                      text-lg
                      sm:text-xl
                      font-bold
                      text-warm-white
                    "
                  >
                    {student.name}
                  </h3>

                  <span className="text-sm text-muted-gray">
                    من طلاب مستر محمد خالد
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5 text-[#F4C430]">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              {/* Review */}
              <p
                className="
                  text-gray-200
                  text-sm
                  sm:text-base
                  leading-8
                "
              >
                {student.review}
              </p>
            </div>
          ))}
        </div>
        {/* ================= Testimonials End ================= */}
      </div>
      {/* ================= Content End ================= */}
    </section>
  );
}
