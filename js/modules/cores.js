export const getAllCores = async (page, limit) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getCoreById = async (coreId) => {
    const response = await fetch(`https://api.spacexdata.com/v4/cores/${coreId}`);
    const data = await response.json();
    return data;
}
