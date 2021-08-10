import axios from 'axios';

const BaseUrl = "https://jsonplaceholder.typicode.com";
export const BaseUrlAlt = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`
});
const ApiCallDefaultTimeout = 1000; // in ms

export const getDataUsingSimpleGetCall = async () => {
    try {
        const response = await BaseUrlAlt.get(
            `posts/1`,
            { timeout: ApiCallDefaultTimeout }
        );
        if (response.data && response.status === 200)
            alert(JSON.stringify(response.data));
        else
            alert("Unknown error occured");
    } catch (error) {
        // handle error
        alert(error.message);
    }
};

export const postDataUsingSimplePostCall = async () => {
    try {
        const response = await axios
            .post(`${BaseUrl}/posts`, {
                title: 'Rohejul Islam',
                body: 'Raect Native',
                userId: 1,
            }, { timeout: ApiCallDefaultTimeout })
        if (response.data && response.status === 201)
            alert(JSON.stringify(response.data));
        else
            alert("Unknown error occured");
    } catch (error) {
        // handle error
        alert(error.message);

    }
};

export const multipleRequestsInSingleCall = async () => {
    try {
        const response = await Promise.all([
            axios.get(`${BaseUrl}/posts/1`),
            axios.get(`${BaseUrl}/posts/2`)
        ], { timeout: ApiCallDefaultTimeout });

        alert(JSON.stringify(response[1]));
        alert(JSON.stringify(response[0]));
    } catch (error) {
        // handle error
        alert(error.message);
    }
};