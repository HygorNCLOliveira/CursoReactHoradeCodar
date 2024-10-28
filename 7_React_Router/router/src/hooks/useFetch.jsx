import {useState, useEffect} from 'react'

//4- custom hook
export const useFetch = (url) => {

    const [data, setData] = useState(null)

    // 5 - Refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    // 6- Loading
    const [loading, setLoading] = useState(false);

    // 7 - Erros
    const [error, setError] = useState(null);


    const httpConfig = (data, method) =>{
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "aplication/json",
                },
                body: JSON.stringify(data),
            });

            setMethod(method);
        }
    }

    useEffect(() => {
       

        const fecthData = async () => {
             // 7 Trantendo erros
            try {

            // 6 - Loading 
            setLoading(true)

            const res = await fetch(url)
            const json = await res.json();

            setData(json)

            setLoading(false)
            } catch (error) {
                console.log(error.message)

                setError("Houve algum erro ao carregar os dados!")
                setLoading(false)
            }
            
        };

        fecthData();

    },[url, callFetch]);

    // 5- Refatorando post

    useEffect(() => {

        const httpRequest = async() => {
            let json

            if(method === "POST"){
                // 6 - Loading
                setLoading(true)

                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                json = await res.json();

                setLoading(false)
            };

            setCallFetch(json)
        }
        httpRequest();

    }, [config, method, url])

    return {data, httpConfig, loading, error}

}