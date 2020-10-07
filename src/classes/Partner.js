class Partner {
    static listOfPartners = [];

    constructor(data) {
        this.id = data["id"];
        this.name = data["name"]; // название компании
        this.sale = data["sale"]; // скидка (короткое описание скидки)
        this.description = data["description"]; // описание предложения
        this.addresses = data["addresses"]; // адреса компании текст
        this.logo = data["logo"]; // ссылка на логотип //TODO прописать адрес и в конец вставить data["logo"]
        Partner.listOfPartners.push(this);
    }
}