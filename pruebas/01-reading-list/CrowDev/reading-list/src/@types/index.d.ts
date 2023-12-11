export type Library = {
	library: Book[];
}

export type Book = {
	book: BookInfo;
}

export type BookInfo = {
	title:    string;
	pages:    number;
	genre:    string;
	cover:    string;
	synopsis: string;
	year:     number;
	ISBN:     string;
	author:   Author;
}

export type Author = {
	name:       string;
	otherBooks: string[];
}
