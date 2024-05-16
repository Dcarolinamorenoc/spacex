export const getAllStarlink = async (page, limit) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getStarlinkById = async (starlinkId) => {
    const response = await fetch(`https://api.spacexdata.com/v4/starlink/${starlinkId}`);
    const data = await response.json();
    return data;
}