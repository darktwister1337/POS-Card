class Category {
    static listOfCategory = [];

    constructor(data) {
        this.id = data["id"];
        this.name = data["name"];
        this.listOfPartners = data["partners"]; // список партнеров данной категории. Массив объектов Partner
        Category.listOfCategory.push(this);
    }
}