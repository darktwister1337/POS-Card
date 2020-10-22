export default function User(data) {
    this.idVK = data["idVK"];
    this.firstName = data["firstName"];
    this.lastName = data["lastName"];
    this.email = data["email"];
    this.tarif = data["tarif"]; // код тарифа
    this.status = data["status"]; // статус пользователя, студент urfu или член pos (urfu - 49р, pos - 0р)
}