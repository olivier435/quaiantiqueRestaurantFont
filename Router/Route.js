export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
        this.authorize = authorize;
    }
}
/*
[]->tout le monde peut acceder
["disconnected"]-> Réserver au utilisateurs deconnecte
["client"]-> Réserver au utilisateurs avec le role client
["admin"]-> Réserver au utilisateurs avec le role admin
["admin,client"]-> Réserver au utilisateurs avec le role client ou admin
*/

