import { BookInfo } from '../@types';
import '../styles/reading-list.css'

interface Props {
	selectedBooks: BookInfo[]
	removeBookFromSelected: (book: BookInfo) => void
}

export const ReadingList = ({selectedBooks, removeBookFromSelected}: Props) => {
  return (
    <section className={`reading-list`}>
      {selectedBooks.map((book) => {
        return (
          <article key={book.ISBN}>
            <img
              className="book-cover-reading"
              src={book.cover}
              onClick={() => removeBookFromSelected(book)}
            />
          </article>
        )
      })}
    </section>
  );
};
