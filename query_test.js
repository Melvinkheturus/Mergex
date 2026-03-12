const { createClient } = require('next-sanity');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const query = `
    *[_type == "systemsPage"][0] {
        hero: {
            "headline": heroHeadline,
            "subheadline": heroSubheadline,
            "keyDifferentiator": heroKeyDifferentiator,
            "primaryCTA": heroPrimaryCTA,
            "secondaryCTA": heroSecondaryCTA
        }
    }
`;

async function main() {
  const result = await client.fetch(query);
  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);
