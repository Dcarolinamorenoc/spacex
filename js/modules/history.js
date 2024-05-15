export const getAllHistory = async (page, limit) => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/history/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getHistoryById = async (HistoryId) => {
    const response = await fetch(`https://api.spacexdata.com/v4/history/${HistoryId}`);
    const data = await response.json();
    return data;
}