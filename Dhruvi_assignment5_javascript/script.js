
$(document).ready(function () {
   

class ContentItem {
    constructor(id, name, description, genre) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.genre = genre;
    }

    updateContentItem(id, name, description, genre) {
        if (id === this.id) {
            if (name !== null) this.name = name;
            if (description !== null) this.description = description;
            if (genre !== null) this.genre = genre;
        }
    }

    toString() {
        return `
            <div class="content-item-wrapper" id="content-item-${this.id}">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <div>${this.genre}</div>
            </div>
        `;
    }
}


const contentItems = [
    new ContentItem(0, "Cartoon 1", "Shinchan", " Japanese manga and anime series"),
    new ContentItem(1, "Cartoon 2", "Doremon", "Comedy, science fiction "),
    new ContentItem(2, "Cartoon 3", "Barbie", " Petite, tall, and curvy"),
    new ContentItem(3, "Cartoon 4", "Chota bheem", " Hindu mythology"),
    new ContentItem(4, "Cartoon 5", "Ninja Hattori", " Koga and Iga regions"),
];


$(document).ready(function () {
    const $contentItemList = $("#content-item-list");

    contentItems.forEach((item) => {
        const itemHtml = item.toString();
        $contentItemList.append(itemHtml);
    });

   
    $(".content-item-wrapper").css({
        border: "1px solid #000",
        width: "250px",
        padding: "9px",
        margin: "9px auto",
    });
});


});


