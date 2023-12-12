import { Book, BookInfo } from '../@types'
import '../styles/books-list.css'

interface Props {
	availableBooks: Book[]
	addToSelectedBooks: (book: BookInfo) => void
}

export const BooksList = ({availableBooks, addToSelectedBooks}: Props) => {
	return (
		<section className='library'>
					{availableBooks.map(({book}) => {
						return (
							<article key={book.ISBN} className='card'>
								<figure>
									<img className='book-cover' src={book.cover}  />
								</figure>
								<p>
									{book.title}
								</p>
								<button onClick={() => addToSelectedBooks(book)}>Agregar a la lista</button>
							</article>
						)
					})}
		</section>
	)
}