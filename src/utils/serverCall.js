import {END_POINT_URL} from './constants'

export async function genericFetch( method , mainRoute , data = {}) {

    const body = method === 'POST' || method === 'PUT' ? JSON.stringify(data) : null

    const response = await fetch( `${END_POINT_URL}/${mainRoute}` , {
      method: method,
      mode: "cors", 
      cache: "no-cache",
      credentials: "same-origin", 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin' : "*",
        "Access-Control-Allow-Headers":"X-Requested-With"
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body
    });

    return response.json(); 

}