// FontAswome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";

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
    <section dir="rtl" className="bg-midnight py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/*  Section Heading Start  */}
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
        {/*  Section Heading End  */}

        {/*  Testimonials Start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((student) => (
            <div
              key={student.id}
              className="
                group
                relative
                bg-charcoal
                border
                border-border-navy
                rounded-2xl
                p-7
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-gold
                hover:shadow-[0_18px_40px_rgba(212,175,55,0.18)]
              "
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
        {/*  Testimonials End */}
      </div>
    </section>
  );
}
