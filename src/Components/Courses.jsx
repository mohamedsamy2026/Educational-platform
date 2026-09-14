// ID
import { v4 as uuidv4 } from "uuid";

// FontAswome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ICONS
import {
  faGraduationCap,
  faClock,
  faBookOpen,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

// IMGS
import Master1 from "../assets/Master/master 1.webp";
import Master2 from "../assets/Master/master 2.webp";
import Master3 from "../assets/Master/master 3.webp";

const courses = [
  {
    id: uuidv4(),
    title: "الدراسات الاجتماعية للمرحلة الإعدادية",
    description:
      "شرح مبسط ومنظم يساعدك على فهم الدروس وربط الأحداث بطريقة سهلة وشيقة.",
    grade: "المرحلة الإعدادية",
    duration: "كورس شامل",
    image: Master1,
  },
  {
    id: uuidv4(),
    title: "التاريخ للمرحلة الثانوية",
    description:
      "شرح التاريخ بطريقة واضحة مع التركيز على أهم الأحداث والنقاط التي تحتاجها في دراستك.",
    grade: "المرحلة الثانوية",
    duration: "كورس شامل",
    image: Master2,
  },
  {
    id: uuidv4(),
    title: "التاريخ بطريقة مختلفة",
    description:
      "محتوى تعليمي منظم يساعدك على تثبيت المعلومات وفهم التاريخ بصورة أعمق.",
    grade: "محتوى تعليمي",
    duration: "دروس متكاملة",
    image: Master3,
  },
];

export default function LatestCourses() {
  return (
    <section dir="rtl" className="bg-charcoal  py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/*   Heading Start */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white mb-4">
            أحدث الكورسات
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-8">
            اختر الكورس المناسب لك وابدأ رحلتك في تعلم التاريخ بطريقة مختلفة
          </h2>
        </div>
        {/*   Heading End */}

        {/*  Courses Start */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-midnightي border border-border-navy rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:scale-[1.01] hover:border-gold hover:shadow-[0_20px_45px_rgba(212,175,55,0.2)] flex flex-col h-full"
            >
              {/*  Course Image Start  */}
              <div className="relative aspect-video overflow-hidden bg-midnight">
                {/* Blurred Background */}
                <img
                  src={course.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-midnight/40"></div>

                {/* Main Image */}
                <img
                  src={course.image}
                  alt={`صورة ${course.title}`}
                  className="relative z-10 w-full h-full"
                />

                {/* Grade Badge */}
                <div className="absolute z-20 bottom-4 right-4 bg-gold text-midnight px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                  {course.grade}
                </div>
              </div>
              {/*  Course Image End  */}

              {/*  Course Content Start */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-warm-white mb-4 leading-8">
                  {course.title}
                </h3>

                <p className="text-muted-gray text-sm sm:text-base leading-7 mb-6">
                  {course.description}
                </p>

                {/* Course Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-warm-white mb-6">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faBookOpen} className="text-gold" />
                    <span>محتوى تعليمي</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} className="text-gold" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Course Button */}
                <a
                  href="/courses"
                  className="mt-auto flex items-center justify-center gap-3 w-full bg-gold text-midnight py-3 px-5 rounded-lg font-bold transition-all duration-300 hover:bg-gold-light hover:gap-5"
                >
                  <span>عرض الكورس</span>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </a>
              </div>
              {/*  Course Content End */}
            </div>
          ))}
        </div>
        {/*  Courses End */}
      </div>
    </section>
  );
}
