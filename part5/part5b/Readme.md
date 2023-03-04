# What I learnt in Part5a 

## Local Storage
localStorage is a web storage object that allows JavaScript sites and apps to keep key-value pairs in a web browser with no expiration date.
* A key is set to the local storage database using the setItem keyword: Example window.localStorage.setItem("key","value")
* A key can be gotten from the local storage database using the getItem keyword: Example window.localStorage.getItem("key")
* A key can be removed from the local local storage database using the removeItem keyword: Example window.localStorage.removeItem('key')
* You need to convert the key-value to JSON using JSON.strignify() before you can save it in the local storage
* You need to convert the key-value to javascript using JSON.parse() if you want to use it
* JSON.Strignify is used to convert a javascript object to JSON
* JSON.parse is used to convert a JSON to javascript object 