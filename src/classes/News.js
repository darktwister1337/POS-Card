class News {
    static listOfNews = [];

    constructor(data) {
        this.id = data["id"];
        this.name = data["name"];
        this.partner = data["partner"];
        this.description = data["description"];
        this.link = data["link"];
        this.pathImg = data["img"]; // ссылка на логотип //TODO прописать адрес и в конец вставить data["logo"]
        News.listOfNews.push(this);
    }
}