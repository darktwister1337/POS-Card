class User {
    constructor(data) {
        this.idVK = data["idVK"];
        this.firstName = data["firstName"];
        this.lastName = data["lastName"];
        this.email = data["email"];
        this.tarif = data["tarif"]; // код тарифа
        this.status = data["status"]; // статус пользователя, студент urfu или член pos (urfu - 49р, pos - 0р)
        this.favorites = data["favorites"]; // id избранных партнеров (массив)
        this.auth = false; // пользователь авторизован/не авторизован
    }

    addFavorites(id) {
        this.favorites.push(id);
        // TODO добавить в БД нового избранного. Будет вызвана функция из бд
    }
}