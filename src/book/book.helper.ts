import { BookDTO , IncorporatedBookDTO } from "./dto/book.dto";
import { Genre, Language } from "src/app.constant";
import { Availability, Category } from "./constant/book.constant";

function stringToEnum<T> (enumObj: T, value: string): T | undefined {
    const enumValues: string[] = Object.values(enumObj) as string[];

    if(enumValues.includes(value))
        return (value as T);

    throw new Error(`Error occured in converting string: ${value} to Enum: ${enumObj}`);
}

function convertBookDocToBookDTO (doc): BookDTO {
    const book: BookDTO = {...doc};

    const incorporatedBookData: IncorporatedBookDTO = doc.isIncorporated;
    const genres: Genre[] = doc.genre.map(genre => stringToEnum<Genre>(Object(Genre), genre));
    const category: Category[] = doc.category.map(cat => stringToEnum<Category>(Object(Category), cat));
    const lan: Language = stringToEnum<Language>(Object(Language), doc.language);
    const availability: Availability = stringToEnum<Availability>(Object(Availability), doc.availability);
    const publishedAt: Date = new Date(doc.publishedAt);
    
    book.isIncorporated = incorporatedBookData;
    book.genre = genres;
    book.category = category;
    book.language = lan;
    book.availability = availability;
    book.publishedAt = publishedAt;

    return book;
}

export {
    stringToEnum,
    convertBookDocToBookDTO
}
