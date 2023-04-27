interface Book {
    id: number;
    title: string;
    author: string;
    published: Date;
    available: boolean;
  }

  const books: Book[] = [
    {
      id: 1431,
      title: 'Breaking Dawn',
      author: 'Stephanie Meyer',
      published: new Date(2008, 8, 2),
      available: true,
    },
    {
      id: 7662,
      title: 'The Perks of Being a Wallflower',
      author: 'Stephen Chbosky',
      published: new Date(1999, 2, 1),
      available: true,
    },
    {
        id: 5923,
        title: 'Useless Magic: Lyrics and Poems',
        author: 'Florence Welch',
        published: new Date(2018, 7, 5),
        available: false,
      },
      {
        id: 7747,
        title: 'Jane Eyre',
        author: 'Charlotte Bronte',
        published: new Date(1847, 10, 19),
        available: true,
      },
      {
        id: 5121,
        title: 'The Virgin Suicides',
        author: 'Jeffry Eugenides',
        published: new Date(1993),
        available: false,
      },
  ];
  function addBook(book: Book): void {
    books.push(book);
  }
  
  function findBookById(id: number): Book | undefined {
    return books.find((book) => book.id === id);
  }
  
  function updateBook(book: Book): boolean {
    const index = books.findIndex((b) => b.id === book.id);
    if (index !== -1) {
      books[index] = book;
      return true;
    }
    return false;
  }
  
  function removeBook(id: number): boolean {
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);
      return true;
    }
    return false;
  }
  console.log(books);
  addBook({
    id: 7662,
    title: 'The Perks of Being a Wallflower',
    author: 'Stephen Chbosky',
    published: new Date(1999, 2, 1),
    available: true,
  });
  console.log(books);
  console.log(findBookById(5923));
  console.log(removeBook(7741));
  console.log(findBookById(7662));
  console.log(removeBook(1431));
  console.log(findBookById(5121));
const bookToUpdate = findBookById(5121);
if (bookToUpdate) {
  bookToUpdate.title = 'New Title';
  console.log(updateBook(bookToUpdate));
}
  console.log(books);
  