export default function Category(data) {
    // static listOfCategory = [];
    this.id = data["id"];
    this.name = data["name"];
    this.listOfPartners = data["partners"]; // список партнеров данной категории. Массив объектов Partner
    Category.listOfCategory.push(this)
}