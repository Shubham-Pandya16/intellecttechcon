import {
  Brain,
  Briefcase,
  Building2,
  CircleDollarSign,
  Cpu,
  Eye,
  Globe,
  GraduationCap,
  HeartHandshake,
  Landmark,
  LayoutGrid,
  Lock,
  Settings2,
  Target,
  Trophy,
  Users,
} from 'lucide-react'

export const companyOverview = {
  name: 'Intellect Techcon Solutions',
  tagline: 'Technology and Content Provider',
  metaDescription:
    'Intellect Techcon Solutions provides affordable, secure, and scalable AI-proctored online assessments, eBooks, eJournals, CAD software, and ISO solutions for academic, government, and corporate sectors.',
  heroSubtext:
    'Intellect Techcon Solutions uses its years of experience to provide affordable, scalable and highly secured technology and content solutions to academic, government and corporate organisations worldwide. Our client-centric approach and customised services empower the knowledge community.',
  homeAbout:
    'Intellect Techcon Solutions, using its years of experience, works with users to provide affordable solutions and services to academic, government and corporate organisations. The solutions offered are scalable, highly secured and affordable. We empower the knowledge community with solutions such as AI-proctored Online Assessment System, eBooks, eJournals, CAD Software, ISO Implementation and Consultancy. Our client-centric approach and customised services enable users to achieve their goals.',
  vision: 'To be the preferred provider of Technology and Content solutions.',
  mission: 'Empower knowledge community with reliable content and technology.',
  goal: 'Deliver client-centric affordable and scalable solutions.',
}

export const contactDetails = {
  email: 'sales@intellecttechcon.com',
  phone: '+971 50 6930558',
  address: 'P.O. Box 88878, Dubai, United Arab Emirates',
}

export const homeStats = [
  { label: 'Solutions', value: 10, suffix: '+', display: '10+', icon: LayoutGrid },
  { label: 'Sectors Served', value: 3, display: '3', icon: Users },
  { label: 'AI-Powered', value: null, display: 'AI', icon: Cpu },
  { label: 'Trusted Globally', value: null, display: 'Global', icon: Globe },
]

export const homeFeatures = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'AI-driven platforms help organisations automate assessment, monitoring, and knowledge workflows with confidence.',
  },
  {
    icon: CircleDollarSign,
    title: 'Affordable Pricing',
    description: 'Affordable solutions and services are delivered without compromising reliability, scalability, or security.',
  },
  {
    icon: Lock,
    title: 'Highly Secure & Scalable',
    description: 'Highly secured platforms and sustainable systems are built to support growth across institutional environments.',
  },
  {
    icon: HeartHandshake,
    title: 'Client-Centric Approach',
    description: 'Customised services are aligned with user goals so each deployment stays relevant and practical.',
  },
  {
    icon: Building2,
    title: 'Academic & Government Ready',
    description: 'Solutions are designed for academic, government, and corporate organisations with strong operational expectations.',
  },
  {
    icon: Settings2,
    title: 'Fully Customisable',
    description: 'Flexible content and technology services adapt to the way each organisation works internationally.',
  },
]

export const sectors = [
  {
    icon: GraduationCap,
    title: 'Academic Institutions',
    description: 'Support teaching, assessments, libraries, repositories, and research ecosystems with dependable digital infrastructure.',
  },
  {
    icon: Landmark,
    title: 'Government Bodies',
    description: 'Strengthen compliance, secure examinations, archives, and inclusive citizen-facing knowledge services.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Organisations',
    description: 'Enable training, certification, governance, and knowledge operations with scalable technology and content solutions.',
  },
]

export const aboutPillars = [
  { icon: Eye, title: 'Vision', description: companyOverview.vision },
  { icon: Target, title: 'Mission', description: companyOverview.mission },
  { icon: Trophy, title: 'Goal', description: companyOverview.goal },
]
