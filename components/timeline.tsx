"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TimelineEvent {
  id: number
  year: string
  title: string
  description: string
  image: string
}

const timelineData: TimelineEvent[] = [
  {
    id: 1,
    year: "Nov 2018",
    title: "AWS Registered Partner",
    description:
      "Achieved AWS Registered Partner status in November 2018, marking the beginning of our strategic partnership with Amazon Web Services.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/image%20544(1).png",
  },
  {
    id: 2,
    year: "May 2019",
    title: "AWS Select Consulting Partner",
    description:
      "Advanced to AWS Select Consulting Partner in May 2019, strengthening our consulting capabilities.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/Premier%20Service.png",
  },
  {
    id: 3,
    year: "Oct 2019",
    title: "AWS Advanced Consulting Partner",
    description:
      "Achieved AWS Advanced Consulting Partner status in October 2019, demonstrating our advanced technical expertise.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/Premier%20Service(2).png",
  },
  {
    id: 4,
    year: "Nov 2019",
    title: "Achieved 50+ Customers",
    description:
      "Reached a significant milestone of serving over 50 customers in November 2019, demonstrating our growing market presence.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/Premier%20Service(3).png",
  },
  {
    id: 5,
    year: "May 2020",
    title: "Recognized as AWS Managed Category Partner",
    description:
      "Recognized as AWS Managed Category Partner in May 2020, expanding our managed services portfolio.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/Premier%20Service(4).png",
  },
  {
    id: 6,
    year: "Nov 2020",
    title: "Recognized as Fastest Growing Partner by AWS",
    description:
      "Honored as Fastest Growing Partner by AWS in November 2020, recognizing our exceptional growth and performance.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/Premier%20Service(5).png",
  },
  {
    id: 7,
    year: "Jan 2021",
    title: "AWS SMBhav Partner | AWS EC2 for MS Windows Service Delivery Partner",
    description:
      "Became AWS SMBhav Partner and AWS EC2 for MS Windows Service Delivery Partner in January 2021, expanding our specialized service offerings.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/Premier%20Service(6).png",
  },
  {
    id: 8,
    year: "Mar 2021",
    title: "AWS Well Architected Partner | Achieved 150+ Customers",
    description:
      "Achieved AWS Well Architected Partner status in March 2021 and reached 150+ customers milestone.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/image%20592.png",
  },
  {
    id: 9,
    year: "Apr 2021",
    title: "AWS CloudFront Service Delivery Partner",
    description:
      "Became AWS CloudFront Service Delivery Partner in April 2021, enhancing our content delivery capabilities.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/image%20592.png",
  },
  {
    id: 10,
    year: "Jun 2021",
    title: "AWS WAF Service Partner",
    description:
      "Completed our comprehensive AWS partnership portfolio by becoming AWS WAF Service Partner in June 2021, offering complete security solutions.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/image%20591.png",
  },
  {
    id: 11,
    year: "2022",
    title: "Launched Managed Security, Application Development & Managed Database Services",
    description:
      "Launched Managed Security, App Development, and Database Services in July 2021, offering comprehensive enterprise solutions.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/Premier%20Service(16).png",
  },
  {
    id: 12,
    year: "2023",
    title: "Accredited with AWS Migration Services Competency",
    description:
      "Accredited with AWS Migration Services Competency in 2023, demonstrating our expertise in AWS migration services.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/Premier%20Service(8).png",
  },
  {
    id: 13,
    year: "2024",
    title: "Achieved AWS Premier Partner status Established subsidiary in Singapore for ASEAN expansion",
    description:
      "Achieved AWS Premier Partner status and established subsidiary in Singapore for ASEAN expansion, demonstrating our commitment to global expansion.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/Premier%20Service(9).png",
  },
  {
    id: 14,
    year: "2025",
    title: "Workmates Core2Cloud Solutions Ltd.: Positioned for Growth and Global Expansion",
    description:
      "Transitioned into Workmates Core2Cloud Solutions Ltd. (Public Limited) Positioned for IPO with Premier Tier AWS Partner status and 7 AWS Competencies.",
    image: "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Workmate/Premier%20Service(15).png",
  }
]

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % timelineData.length)
    }, 5000) // 5 seconds

    return () => clearInterval(interval)
  }, [isPaused])

  const nextEvent = () => {
    setCurrentIndex((prev) => (prev + 1) % timelineData.length)
  }

  const prevEvent = () => {
    setCurrentIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length)
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const getVisibleEvents = () => {
    const events = []
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % timelineData.length
      events.push({ ...timelineData[index], position: i })
    }
    return events
  }

  const visibleEvents = getVisibleEvents()

  return (
    <div 
      className="relative max-w-7xl mx-auto bg-white py-12 font-sans px-4 md:px-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute left-12 z-10 flex gap-0 ml-[-20px] hidden md:flex" style={{ top: "calc(40% - 33px)" }}>
        <button
          onClick={prevEvent}
          className="w-12 h-12 flex items-center justify-center transition-colors"
          style={{ backgroundColor: '#4537F2' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3429D1'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4537F2'}
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={nextEvent}
          className="w-12 h-12 flex items-center justify-center transition-colors"
          style={{ backgroundColor: '#4537F2' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3429D1'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4537F2'}
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="flex justify-center gap-4 mb-6 md:hidden">
        <button
          onClick={prevEvent}
          className="w-10 h-10 flex items-center justify-center transition-colors rounded"
          style={{ backgroundColor: '#4537F2' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3429D1'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4537F2'}
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </button>
        <button
          onClick={nextEvent}
          className="w-10 h-10 flex items-center justify-center transition-colors rounded"
          style={{ backgroundColor: '#4537F2' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3429D1'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4537F2'}
        >
          <ChevronRight className="h-4 w-4 text-white" />
        </button>
      </div>

      {/* Mobile Progress Dots */}
      <div className="flex justify-center mb-6 md:hidden">
        <div className="flex space-x-2">
          {timelineData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="w-2 h-2 rounded-full transition-colors"
              style={{ 
                backgroundColor: index === currentIndex ? '#4537F2' : '#cbd5e1'
              }}
            />
          ))}
        </div>
      </div>

      <div className="md:ml-36 ml-0 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (isMobile ? 100 : 700)}${isMobile ? '%' : 'px'})`,
            width: isMobile ? '100%' : `${timelineData.length * 700}px`,
          }}
        >
          {timelineData.map((event, index) => (
            <div
              key={event.id}
              className={`flex-shrink-0 relative transition-opacity duration-700 ease-out w-full md:w-[700px]`}
              style={{
                width: isMobile ? "100%" : "700px",
                opacity: index === currentIndex ? 1 : index === currentIndex + 1 ? 0.5 : 0.2,
              }}
            >
              <div className="relative px-4 md:px-0">
                <div className="mb-8 flex justify-start">
                  <img 
                    src={event.image || "/placeholder.svg"} 
                    alt={event.title} 
                    className="w-32 h-32 md:w-38 md:h-38 object-cover" 
                  />
                </div>

                <div className="mb-4 text-left">
                  <div className="font-bold mb-4 leading-none font-serif" style={{ color: '#4537F2', fontSize: '40px' }}>{event.year}</div>
                </div>

                <div className="relative mb-8">
                  <div className="absolute top-2 left-0 w-full h-0.5" style={{ backgroundColor: '#4537F2' }}></div>
                  <div className="absolute top-0 left-0 w-4 h-4 md:w-4 md:h-4 w-3 h-3 rounded-full md:rounded-none" style={{ backgroundColor: '#4537F2' }}></div>
                </div>

                <div className="pt-4 text-left">
                  <h3 className="text-xl font-bold mb-4 leading-tight max-w-lg font-sans md:text-xl text-lg" style={{ color: '#000000' }}>
                    {event.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed max-w-lg text-base font-sans md:text-base text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Event Counter */}
      <div className="mt-6 text-center md:hidden">
        <span className="text-sm text-gray-500">
          {currentIndex + 1} of {timelineData.length}
        </span>
      </div>

      {/* Global Presence Footer Section */}
      <div className="mt-12 md:mt-16 mx-4 md:mx-0">
        <div 
          className="bg-white p-6 md:p-8 text-left"
          style={{ 
            border: `2px dotted #4537F2`,
            borderRadius: '8px'
          }}
        >
          <h2 className="font-bold mb-4 leading-none font-serif text-black" style={{ color: '#4537F2', fontSize: '36px' }}>
            Building Global Presence
          </h2>
          <p className="leading-tight max-w-4xl font-sans text-black" style={{ fontSize: '18px' }}>
            With roots in India and expanding operations in Singapore, Workmates is building a global platform to support enterprises in their modernization journeys while planning further strategic expansion.
          </p>
        </div>
      </div>
    </div>
  )
}
