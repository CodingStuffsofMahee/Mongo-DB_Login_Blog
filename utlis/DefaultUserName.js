const axios = require('axios');
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
        const response = await axios.get(url, options)
        const userName = response.data.items.userName
        return userName
    } catch (error) {
        console.error(error);
    }
    // try {
    //     return new Promise((res, rej) => {
    //         setTimeout(() => {
    //             const response =fetch(url, options);
    //             const result = response.then((res) => {
    //                 return res.json()
    //             }).then((jsonResult) => {
    //                 return jsonResult.items.username
    //             });
    //             res(result);
    //         }, 2000);
    //     })
    // } catch (error) {
    //     console.error(error);
    //     return error;
    // }
}
defaultUsername().then((res) => {
    console.log(res);
})
module.exports = { defaultUsername, }