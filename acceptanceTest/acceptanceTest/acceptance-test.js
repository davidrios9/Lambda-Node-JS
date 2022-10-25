function test() {
    const response = {
        statusCode: 0,
        body: JSON.stringify("<h1>Lambda working....</h1>")
    }
    return response;
}

console.log(test());