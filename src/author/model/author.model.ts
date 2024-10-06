import { Schema , Model , model } from 'mongoose';
import { Genre , Language } from 'src/app.constant';
import { AuthorDTO } from '../dto/author.dto';

interface AuthorDocument extends AuthorDTO, Document {};

const AuthorSchema : Schema<AuthorDocument> = new Schema<AuthorDocument>({
    authorId: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    genre: {type: [String], enum: Genre, default: []},
    language: {type: [String], enum: Language, default: []},
    books: {type: [String], default: []},
    address: {
        local: {type: String, required: true},
        city: {type: String, required: true},
        country: {type: String, required: true}
    },
    education: [
        {
            degree: {type: String, required: true},
            description: {type: String, default: ""}
        }
    ],
    bio: {type: String, default: ""},
    userFriends: {type: [String], default: []},
    authorFriends: {type: [String], default: []}
});

const AuthorModel: Model<AuthorDocument> = model<AuthorDocument>("AuthorModel", AuthorSchema);

export{
    AuthorModel
};
