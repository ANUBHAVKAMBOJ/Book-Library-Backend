import { Controller , Get , Post , Param , Query , Body } from '@nestjs/common';
import BookService from '../service/book.service';
import { BookDTO } from '../dto/book.dto';

@Controller('/book')
class BookController{
    constructor (readonly bookService: BookService) {}

    @Get()
    getAllBooks (@Query() filters: Record<string, any>): BookDTO[] {
        return this.bookService.getAllBooks(filters);
    }

    @Get('/:id')
    getBookById (@Param('id') id: string): BookDTO {
        return this.bookService.getBookById(id);
    }

    @Post('/book')
    createBook (@Body() bookData: Record<string, any>): any {

    }
}

export default BookController;
