var userQuery = (input) => {
    var input = "Search something on google".toLowerCase();
    console.log(input + "\n");
    let result = input.replace(/search|google/gi, "");
    console.log(result);
    return result;
}



setTimeout(() => {
    console.log("2 Seconds Completed");
}, 2000);