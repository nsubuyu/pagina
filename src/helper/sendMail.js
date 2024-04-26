const url = process.env.REACT_APP_API_CONTACT

const response = async (data) => {
    const response = await fetch(url,{
        //mode: 'same-origin',
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    });
    return response
}

export default response