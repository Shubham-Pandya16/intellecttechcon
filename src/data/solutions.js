import {
  Accessibility,
  BadgeCheck,
  BookOpen,
  ClipboardList,
  Compass,
  Database,
  Library,
  PenLine,
  ShieldCheck,
  Wifi,
} from 'lucide-react'

export const solutions = [
  {
    slug: 'online-assessment-system',
    name: 'Online Assessment System',
    category: 'Assessment',
    icon: ClipboardList,
    metaDescription:
      'AI Driven Online Exam Platform to automate objective, subjective assessments powered with intelligent proctoring and analytics.',
    shortDescription:
      'AI driven online exam platform for objective, subjective, and viva-based assessments.',
    heroDescription:
      'AI Driven Online Exam Platform to automate objective, subjective assessments powered with intelligent proctoring and analytics.',
    overview: [
      'AI Driven Online Exam Platform to automate objective, subjective assessments powered with intelligent proctoring and analytics. The platform is useful to conduct exams where the candidate is supposed to type answers for theory-based questions. Our platform supports theory-based exams with an answer-checking facility available for the examiner.',
      'Define the Viva exam online - candidates can use their mobile and microphone to appear for the online exam. Question text associated with the viva is displayed on screen where the candidate can speak their answer. The entire speech is recorded in the system. The examiner is provided a login to listen to the audio and evaluate or assign marks for each individual answer attempted by the candidate.',
    ],
    highlights: ['AI-driven assessment delivery', 'Theory-based answer evaluation', 'Online viva with recorded responses'],
    featureSectionTitle: 'Use Cases / Exam Types',
    featureItems: [
      'Aptitude Test',
      'Certification Test',
      'Academic Exams',
      'Hiring Assessment',
      'Competitive Exam / Custom Test',
      'Psychometric Test',
    ],
    secondarySectionTitle: 'Key Capabilities',
    secondaryItems: [
      'Automates objective and subjective assessments with intelligent proctoring and analytics.',
      'Supports theory-based exams where candidates type answers and examiners can review them efficiently.',
      'Enables online viva exams where question text is shown on screen and spoken answers are recorded in the system.',
      'Allows examiners to listen to recorded responses and assign marks for each attempted answer.',
    ],
    audience: ['Academic institutions', 'Government bodies', 'Corporate organisations'],
    related: ['proctoring-solution', 'onscreen-marking-solution', 'library-management-system'],
  },
  {
    slug: 'proctoring-solution',
    name: 'Proctoring Solution',
    category: 'Assessment Security',
    icon: ShieldCheck,
    metaDescription:
      'Manage Remote Assessments with Proctoring Services, AI-Driven Exam Security, and Malpractice Prevention.',
    shortDescription:
      'Manage remote assessments with proctoring services, AI-driven exam security, and malpractice prevention.',
    heroDescription:
      'Manage Remote Assessments with Proctoring Services, AI-Driven Exam Security, and Malpractice Prevention.',
    overview: [
      'Manage Remote Assessments with Proctoring Services, AI-Driven Exam Security, and Malpractice Prevention. Scale your assessment operations to eliminate exam centre infrastructure. Remote Proctoring and auto image capturing technology help simplify the exam invigilation process. Many training and certification institutes are using it successfully.',
      'Using Remote Proctoring, organisations can conduct an exam of any scale. Candidates sitting at any location can be tracked using remote proctoring - candidates do not need to visit a specific location or exam centre.',
    ],
    highlights: ['Remote invigilation at scale', 'AI-based malpractice prevention', 'Candidate tracking from any location'],
    featureSectionTitle: 'Key Features',
    featureItems: [
      'Useful to manage online exams happening across multiple cities',
      'Live Chat by Proctor with Candidate',
      'Artificial Intelligence to identify cheating',
      'AI-based Auto Proctoring',
      'Eliminate Online Exam Malpractices',
      'Video or image capturing during online exam process',
      'Authenticate remote candidate easily',
      'Remote Proctor can control exams from a remote location',
      'Candidate Face Detection and Verification',
      'Adopted by many universities and certification agencies globally',
    ],
    secondarySectionTitle: 'Why Organisations Use It',
    secondaryItems: [
      'Eliminates dependence on exam centre infrastructure for remote assessments.',
      'Helps simplify invigilation through remote proctoring and automated image capture.',
      'Supports training institutes, certification bodies, and large-scale assessment teams.',
      'Makes it possible to conduct exams internationally without requiring candidates to travel.',
    ],
    audience: ['Training institutes', 'Certification agencies', 'Assessment teams'],
    related: ['online-assessment-system', 'onscreen-marking-solution', 'iso-consultancy'],
  },
  {
    slug: 'onscreen-marking-solution',
    name: 'Onscreen Marking Solution',
    category: 'Evaluation',
    icon: PenLine,
    metaDescription:
      'Onscreen Marking to evaluate Answer sheets digitally to simplify moderation and result processing.',
    shortDescription:
      'Evaluate answer sheets digitally to simplify moderation and result processing.',
    heroDescription:
      'Onscreen Marking to evaluate answer sheets digitally to simplify moderation and result processing.',
    overview: [
      'Onscreen Marking to evaluate answer sheets digitally to simplify moderation and result processing.',
      'Digital Assessments with Artificial Intelligence for Candidate Authentication and Authorisation with multiple language-based assessments.',
    ],
    highlights: ['Digital answer evaluation', 'Simplified moderation', 'Quick result processing'],
    featureSectionTitle: 'Key Features',
    featureItems: [
      'Simplified Moderation process',
      'Quick result processing',
      'Evaluate answer sheets digitally',
      'Scanning answer sheets',
      'Remove location constraint for examiners',
      'Patented technology for security',
    ],
    secondarySectionTitle: 'Operational Outcomes',
    secondaryItems: [
      'Supports digital assessments with artificial intelligence for candidate authentication and authorisation.',
      'Enables multiple language-based assessments for broader institutional use.',
      'Removes the location constraint for examiners and helps teams mark from anywhere.',
      'Improves speed, consistency, and security across moderation and result workflows.',
    ],
    audience: ['Exam boards', 'Universities', 'Certification authorities'],
    related: ['online-assessment-system', 'proctoring-solution', 'digital-repository'],
  },
  {
    slug: 'iso-consultancy',
    name: 'ISO Implementation & Consultancy',
    category: 'Consultancy',
    icon: BadgeCheck,
    metaDescription:
      'Customised ISO solutions for organisations of all sizes, delivered by globally certified consultants with diversified industry experience.',
    shortDescription:
      'Customised ISO solutions delivered by globally certified consultants and IT security experts.',
    heroDescription:
      'Customised ISO solutions for organisations of all sizes, delivered by globally certified consultants with diversified industry experience.',
    overview: [
      'Our customised solutions are appropriate for organisations of all sizes and nature, irrespective of their location. Our team comprises globally Certified (PECB & IRCA) ISO Consultants, Trainers and IT Security experts with diversified industry experience.',
      'They work relentlessly to provide excellent consultancy services and achieve the highest level of customer satisfaction by developing sustainable systems across the globe.',
    ],
    highlights: ['Globally certified consultants', 'Sustainable systems', 'Customer satisfaction focus'],
    featureSectionTitle: 'Services Offered',
    featureItems: [
      'ISO 9001 Implementation',
      'ISO 20000 Implementation',
      'ISO 22301 Implementation',
      'ISO 27001 Implementation',
      'Risk Assessment',
      'IT Disaster Recovery',
    ],
    secondarySectionTitle: 'Why Organisations Choose It',
    secondaryItems: [
      'Appropriate for organisations of all sizes and nature, irrespective of location.',
      'Delivered by globally certified ISO consultants, trainers, and IT security experts.',
      'Backed by diversified industry experience and a relentless service mindset.',
      'Focused on building sustainable systems and the highest level of customer satisfaction.',
    ],
    audience: ['Academic institutions', 'Government organisations', 'Corporate organisations'],
    related: ['proctoring-solution', 'digital-repository', 'online-assessment-system'],
  },
  {
    slug: 'cad-software',
    name: 'CAD Software',
    category: 'Design Technology',
    icon: Compass,
    metaDescription:
      'CAD software to increase designer productivity, improve design quality and create a database for architectural, engineering and construction applications.',
    shortDescription:
      'CAD software to improve design productivity, quality, and compatibility for AEC applications.',
    heroDescription:
      'CAD software to increase designer productivity, improve design quality and create a database for architectural, engineering and construction applications.',
    overview: [
      'CAD software is used to increase the productivity of the designer, improve the quality of design and to create a database for architectural, engineering and construction applications.',
      'By using the latest IntelliCAD 10.1 Engine, Open Design Alliance, dwg or dxf Libraries, ACIS 3D Modelling Kernel, and many other technologies, it ensures file support from early R2.5 right through to the latest version of dwg or dxf. It also supports other file formats including .dgn, .step or .stp, .iges or .igs, .stl, .obj, 2D PDF, 3D PDF, .svg, and .dae. The interface and commands are designed to be familiar and easy to migrate from any CAD software.',
    ],
    highlights: ['Broad file support', 'Familiar CAD interface', 'Permanent licence option'],
    featureSectionTitle: 'Key Features',
    featureItems: [
      'Access Tutorial Videos from within the software',
      'Block Library of over 5,000 Blocks, and users can add custom blocks too',
      'ActCAD Converter for batch auditing and file conversions',
      'Convert PDF to DWG or DXF files from within the software',
      'Artisan 3D Renderer to create photorealistic presentations and drawings',
      'Option for permanent licence',
      'Fully compatible with AutoCAD file formats',
      'Convert Image to DWG or DXF files with raster to vector support',
      'Simple self-help module to address common queries',
    ],
    secondarySectionTitle: 'Why Design Teams Adopt It',
    secondaryItems: [
      'Improves designer productivity while raising the quality of design output.',
      'Supports architectural, engineering, and construction applications with familiar commands.',
      'Provides compatibility with a wide range of industry file formats for easier collaboration.',
      'Helps institutions and organisations migrate from other CAD software with minimal friction.',
    ],
    audience: ['Engineering institutions', 'Architectural teams', 'Construction professionals'],
    related: ['econtent', 'digital-repository', 'iso-consultancy'],
  },
  {
    slug: 'econtent',
    name: 'eContent',
    category: 'Knowledge Content',
    icon: BookOpen,
    metaDescription:
      'eBooks, eJournals and databases from various publishers and aggregators across Science, Technology, Medicine, Engineering, and more.',
    shortDescription:
      'eBooks, eJournals, and databases from multiple publishers and aggregators across key disciplines.',
    heroDescription:
      'eBooks, eJournals and databases from various publishers and aggregators across Science, Technology, Medicine, Engineering, and more.',
    overview: [
      'We understand the power of knowledge and information dissemination. Relevant content plays an important role in every step of the user journey to create a concentrated, pertinent experience in user interaction.',
      'We offer eBooks, eJournals and databases from various publishers and aggregators. eBooks and eJournals are available in different subjects including Science, Technology, Medicine, Engineering, Computer Science, Management, Law, Humanities and Education.',
      'We empower knowledge custodians and users. We support researchers to publish content, expanding the boundaries of knowledge for the benefit of the community.',
    ],
    highlights: ['Multi-subject digital collections', 'Publisher and aggregator partnerships', 'Support for research publishing'],
    featureSectionTitle: 'Content and Service Areas',
    featureItems: [
      'eBooks, eJournals and databases from various publishers and aggregators',
      'Subject coverage across Science, Technology, Medicine, Engineering, Computer Science, Management, Law, Humanities and Education',
      'Content experiences designed to support relevant, concentrated user interaction',
      'Support for researchers to publish content and extend the boundaries of knowledge',
    ],
    secondarySectionTitle: 'How It Supports Knowledge Communities',
    secondaryItems: [
      'Helps institutions deliver trusted digital collections to learners, faculty, and professionals.',
      'Supports knowledge custodians with content access that is organised, discoverable, and relevant.',
      'Extends the reach of scholarly and professional information through digital dissemination workflows.',
      'Creates a dependable content foundation for academic, government, and corporate organisations globally.',
    ],
    audience: ['Libraries', 'Research communities', 'Knowledge-driven organisations'],
    related: ['digital-repository', 'digital-inclusion-accessibility', 'library-management-system'],
  },
  {
    slug: 'digital-inclusion-accessibility',
    name: 'Digital Inclusion & Accessibility',
    category: 'Accessibility',
    icon: Accessibility,
    metaDescription:
      'AI-powered digitization, translation and audio-tization services for printed and handwritten documents across 60 global languages, supporting institutions and people with print disabilities.',
    shortDescription:
      'AI-powered digitisation, translation, and audio-tisation services across 60 global languages.',
    heroDescription:
      'AI-powered digitization, translation and audio-tization services for printed and handwritten documents across 60 global languages, supporting institutions and people with print disabilities.',
    overview: [
      'Solution for digitally transforming schools, colleges, universities, libraries and offices with AI-powered technology products that offer cutting-edge digitisation, translation and audio-tisation services for printed as well as handwritten documents across 60 global languages.',
      'The solutions also contribute to the social impact mission of making institutions inclusive for people with print disabilities such as the visually impaired, low-vision users, people with dyslexia, and for people from regional language backgrounds.',
    ],
    highlights: ['Digitisation across 60 global languages', 'Translation and audio-tisation services', 'Inclusive access for people with print disabilities'],
    featureSectionTitle: 'Key Capabilities',
    featureItems: [
      'AI-powered digitisation for printed as well as handwritten documents',
      'Translation services across 60 global languages',
      'Audio-tisation services that make content easier to consume in accessible formats',
      'Digital transformation support for schools, colleges, universities, libraries and offices',
    ],
    secondarySectionTitle: 'Inclusive Impact',
    secondaryItems: [
      'Helps institutions serve visually impaired and low-vision users with more inclusive access to information.',
      'Supports people with dyslexia and people from regional language backgrounds through alternative content experiences.',
      'Extends the social impact mission of digital inclusion while improving access to institutional knowledge.',
      'Makes accessibility part of everyday operations rather than an afterthought in content delivery.',
    ],
    audience: ['Educational institutions', 'Libraries', 'Public and private organisations'],
    related: ['econtent', 'digital-repository', 'library-management-system'],
  },
  {
    slug: 'rfid-library',
    name: 'RFID for Library',
    category: 'Library Automation',
    icon: Wifi,
    metaDescription:
      'RFID-based library management using radio wave technology to identify, track and manage library materials with automated check-in and check-out and enhanced security.',
    shortDescription:
      'RFID-based library management for automated circulation, inventory tracking, and security.',
    heroDescription:
      'RFID-based library management using radio wave technology to identify, track and manage library materials with automated check-in and check-out and enhanced security.',
    overview: [
      'RFID technology is a wireless communication technology that uses radio waves to identify and track objects. In libraries, RFID tags are embedded in library materials such as books, CDs and DVDs, and these tags can be read and programmed by RFID readers located in the library. Each RFID tag contains a unique identifier, effectively acting as a digital fingerprint for the associated item. This identifier is instrumental in tracking the material location, circulation status, and other pertinent details. The RFID Library Management System utilises this advanced technology to optimise library operations comprehensively.',
      'Libraries around the world are embracing the power of RFID technology, transforming the way users interact with books and information. With RFID tags embedded in each book, libraries now offer a seamless and efficient borrowing experience. Library patrons can simply wave their books at self-service kiosks, instantly updating their accounts, saving time and ensuring accurate inventory management.',
      'Step into the future of library services with RFID and enjoy a new level of convenience in operations.',
    ],
    highlights: ['Wireless identification and tracking', 'Self-service borrowing experience', 'Optimised library operations'],
    featureSectionTitle: 'Benefits',
    featureItems: [
      'Time Saving for Both Librarian and Patron',
      'Cost Saving in the Long Run',
      'Improved Circulation Process',
      'Efficient Stock Management',
      'Excellent Security',
      'Data Analytics of Patrons, with SIP2 or NCIP integration compatibility',
    ],
    secondarySectionTitle: 'RFID Solution Includes',
    secondaryItems: [
      'RFID Tags for Books, CD or DVDs',
      'Staff Station',
      'Self Service Kiosk',
      'Inventory Management',
      'RFID Security Gate',
      'Intelligent Shelf',
      'Book Drop with Auto Sorter',
    ],
    audience: ['Academic libraries', 'Public libraries', 'Institutional libraries'],
    related: ['library-management-system', 'digital-repository', 'econtent'],
  },
  {
    slug: 'digital-repository',
    name: 'Digital Repository',
    category: 'Repository',
    icon: Database,
    metaDescription:
      'DSpace-based digital repository system for long-term storage, access and preservation of digital content for institutions.',
    shortDescription:
      'DSpace-based digital repository for long-term storage, access, and preservation of digital content.',
    heroDescription:
      'DSpace-based digital repository system for long-term storage, access and preservation of digital content for institutions.',
    overview: [
      'DSpace repository software serves a specific need as a digital archives system, focused on the long-term storage, access and preservation of digital content.',
      'DSpace is constructed with Java web applications, multiple programs and an associated metadata store. The web applications provide interfaces for administration, deposit, ingest, search and access. The asset store is maintained on a file system or similar storage system. Metadata, including access and configuration information, is stored in a relational database supporting PostgreSQL and Oracle. DSpace holdings are available primarily via a web interface. More recent versions of DSpace also support faceted search and browse functionality using Apache Solr.',
    ],
    highlights: ['Long-term digital preservation', 'Metadata-driven access', 'Web-based discovery'],
    featureSectionTitle: 'DSpace Enables Organisations To',
    featureItems: [
      'Capture and describe digital material using a submission workflow module or a variety of programmatic ingest options',
      'Distribute an organisation digital assets over the web through a search and retrieval system',
      'Preserve digital assets over the long term',
    ],
    secondarySectionTitle: 'Key Features of DSpace',
    secondaryItems: [
      'Open source software',
      'Completely customisable to fit user needs',
      'Manage and preserve all formats of digital content, including PDF, Word, JPEG, MPEG, and TIFF files',
      'Apache SOLR-based search',
      'Granular group-based access control',
    ],
    audience: ['Universities', 'Research institutions', 'Archives and repositories'],
    related: ['econtent', 'library-management-system', 'digital-inclusion-accessibility'],
  },
  {
    slug: 'library-management-system',
    name: 'Library Management System',
    category: 'Library Systems',
    icon: Library,
    metaDescription:
      'Koha open-source integrated library system used worldwide by public, school, special and academic libraries, fully featured and scalable.',
    shortDescription:
      'Koha-based library management system with cataloguing, circulation, OPAC, and reporting.',
    heroDescription:
      'Koha open-source integrated library system used worldwide by public, school, special and academic libraries, fully featured and scalable.',
    overview: [
      'Koha is an open-source integrated library system (ILS), used worldwide by public, school and special libraries, as well as larger academic libraries. Koha is a fully featured, scalable library management system. Development is sponsored by libraries of varying types and sizes, volunteers, and support companies worldwide.',
      'Koha is a web-based ILS with a SQL database, MariaDB or MySQL, back end, with cataloguing data stored in MARC and accessible via Z39.50 or SRU. The user interface, OPAC, is configurable and has been translated into many languages.',
    ],
    highlights: ['Open-source and scalable', 'Web-based OPAC', 'Used worldwide across library types'],
    featureSectionTitle: 'Koha Modules',
    featureItems: [
      'Union catalog facility',
      'Online circulation',
      'Barcode printing',
      'Patron card creation',
      'Report generation',
      'Patron self-registration via OPAC',
      'Cataloguing',
      'Circulation',
      'Serials',
      'Acquisition',
      'Administration',
      'Integration with discovery',
    ],
    secondarySectionTitle: 'Key Highlights',
    secondaryItems: [
      'Full-featured ILS with acquisitions, circulation, cataloguing, serials management, authorities, flexible reporting, label printing, multi-format notices, and offline circulation.',
      'Multilingual and translatable, with a large number of available languages and more added every year.',
      'Full-text searching with enhanced catalogue display and support for integrations such as Amazon, Google, LibraryThing, Open Library, and Syndetics.',
      'Library standards compliant with MARC 21, UNIMARC, Z39.50, SRU or SW, SIP2, and SIP or NCIP for interoperability.',
      'Web-based interfaces for OPAC, circulation, management, and self-checkout using standards-compliant web technologies.',
    ],
    audience: ['Public libraries', 'School libraries', 'Academic libraries'],
    related: ['rfid-library', 'digital-repository', 'econtent'],
  },
]
