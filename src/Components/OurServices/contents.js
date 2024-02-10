import service1 from '../../Assets/service1.png';
import service2 from '../../Assets/service2.png';
import service3 from '../../Assets/service3.png';
import service4 from '../../Assets/service4.png';
import service5 from '../../Assets/service5.png';

export const data = [
  {
    id:1,
    heading: "Enterprise level application development",
    paragrapgh: [
      "Our team consists of highly skilled developers with extensive experience in enterprise-level application development.",
      "We collaborate closely to understand the business processes, challenges, and goals which enables to develop a comprehensive roadmap and architecture that forms the foundation for a robust and future-proof application. We leverage the latest technologies and follow industry-standard coding practices to create scalable and secure applications that meet specific needs of client.",
      "Our solutions are tailored to the specific requirements, ensuring that the application aligns perfectly with business processes. We design applications with scalability, allowing them to grow and adapt as your business evolves",
    ],
    image:<img src={service1} alt='service-1' style={{maxHeight:'100%',maxWidth:'100%',width:'516px',height:'108px'}}/>,
    bgcolor: "#EFEAFD",
  },
  {
    id:2,
    heading: "Thought leadership and technology consulting",
    paragrapgh: [
      `In today's rapidly evolving technological landscape, organisations face the constant challenge of staying ahead of the curve..`,
      "By leveraging our thought leadership and technology consulting services, you can gain a trusted partner who understands the challenges and aspirations of the industry. We collaborate to drive innovation and leverage emerging technologies, empowering us to achieve sustainable growth and competitive advantage in the ever-evolving marketplace.",
      "With a deep understanding of various technologies, platforms, and vendors, we assist in evaluating and selecting the right technology solutions that best fit client requirements, ensuring optimal performance, scalability, and future-proofing.",
    ],
    image:<img src={service2} alt='service-2' style={{maxHeight:'100%',maxWidth:'100%',width:'375px',height:'264px'}}/>,
    bgcolor: "#FFE8D9",
  },
  {
    id:3,
    heading: "Legacy application empowerment",
    paragrapgh: [
      `The legacy application comes with its own risks and expensive maintenance costs.`,
      "Modernise your Legacy application through transformation to improve its functionality, maintainability, performance, and user experience while preserving its core business logic",
      "With our cutting-edge tools, you can automate the synchronisation process, enabling near-real-time data updates. By staying in sync with the latest data, you can make informed decisions faster, respond swiftly to market changes, and gain a competitive edge in your industry.",
    ],
    image:<img src={service3} alt='service-3' style={{maxHeight:'100%',maxWidth:'100%',width:'352px',height:'248px'}}/>,
    bgcolor: "#DEF4FF",
  },
  {
    id:4,
    heading: "Software integration",
    paragrapgh: [
      `We empower your organisation to connect, integrate, and optimise your software ecosystem for enhanced collaboration and productivity.`,
      `Start by thoroughly analysing the client's existing software infrastructure and their specific integration requirements. Understand their business goals, processes, and pain points to identify opportunities for integration.`,
      `We specialise in providing top-notch software integration services to businesses of all sizes. Our team of experts is dedicated to helping seamlessly integrate software systems, streamlining operations, and maximising efficiency.`,
    ],
    image:<img src={service4} alt='service-4' style={{maxHeight:'100%',maxWidth:'100%',width:'392px',height:'264px'}}/>,
    bgcolor: "#E8EFFF",
  },
  {
    id:5,
    heading: "Application maintenance and support",
    paragrapgh: [
      `Our experienced support team possesses deep technical expertise to diagnose and troubleshoot application-related issues efficiently. We employ industry best practices to quickly identify the root cause of problems and implement effective solutions, minimising downtime and maximising productivity.`,
      `Our experts’ analyses applications performance metrics, identify bottlenecks, and optimize system resources to enhance speed, reliability, and scalability. We fine-tune applications to deliver an exceptional user experience, even during peak usage periods.`,
    ],
    image:<img src={service5} alt='service-5' style={{maxHeight:'100%',maxWidth:'100%',width:'386px',height:'248px'}}/>,
    bgcolor: "#E3E3E3",
  },
];
