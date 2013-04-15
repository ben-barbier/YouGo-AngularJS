var server = "http://stormy-everglades-6441.herokuapp.com";

//HTTP Header Authorization OK : "Authorization: Basic a3Jpc3RpbmEuY2h1bmdAY29tcGFueS5jb206cGFzc3dvcmQ="
var HttpBasicLogin = 'kristina.chung@company.com';
var HttpBasicPassword = 'password';
var HttpBasicAuthorization = 'Basic ' + Base64.encode(HttpBasicLogin + ':' + HttpBasicPassword);
