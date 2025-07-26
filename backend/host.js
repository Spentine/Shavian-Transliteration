// for hosting apis with deno

const requestHandler = async function (request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  if (request.method === "GET") {
    if (pathname === "/api/s2l") {
      // shavian to latin transliteration
    }
  }
}

Deno.serve(
  {
    port: 8300,
  },
);