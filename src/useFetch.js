import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);

    useEffect(() => {
      const abortCont = new AbortController();


        setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
          .then(response => {
            if(!response.ok) {throw Error('Something went wrong!!');}
            return response.json();
          })
          .then(data => {
            setData(data);
            setIsPending(false);
          })
          .catch(err =>{
            if(err.name === 'AbortError'){
              console.log('fetch aborted');
            }
            else{
              setIsPending(false);
              setErr(err.message);
            }
          })
        }, 1000)


        
        return () => abortCont.abort();
      }, [url])

      return { data, isPending, err }
}

export default useFetch;