
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


// const book = getBook(3)

// const{genres} = book

// console.log(genres);


// book



// const[firstgener, secondgener , ...othergener] = genres

// console.log(firstgener, secondgener, othergener);

// console.log(othergener);

// const newGenres = [...genres, "comedie"]

// newGenres

// const UpdatedBook = {...book, moviePublicationDate: "2001-12-19", pages: 12010 }

// UpdatedBook

const getTotalrewivecount = (book) =>{
const goodreads= book.reviews.goodreads?.reviewsCount?? 0
const librarything = book.reviews.librarything?.reviewsCount?? 0
return goodreads + librarything
}


// console.log(getTotalrewivecount(book));


// const books = getbooks();


const books = getBooks()

const titles = books.map(book => book.title)

console.log(titles);

const wantedData = books.map(book => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalrewivecount(book)
}))

wantedData


const longbooks = books.filter(burk => burk.pages > 500 &&  burk.hasMovieAdaptation)

longbooks


const adventure = books.filter(gener => gener.genres.includes("humor")).map(book => book.title)

adventure

const totalPages = books.reduce((prevVal ,pages) => prevVal + pages.pages , 0)

totalPages


 const numbers = [3, 17, 42, 8, 29, 56, 91, 14, 67, 23];
const sortednum = numbers.slice().sort((a,b) => a-b)
sortednum
numbers


const sortedByPages = books.slice().sort((a,b) => a.pages - b.pages)
sortedByPages


const newBook = {
  id: 6,
  title:"Bamses Värld",
  author: "svt"

}

const booksAfterAdd = [...books, newBook]

booksAfterAdd


const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 6)
booksAfterDelete



const booksAfterUpdate = booksAfterDelete.map((book)=> book.id === 1 ? {...book, pages: 1} : book)
booksAfterUpdate