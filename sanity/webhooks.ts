// Webhooks configuration for Sanity Studio

export const webhooks = [
  {
    name: 'On publish',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate`,
    on: ['create', 'update', 'delete'],
    filter: {
      types: ['home', 'service', 'feature', 'testimonial', 'caseStudy'],
    },
    projection: {
      // Include these fields in the webhook payload for granular revalidation
      _id: true,
      _type: true,
      slug: true
    },
    headers: {
      'Content-Type': 'application/json',
    },
    body: ({ _id, _type, slug }: { _id: string; _type: string; slug: { current: string } }) => ({
      secret: process.env.REVALIDATION_SECRET,
      _id,
      _type,
      slug: slug.current
    }),
  },
];