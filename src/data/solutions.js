import {
  Activity,
  Award,
  BookOpen,
  BookOpenCheck,
  CreditCard,
  Cpu,
  Database,
  FileText,
  Layout,
  Monitor,
  ShieldCheck,
  Sparkles,
  Accessibility,
} from 'lucide-react'

export const solutions = [
  {
    slug: 'online-assessment-system',
    name: 'Online Assessment System',
    category: 'Assessment',
    icon: Monitor,
    shortDescription: 'AI-driven exam platform for objective, subjective, and viva assessments.',
    description:
      'A secure platform for creating, delivering, and analysing assessments across academic, government, and corporate environments.',
    details: [
      'Design exams with objective, subjective, and viva workflows while preserving audit trails.',
      'Automated analytics and reporting help institutions identify performance gaps and improve outcomes.',
      'Role-based access and emphasis on compliance delivers confidence for large-scale programs.',
    ],
    keyHighlights: [
      'Multi-format assessments',
      'Real-time analytics dashboard',
      'Secure role-based delivery',
    ],
    features: [
      {
        icon: Cpu,
        title: 'Smart exam creation',
        description: 'Build adaptive question banks with rich content, multimedia support, and timed sections.',
      },
      {
        icon: ShieldCheck,
        title: 'Secure delivery',
        description: 'Protect assessments with identity verification, browser lockdown, and encryption.',
      },
      {
        icon: Activity,
        title: 'AI-assisted analytics',
        description: 'Measure performance across cohorts with actionable reports and trend visualisations.',
      },
      {
        icon: FileText,
        title: 'Holistic grading',
        description: 'Combine objective, subjective, and viva scores in one configurable grading workflow.',
      },
      {
        icon: Layout,
        title: 'Flexible scheduling',
        description: 'Run live exams, on-demand assessments, and batch sessions for any learner group.',
      },
      {
        icon: Sparkles,
        title: 'Accessibility-ready',
        description: 'Designed for inclusive delivery with assistive-mode support and device independence.',
      },
    ],
    benefits: [
      {
        title: 'Faster exam cycles',
        description: 'Reduce preparation and evaluation time with streamlined workflows and automation.',
      },
      {
        title: 'Better decision-making',
        description: 'Use data-driven insights to continuously refine learning and assessment strategies.',
      },
      {
        title: 'Scalable delivery',
        description: 'Run assessments for small classes or large institutions with reliability and speed.',
      },
    ],
    whoItFor: ['Academic institutions', 'Government bodies', 'Corporate training teams'],
    related: ['proctoring-solution', 'onscreen-marking-solution', 'library-management-system'],
  },
  {
    slug: 'proctoring-solution',
    name: 'Proctoring Solution',
    category: 'Security',
    icon: ShieldCheck,
    shortDescription: 'AI-based remote invigilation with face detection and browser lockdown.',
    description:
      'A modern remote proctoring suite built to protect assessments, validate identity, and flag suspicious behaviour in real time.',
    details: [
      'Live monitoring, face recognition, and automated alerting create a trustworthy exam environment.',
      'Supports multiple cameras and audio channels for high-stakes certification and government programs.',
      'Integrates with assessment workflows to keep every session compliant and transparent.',
    ],
    keyHighlights: [
      'Identity validation',
      'Browser lockdown',
      'Suspicious behaviour alerts',
    ],
    features: [
      {
        icon: Monitor,
        title: 'Live invigilation',
        description: 'Observe candidate activity with automated monitoring and evidence capture.',
      },
      {
        icon: Activity,
        title: 'Behaviour analysis',
        description: 'Detect unusual patterns and annotate review sessions for audit readiness.',
      },
      {
        icon: ShieldCheck,
        title: 'Secure lockdown',
        description: 'Prevent browser navigation and screen sharing during high-stakes assessments.',
      },
      {
        icon: Layout,
        title: 'Session reports',
        description: 'Generate comprehensive invigilation reports for compliance and evaluation.',
      },
      {
        icon: Sparkles,
        title: 'Low-friction setup',
        description: 'Simple candidate onboarding with guided checks and compatibility warnings.',
      },
      {
        icon: Cpu,
        title: 'AI accuracy',
        description: 'Modern machine learning models help minimise false positives and improve trust.',
      },
    ],
    benefits: [
      {
        title: 'Trustworthy delivery',
        description: 'Create a defensible exam process with documentation and event tracking.',
      },
      {
        title: 'Improved compliance',
        description: 'Align invigilation with academic, government and corporate regulations.',
      },
      {
        title: 'Reduced overhead',
        description: 'Automate routine checks while giving teams a central review workspace.',
      },
    ],
    whoItFor: ['Public exam councils', 'Universities', 'Corporate certification teams'],
    related: ['online-assessment-system', 'digital-repository', 'digital-inclusion-accessibility'],
  },
  {
    slug: 'onscreen-marking-solution',
    name: 'Onscreen Marking Solution',
    category: 'Evaluation',
    icon: FileText,
    shortDescription: 'Digital answer script evaluation for faster marking and analytics.',
    description:
      'A digital marking platform that helps examiners evaluate scripts, assign marks, and deliver results with precision and speed.',
    details: [
      'Upload scanned responses or digital answer sheets, then enable examiner workflows with rich annotations.',
      'Consolidated marking dashboards and calibration tools keep evaluation consistent across teams.',
      'Suitable for academic boards, certification bodies, and university grading processes.',
    ],
    keyHighlights: [
      'Examiner login',
      'Digital script evaluation',
      'Analytics and review tools',
    ],
    features: [
      {
        icon: BookOpenCheck,
        title: 'Examiner workspace',
        description: 'Provide evaluators with a distraction-free interface and fast scoring controls.',
      },
      {
        icon: Layout,
        title: 'Standardised rubrics',
        description: 'Apply marking schemes consistently and capture reviewer feedback.',
      },
      {
        icon: Database,
        title: 'Secure storage',
        description: 'Protect scripts with encrypted storage and controlled access rights.',
      },
      {
        icon: Activity,
        title: 'Result analytics',
        description: 'Track marking progress, examiner performance, and score distributions.',
      },
      {
        icon: Sparkles,
        title: 'Calibration support',
        description: 'Help teams align grading standards with sample markers and review cycles.',
      },
      {
        icon: Monitor,
        title: 'Flexible input',
        description: 'Accept scanned scripts, typed responses, or direct digital answer capture.',
      },
    ],
    benefits: [
      {
        title: 'Consistent grading',
        description: 'Reduce subjectivity and ensure transparent evaluation across examiners.',
      },
      {
        title: 'Faster result cycles',
        description: 'Complete marking programs faster with digital workflows and performance tracking.',
      },
      {
        title: 'Easier audits',
        description: 'Maintain an auditable trail of evaluations, corrections, and reviewer notes.',
      },
    ],
    whoItFor: ['Exam boards', 'University departments', 'Certification authorities'],
    related: ['online-assessment-system', 'digital-repository', 'library-management-system'],
  },
  {
    slug: 'econtent',
    name: 'eContent',
    category: 'Content',
    icon: BookOpen,
    shortDescription: 'DRM-protected eBooks and eJournals for academic libraries and institutions.',
    description:
      'A modern digital content platform built for academic libraries, offering easy access to eBooks, journals and multimedia resources.',
    details: [
      'Support secure multi-device access for students, faculty, and research teams.',
      'Manage licensing, DRM protection, and content discoverability from one platform.',
      'Designed specifically for academic and institutional use cases.',
    ],
    keyHighlights: [
      'eBooks & eJournals',
      'DRM protection',
      'Multi-device access',
    ],
    features: [
      {
        icon: BookOpen,
        title: 'Content portal',
        description: 'Offer an intuitive library experience for search, reading, and bookmarking.',
      },
      {
        icon: Database,
        title: 'License management',
        description: 'Track entitlements, renewals and access rights across user groups.',
      },
      {
        icon: ShieldCheck,
        title: 'DRM safeguards',
        description: 'Protect licensed content with watermarking and secure playback controls.',
      },
      {
        icon: Accessibility,
        title: 'Assistive support',
        description: 'Deliver accessible reading experiences with screen-reader friendly interfaces.',
      },
      {
        icon: Layout,
        title: 'Offline reading',
        description: 'Enable secure content download for users with intermittent connectivity.',
      },
      {
        icon: Sparkles,
        title: 'Smart discovery',
        description: 'Recommend titles and resources using metadata and usage patterns.',
      },
    ],
    benefits: [
      {
        title: 'Stronger access control',
        description: 'Protect licensed material with industry-standard DRM and usage policies.',
      },
      {
        title: 'Improved engagement',
        description: 'Support research and learning with accessible, discoverable content.',
      },
      {
        title: 'Institutional fit',
        description: 'Designed for academic and government use, not consumer ebook marketplaces.',
      },
    ],
    whoItFor: ['Academic libraries', 'Research centres', 'Government repositories'],
    related: ['digital-repository', 'digital-inclusion-accessibility', 'library-management-system'],
  },
  {
    slug: 'cad-software',
    name: 'CAD Software',
    category: 'Design',
    icon: Layout,
    shortDescription: 'Computer-aided design tools for engineering and architecture institutions.',
    description:
      'A powerful CAD platform tailored to institutions that teach engineering, architecture, and product design.',
    details: [
      'Create precise drawings, 2D layouts, and 3D models with a modern academic workflow.',
      'Offer instructor-led design labs and project review capabilities for engineering programmes.',
      'Enable collaboration across students, faculty, and technical teams.',
    ],
    keyHighlights: [
      'Academic CAD tools',
      '2D & 3D modelling',
      'Collaborative design workflows',
    ],
    features: [
      {
        icon: Layout,
        title: 'Precision drafting',
        description: 'Draw 2D plans, annotations, and schematics with classroom-ready controls.',
      },
      {
        icon: Monitor,
        title: '3D modelling',
        description: 'Develop parametric models and assemblies with easy-to-use tools.',
      },
      {
        icon: Sparkles,
        title: 'Project collaboration',
        description: 'Share models with peers and instructors for feedback and review.',
      },
      {
        icon: Accessibility,
        title: 'Learning-first UI',
        description: 'Simplified controls and templates keep courses accessible for new learners.',
      },
      {
        icon: Database,
        title: 'Asset library',
        description: 'Manage reusable symbols, parts, and templates across classes.',
      },
      {
        icon: Award,
        title: 'Industry alignment',
        description: 'Keep coursework aligned with modern engineering and architectural standards.',
      },
    ],
    benefits: [
      {
        title: 'Project-ready labs',
        description: 'Enable institutions to teach real-world CAD skills with a stable platform.',
      },
      {
        title: 'Improved collaboration',
        description: 'Bring design reviews into a shared, cloud-friendly workflow.',
      },
      {
        title: 'Reduced learning curve',
        description: 'A curated interface helps students focus on concepts, not configuration.',
      },
    ],
    whoItFor: ['Engineering colleges', 'Architecture schools', 'Technical training centres'],
    related: ['digital-repository', 'econtent', 'digital-inclusion-accessibility'],
  },
  {
    slug: 'iso-consultancy',
    name: 'ISO Implementation & Consultancy',
    category: 'Compliance',
    icon: Award,
    shortDescription: 'ISO certification guidance, process documentation, and audit preparation.',
    description:
      'Support institutions in achieving ISO compliance with end-to-end advisory services and operational tooling.',
    details: [
      'Prepare documentation, workflows, and audit evidence for quality and security standards.',
      'Guide teams through process implementation while keeping stakeholder communication aligned.',
      'Adapt consultancy for academic, government, and corporate environments.',
    ],
    keyHighlights: [
      'Certification guidance',
      'Process documentation',
      'Audit readiness',
    ],
    features: [
      {
        icon: Award,
        title: 'ISO process design',
        description: 'Document quality and security practices with clear, repeatable workflows.',
      },
      {
        icon: FileText,
        title: 'Audit preparation',
        description: 'Generate audit-ready evidence and corrective action logs.',
      },
      {
        icon: ShieldCheck,
        title: 'Compliance tracking',
        description: 'Monitor progress across requirements, stakeholders, and timelines.',
      },
      {
        icon: Layout,
        title: 'Training support',
        description: 'Bring teams up to speed on process ownership and role accountability.',
      },
      {
        icon: Monitor,
        title: 'Documentation portal',
        description: 'Centralise templates, records, and policy updates in a secure library.',
      },
      {
        icon: Sparkles,
        title: 'Continuous improvement',
        description: 'Embed a structured approach for ongoing quality enhancement.',
      },
    ],
    benefits: [
      {
        title: 'Clear certification path',
        description: 'Demystify ISO compliance with guided, sector-specific support.',
      },
      {
        title: 'Stronger governance',
        description: 'Build processes that scale with institutional change and oversight.',
      },
      {
        title: 'Audit confidence',
        description: 'Maintain a robust record of compliance and improvement actions.',
      },
    ],
    whoItFor: ['Institutional leadership', 'Quality assurance teams', 'Regulatory departments'],
    related: ['digital-repository', 'online-assessment-system', 'proctoring-solution'],
  },
  {
    slug: 'digital-inclusion-accessibility',
    name: 'Digital Inclusion & Accessibility',
    category: 'Accessibility',
    icon: Accessibility,
    shortDescription: 'Accessible digital content and WCAG-compliant assistive support.',
    description:
      'Build inclusive digital experiences with accessibility-first content, assistive features, and compliance guidance.',
    details: [
      'Ensure websites, content platforms, and digital services meet international accessibility norms.',
      'Support assistive tools and navigation patterns for diverse learner and citizen needs.',
      'Enable organisations to deliver equitable access across devices and assistive technologies.',
    ],
    keyHighlights: [
      'WCAG compliance',
      'Assistive support',
      'Inclusive design',
    ],
    features: [
      {
        icon: Accessibility,
        title: 'Accessibility audits',
        description: 'Review digital properties for compliance, usability, and assistive compatibility.',
      },
      {
        icon: BookOpen,
        title: 'Inclusive content',
        description: 'Create layouts and assets designed for readability, navigation, and assistive consumption.',
      },
      {
        icon: Sparkles,
        title: 'Screen-reader support',
        description: 'Deliver semantic markup and voice-friendly navigation for all users.',
      },
      {
        icon: Layout,
        title: 'Keyboard-first journeys',
        description: 'Ensure every workflow performs reliably without a mouse or touch screen.',
      },
      {
        icon: Monitor,
        title: 'Accessibility training',
        description: 'Equip teams with knowledge for accessible design and content publishing.',
      },
      {
        icon: ShieldCheck,
        title: 'Policy alignment',
        description: 'Keep output aligned with government and institutional accessibility policies.',
      },
    ],
    benefits: [
      {
        title: 'Broader reach',
        description: 'Make content available to all learners, citizens, and internal stakeholders.',
      },
      {
        title: 'Policy compliance',
        description: 'Reduce risk by following established accessibility standards and documentation.',
      },
      {
        title: 'Better usability',
        description: 'Enhance interfaces for everyone by designing with clarity and organization.',
      },
    ],
    whoItFor: ['Universities', 'Government services', 'Corporate digital teams'],
    related: ['econtent', 'digital-repository', 'library-management-system'],
  },
  {
    slug: 'rfid-library',
    name: 'RFID for Library',
    category: 'Automation',
    icon: CreditCard,
    shortDescription: 'Automated check-in/check-out, inventory, and anti-theft for modern libraries.',
    description:
      'A library automation system that uses RFID technology to streamline circulation, inventory and security.',
    details: [
      'Enable fast self-service and staff-assisted issue management with RFID-tagged assets.',
      'Track inventory in real time and reduce manual reconciliation across physical collections.',
      'Protect valuable resources with intelligent anti-theft and access controls.',
    ],
    keyHighlights: [
      'Self-service circulation',
      'Inventory automation',
      'Asset security',
    ],
    features: [
      {
        icon: CreditCard,
        title: 'RFID checkout',
        description: 'Let users borrow and return materials instantly with contactless scanning.',
      },
      {
        icon: Database,
        title: 'Inventory insight',
        description: 'Monitor collection health with automated stock checks and location updates.',
      },
      {
        icon: ShieldCheck,
        title: 'Anti-theft detection',
        description: 'Protect library assets with exit sensors and alerts for unauthorised movement.',
      },
      {
        icon: Layout,
        title: 'Optimised workflows',
        description: 'Simplify circulation, holds, and reservations with RFID-enabled operations.',
      },
      {
        icon: BookOpen,
        title: 'Patron convenience',
        description: 'Offer a seamless experience for students, staff, and community readers.',
      },
      {
        icon: Sparkles,
        title: 'Real-time tracking',
        description: 'See where items are and when they move within the library ecosystem.',
      },
    ],
    benefits: [
      {
        title: 'Operational speed',
        description: 'Reduce queue times and workload for library staff with contactless automation.',
      },
      {
        title: 'Better asset control',
        description: 'Know the status of your collection with continuous monitoring.',
      },
      {
        title: 'Visitor satisfaction',
        description: 'Improve library accessibility and convenience for every user.',
      },
    ],
    whoItFor: ['Public libraries', 'Academic libraries', 'Corporate knowledge centres'],
    related: ['library-management-system', 'digital-repository', 'econtent'],
  },
  {
    slug: 'digital-repository',
    name: 'Digital Repository',
    category: 'Repository',
    icon: Database,
    shortDescription: 'A searchable institutional repository for research, theses, and reports.',
    description:
      'A scalable repository solution for managing research output, theses, reports, and institutional knowledge.',
    details: [
      'Provide secure search and access to publications, metadata, and archived records.',
      'Keep research safe with long-term preservation and access controls.',
      'Support academic and government transparency with publish-ready workflows.',
    ],
    keyHighlights: [
      'Scalable archive',
      'Secure search',
      'Research management',
    ],
    features: [
      {
        icon: Database,
        title: 'Metadata driven',
        description: 'Structure content with rich metadata for discovery and governance.',
      },
      {
        icon: BookOpen,
        title: 'Search experience',
        description: 'Help users find documents quickly with powerful filters and cross-references.',
      },
      {
        icon: ShieldCheck,
        title: 'Controlled access',
        description: 'Define view, download, and sharing policies for sensitive records.',
      },
      {
        icon: Layout,
        title: 'Preservation tools',
        description: 'Keep documents accessible and compliant with archive management features.',
      },
      {
        icon: Sparkles,
        title: 'Publish workflows',
        description: 'Support review, approval and publishing for institutional research output.',
      },
      {
        icon: Accessibility,
        title: 'Cross-device discovery',
        description: 'Make repositories available on mobile and desktop with responsive interfaces.',
      },
    ],
    benefits: [
      {
        title: 'Research visibility',
        description: 'Make institutional output easier to discover and share.',
      },
      {
        title: 'Preservation certainty',
        description: 'Keep documents safe, searchable and governed for the long term.',
      },
      {
        title: 'Operational clarity',
        description: 'Bring publication, archiving and access into one managed system.',
      },
    ],
    whoItFor: ['Universities', 'Research institutions', 'Government archives'],
    related: ['econtent', 'digital-inclusion-accessibility', 'library-management-system'],
  },
  {
    slug: 'library-management-system',
    name: 'Library Management System',
    category: 'Library',
    icon: BookOpenCheck,
    shortDescription: 'Full library automation with cataloguing, circulation, OPAC and reporting.',
    description:
      'A complete library management platform that streamlines cataloguing, circulation, OPAC and reporting for modern information centres.',
    details: [
      'Manage bibliographic records, circulation workflows and public catalog interfaces in one system.',
      'Give library staff tools for acquisition, lending, returns, and statistics monitoring.',
      'Create a consistent digital library foundation for academic and corporate collections.',
    ],
    keyHighlights: [
      'Cataloguing & circulation',
      'OPAC access',
      'Reporting dashboards',
    ],
    features: [
      {
        icon: BookOpenCheck,
        title: 'Catalog management',
        description: 'Create and maintain bibliographic records with structure and metadata.',
      },
      {
        icon: Layout,
        title: 'Circulation desk',
        description: 'Handle check-outs, renewals, reservations and fines with simple workflows.',
      },
      {
        icon: Monitor,
        title: 'Public OPAC',
        description: 'Provide patrons with a modern searchable catalogue and resource discovery tools.',
      },
      {
        icon: Database,
        title: 'Reporting engine',
        description: 'Generate reports that highlight usage, inventory health and collection trends.',
      },
      {
        icon: Sparkles,
        title: 'Policy automation',
        description: 'Apply lending rules and hold policies consistently across collections.',
      },
      {
        icon: ShieldCheck,
        title: 'Secure asset control',
        description: 'Protect library holdings with access rules and inventory tracking.',
      },
    ],
    benefits: [
      {
        title: 'Library efficiency',
        description: 'Improve staff workflows and reduce manual tasks across the library lifecycle.',
      },
      {
        title: 'Patron satisfaction',
        description: 'Deliver a clean discovery experience for students, faculty, and colleagues.',
      },
      {
        title: 'Stronger oversight',
        description: 'Understand collection performance and availability at a glance.',
      },
    ],
    whoItFor: ['Academic libraries', 'Corporate knowledge centres', 'Government archives'],
    related: ['rfid-library', 'econtent', 'digital-repository'],
  },
]
