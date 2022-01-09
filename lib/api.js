import { getClient } from './sanity'

export async function getAllFeatureItems() {
    const data = await getClient().fetch(`*[_type == "featureItem"] | order(_createdAt asc) {_id, icon, name, description}`)
    return data
}