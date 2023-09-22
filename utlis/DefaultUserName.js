const defaultUsername = async () => {
    const url = 'https://random-username-generate.p.rapidapi.com/?locale=en_US&minAge=18&maxAge=50&domain=ugener.com';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f830cd059cmshfa20dc2ec5bde35p131bcejsn1f852ea9f45a',
            'X-RapidAPI-Host': 'random-username-generate.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
}
module.exports=defaultUsername