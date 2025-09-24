//TODO: Render cards - extensions

// Traer datos del DATA Json

async function getData(){
    try{
        const res = await fetch('../data.json');
        console.log(res)
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error){
        console.error(`Error fetching data: ${error}`);
    }
}
