// for hosting apis with deno
import { shavianToLatin } from "../shavianToLatin/s2l.js";

const requestHandler = async function (request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  console.log(`Received request for ${pathname}`);
  
  if (request.method === "POST") {
    if (pathname === "/api/s2l") {
      // shavian to latin transliteration
      
      // get shavian from body
      const body = await request.json();
      const shavian = body.text;
      
      // get latin from shavian
      const latin = await shavianToLatin(shavian);
      
      // return latin in response
      return new Response(
        JSON.stringify({ text: latin }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      );
    } else if (pathname === "/api/l2s") {
      // latin to shavian transliteration
      
      // not done so don't return anything
    }
  } else if (request.method === "OPTIONS") {
    // handle CORS preflight request
    
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }
  
  return new Response(
    JSON.stringify({ error: "Not Found" }),
    {
      status: 404,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}

Deno.serve(
  {
    port: 8300,
  },
  requestHandler
);