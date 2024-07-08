import fetch from "node-fetch";
import { AbortController } from "abort-controller";

const cont = new AbortController();
const signal = cont.signal;

async function getData() {

    const url = "http://www.google.com";
    try {
        const response = await fetch(url, {signal});
        if (!response.ok) {
            throw new Error('${response.status}');
        }
        const data = await response.text();
        console.log(data);
    
    }
    catch (error) {
        if (error.name == 'AbortError') {
            console.log("Abort error");
        } else {
            console.log('eroor fecthing data:', error);
        }
      
    }


}

getData();

setTimeout(() => {
    cont.abort();
}, 100)