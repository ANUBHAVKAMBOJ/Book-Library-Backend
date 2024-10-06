import { Genre } from "src/app.constant";
import { AddressDTO } from "src/author/dto/author.dto";

class UserDTO{
    userId: string;
    name: string;
    email: string;
    phoneNumber: string;
    genreInterest: Genre[];
    address: AddressDTO;
    bio: string;
    userFriends: string[];
    authorFriends: string[];
};

export{
    UserDTO
};
