import { useEffect, useRef, useState } from 'react'
import books from '../../../books.json'
import { Book, BookInfo, Library } from './@types'
import { BooksList } from './components/books-list'
import { ReadingList } from './components/readling-list'
import './styles/app.css'

export const App = () => {

	const [selectedBooks, setSelectedBooks] = useState<BookInfo[]>([])
	const [filterByGenre, setFilterByGenre] = useState<string>('')
	const [filterByPage, setFilterByPage] = useState<number>(0)
	const libraryBooks = useRef<Library>(books)

	useEffect(() => {
		const books = localStorage.getItem('books')
		if (!books) return
		setSelectedBooks(JSON.parse(books))
	}, [])

	const addToSelectedBooks = (book: BookInfo) => {
		const books = [...selectedBooks, book]
		localStorage.setItem('books', JSON.stringify(books))
		setSelectedBooks(books)
	}

	const availableBooks: Book[] =  (
		libraryBooks.current.library.filter(
			({book}) => 
				!selectedBooks.find(selectedBook => selectedBook.ISBN === book.ISBN) &&
				book.genre.toLowerCase().includes(filterByGenre.toLowerCase()) &&
				book.pages > filterByPage
		)
	)

	const removeBookFromSelected = (book: BookInfo) => {
		const newSelected = selectedBooks.filter(selectedBook => selectedBook.ISBN !== book.ISBN)
		localStorage.setItem('books', JSON.stringify(newSelected))
		setSelectedBooks(newSelected)
	}

	return (
		<>
			<header>
				<h1>Librería</h1>
				{/* TODO: filtrar por páginas y por género */}
				<p>{`${availableBooks.length} Libros disponibles`}</p>
				<p>{`${selectedBooks.length} Libros en la lista de lectura`}</p>
				<div>
					<input type="range" min={0} max={3000} onChange={(e) => setFilterByPage(Number(e.target.value))} />
					<input placeholder="Género" onChange={(e) => setFilterByGenre(e.target.value)} />
					{filterByPage}
				</div>
			</header>
			<main>
				<BooksList availableBooks={availableBooks} addToSelectedBooks={addToSelectedBooks} />
				<ReadingList selectedBooks={selectedBooks} removeBookFromSelected={removeBookFromSelected} />
			</main>
		</>
	)
}