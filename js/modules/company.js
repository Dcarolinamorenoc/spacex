export const getAllCompany = async (page, limit) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/company/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getCompanyById = async (companyId) => {
    const response = await fetch(`https://api.spacexdata.com/v4/company/${companyId}`);
    const data = await response.json();
    return data;
}


export const getCompany = async ()=>{

    let res = await fetch("https://api.spacexdata.com/v4/company")
    let data = await res.json();

    return data;
}