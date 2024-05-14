
class AudioBook {
    static type = "Audiobook";
    static detailsComponent = "MediaDetails.vue";

    get type() {
        return AudioBook.type;
    }

    wrapperType = '';
    artworkUrl100 = '';
    artistName = '';
    collectionName = '';
    collectionViewUrl = '';
    primaryGenreName = '';


}

class Book {
    static type = "book";
    static detailsComponent = "MediaDetails";

    get type() {
        return Book.type;
    }

    wrapperType = '';
    artistName = '';
    collectionName = '';
    collectionViewUrl = '';

}

class Podcast {
    static type = "Podcast";
    static detailsComponent = "MediaDetails";

    get type() {
        return Podcast.type;
    }

    wrapperType = '';
    artworkUrl100 = '';
    artistName = '';
    collectionName = '';
    collectionViewUrl = '';
    primaryGenreName = '';

}

export { AudioBook, Book, Podcast }