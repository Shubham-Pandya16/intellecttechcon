import { Link } from 'react-router-dom'

import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <div className="pt-[132px]">
      <Seo title="Page Not Found" description="The page you requested does not exist." />
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <p className="section-label">Page not found</p>
        <h1 className="display-title mt-4 text-text">The page you are looking for does not exist.</h1>
        <p className="body-copy mt-5">
          Return to the homepage or explore our technology and content solutions for academic, government, and corporate organisations worldwide.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Go Home
        </Link>
      </div>
    </div>
  )
}
