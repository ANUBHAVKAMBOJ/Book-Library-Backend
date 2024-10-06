import { Schema , Model , model } from 'mongoose';
import { Genre } from 'src/app.constant';
import { UserDTO } from '../dto/user.dto';

interface UserDocument extends UserDTO, Document {};

const UserSchema : Schema<UserDocument> = new Schema<UserDocument>({
    userId: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String, default: ""},
    genreInterest: {type: [String], enum: Genre, default: []},
    address: {
        local: {type: String, required: true},
        city: {type: String, required: true},
        country: {type: String, required: true}
    },
    bio: {type: String, default: ""},
    userFriends: {type: [String], default: []},
    authorFriends: {type: [String], default: []}
});

const UserModel : Model<UserDocument> = model<UserDocument>("UserModel", UserSchema);

export{
    UserModel
};
