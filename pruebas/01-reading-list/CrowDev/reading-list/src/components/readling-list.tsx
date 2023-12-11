import { BookInfo } from '../@types';

interface Props {
	selectedBooks: BookInfo[]
	removeBookFromSelected: (book: BookInfo) => void
}

export const ReadingList = ({selectedBooks, removeBookFromSelected}: Props) => {
  return (
    <section>
      {selectedBooks.map((book) => {
        return (
          <article key={book.ISBN}>
            <p>{book.title}</p>
            <img
              className="book-cover"
              src={book.cover}
              onClick={() => removeBookFromSelected(book)}
            />
          </article>
        );
      })}
    </section>
  );
};
