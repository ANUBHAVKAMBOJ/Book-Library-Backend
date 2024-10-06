import { Category , Availability } from '../constant/book.constant';
import { Genre , Language } from '../../app.constant';

class IncorporatedBookDTO{
    value: boolean;
    authorName?: string;
};

class BookDTO{
    bookId: string;
    ISBNid: string;
    name: string;
    edition: string;
    isIncorporated: IncorporatedBookDTO;
    authorId: string;
    genre: Genre[];
    category?: Category[];
    language: Language;
    availability: Availability;
    publishedAt: Date;
};

class FilterDTO {
    bookName?: string[];
    bookGenre?: string[];
    bookLanguage?: string[];
    bookAvailability?: string[];
    bookPublishOn?: Date[];
};

export{
    BookDTO,
    FilterDTO,
    IncorporatedBookDTO
};
