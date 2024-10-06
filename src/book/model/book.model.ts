import { Schema , Model , model , Document } from "mongoose";
import { Category , Availability } from "../constant/book.constant";
import { Genre , Language } from "../../app.constant";
import { BookDTO } from "../dto/book.dto";

interface BookDocument extends BookDTO, Document {};

const BookSchema : Schema<BookDocument> = new Schema<BookDocument>({
    bookId: {type: String, required: true},
    ISBNid: {type: String, required: true},
    name: {type: String, required: true},
    edition: {type: String, required: true},
    isIncorporated: {
        value: {type: Boolean, required: true},
        authorName: {type: String, default: "Incorporated"}
    },
    authorId: {type: String, required: true},
    genre: {type: [String], enum: Genre, required: true},
    category: {type: [String], enum: Category, default: []},
    language: {type: String, enum: Language, required: true},
    availability: {type: String, enum: Availability, required: true},
    publishedAt: {type: Date, required: true}
});

const BookModel : Model<BookDocument> = model<BookDocument>("BookModel", BookSchema);

export default BookModel;
