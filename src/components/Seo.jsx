import { useEffect } from 'react'

import { companyOverview } from '../data/siteContent'

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${companyOverview.name}` : companyOverview.name

    const tag = document.querySelector('meta[name="description"]')
    if (tag) {
      tag.setAttribute('content', description || companyOverview.metaDescription)
    }
  }, [description, title])

  return null
}
