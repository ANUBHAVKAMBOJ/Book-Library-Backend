import { Injectable } from "@nestjs/common";
import { BookDTO, FilterDTO } from "../dto/book.dto";
import BookModel from "../model/book.model";
import { convertBookDocToBookDTO } from "../book.helper";

@Injectable()
class BookService {

    // Filters -
    // 1. bookName - [],
    // 2. genre - [],
    // 3. language - [],
    // 4. availability - [],
    // 5. publishOn - [],
    // 6. authorId - [],
    // 7. incorporatedAuthorId - []

    refineFilter (filter: Record<string, any>): FilterDTO {
        for(let key in Object.keys(filter)){
            filter.key = filter.key.split(',');
        }
        return filter;
    }

    getAllBooks (filter: Record<string, any>): BookDTO[] {
        const refinedFilter: FilterDTO = this.refineFilter(filter);

        const queriesBooks: any = BookModel.find(refinedFilter);

        const books: BookDTO[] = queriesBooks.map(book => convertBookDocToBookDTO(book));

        return books;
    }

    getBookById (id: string): BookDTO {
        const queriedBook: any = BookModel.find({_id: id});

        const book: BookDTO = convertBookDocToBookDTO(queriedBook);

        return book;
    }

    createBook (bookData: Record<string, any>): any {
        
    }
};

export default BookService;
