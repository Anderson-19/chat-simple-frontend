
export const getAll = async (url: string) =>{
    const request = await fetch(`${url}/api/`);
    const data= await request.json();
    return data;
}



