import { getClient } from './sanity'

export async function getAllFeatureItems() {
    const data = await getClient().fetch(`*[_type == "featureItem"] | order(_createdAt asc) {_id, icon, name, description}`)
    return data
}

export async function getAllContactItems() {
    const data = await getClient().fetch(`*[_type == "contactItem"] | order(_createdAt asc) {_id, icon, title, addressLine1, addressLine2, city, state, zipcode, phone, email}`)
    return data
}

export async function getAllTweetUrls() {
    const data = await getClient().fetch(`*[_type == "tweetUrl"] | order(_createdAt asc) {url}`)
    return data.map(tweet => tweet.url.match(/\/(\d+)\/?$/g)[0].replace(/\//g, ''))
}
