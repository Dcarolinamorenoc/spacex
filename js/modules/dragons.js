export const getAllDragons = async (page, limit) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getDragonsById = async (DragonsId) => {
    const response = await fetch(`https://api.spacexdata.com/v4/dragons/${DragonsId}`);
    const data = await response.json();
    return data;
}