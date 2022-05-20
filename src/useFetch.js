// inspired from The Net Ninja + jasonwatmore.com

import { useState, useEffect } from "react";

const useFetch = (url, initObj = null) => {
    // the data that will be returned
    const [data, setData] = useState(null);
    // if its still downloading
    const [isPending, setIsPending] = useState(true);
    // if an error occurred
    const [error, setError] = useState(null);

    // this runs when the url (given as a parameter) changes
    useEffect(() => {
        // the main function that will fetch the data, its async because the system doesn't have to wait for it
        const fetchData = async (url) => {
            // there might be errors, so we try / catch this
            try{
                console.log(`-> useFetch: fetching ${url} \n-> with ${initObj}`);
                // fetch from the url, might take some time so we wait for it
                const result = await fetch(url, initObj);
                // test of the received data is json
                const isJson = result.headers.get('content-type')?.includes('application/json');
                // if the data is json, it will convert it into javascript object, otherwise the object will have null
                const jsonData = isJson ? await result.json() : null;

                // the result from the fetch sais its not ok, there is an error so we get the error
                if(!result.ok) {
                    // the error text will be the message from the converted object is there is one, otherwise will be the status from the connection (404 likely)
                    const errorText = (jsonData && jsonData.message) || result.status;
                    // we throw the error so it will be caught by the try/catch block
                    throw Error(errorText);     //throw Error('could not fetch the data for that resource');
                }
                
                // if we got here no error happened, so we set the state variables using their setters
                setData(jsonData);
                // pending is false becaue it finished
                setIsPending(false);
                // error is null because there is no error
                setError(null);
            } catch(err) {
                // on error we set pending to false (it finished)
                setIsPending(false);
                // this is the error it encountered (the object data is already null)
                setError(err.message);
            } 
        }
        // we call the function
        fetchData(url);
    },[url,initObj])

    // we return these three pieces of information
    return { data, isPending, error }
}        

export default useFetch;



// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch(url)
//         .then(res => {
//             if(!res.ok)
//                 throw Error(`could not fetch the data for that resource\n${ (data && data.message) || response.status }`);
//             return res.json();
//         })
//         .then(data => {
//             setData(data);
//             setIsPending(false);
//             setError(null);
//         })
//         .catch(err => {
//             setIsPending(false);
//             setError(err.message);
//         })
//     },[url]);

//     return { data, isPending, error }
// }

// export default useFetch;