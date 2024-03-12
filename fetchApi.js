export function callApi(url){

    const promise=fetch(url);
    const value=promise.then((response)=>{
        return response.json();
    })
    return value;
}

