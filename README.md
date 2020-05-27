/*  1. User enters http:localhost:5000 in web browser
    2. Web Browser sends HTTP GET to the server located at localhost, on port 5000
    3. Node receives the HTTP GET on port 5000, via express
    4. Express looks up the path (/, or /name, /whatever), and tries to find a route, and if it finds a route, it calls the associated "handler"
    5. ^^ if there is no path found, then:
        Look in server/public for a file
            if we found it: send it back
            if not: send HTTP 404

*/