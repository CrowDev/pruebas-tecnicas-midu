import { Book, BookInfo } from '../@types'

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
									<img className='book-cover' src={book.cover} onClick={() => addToSelectedBooks(book)} />
								</figure>
								<p>
									{book.title}
								</p>
							</article>
						)
					})}
		</section>
	)
}