export const fetchNewsArticles = async (q, fromDate) => {
    const res = await fetch('/api/search', {
        method: "POST",
        body: JSON.stringify({ q, from_date: fromDate }),
        headers: {'Content-type': "application/json", 'Accept':"/application/json"},
    })
    return await res.json()
}

export const fetchMonthlyNews = async(q) => {
    const date = new Date()
    let month = date.getMonth() + 1
    month = month < 10 ? `0${month} `: month.toString()
    const year = date.getFullYear()
    const { articles: searchResults } = await fetchNewsArticles(
        q,
        `${year}-${month}01`
    )
    return searchResults
}