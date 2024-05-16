export const getAllRoadster = async (page, limit) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/roadster/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getRoadsterId = async (roadsterId) => {
    const response = await fetch(`https://api.spacexdata.com/v4/roadster/${roadsterId}`);
    const data = await response.json();
    return data;
}