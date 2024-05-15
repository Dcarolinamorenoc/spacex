export const getAllPayloads = async (page, limit) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/payloads/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getPayloadsById = async (payloadsId) => {
    const response = await fetch(`https://api.spacexdata.com/v4/payloads/${payloadsId}`);
    const data = await response.json();
    return data;
}