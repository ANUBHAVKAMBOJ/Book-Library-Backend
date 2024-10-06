import { Genre , Language } from '../../app.constant';

interface AddressDTO{
    local: string;
    city: string;
    country: string;
};

interface EducationDTO{
    degree: string;
    description?: string;
}

class AuthorDTO{
    authorId: string;
    name: string;
    email: string;
    phoneNumber: string;
    genre?: Genre[];
    language?: Language[];
    books: string[];
    address: AddressDTO;
    education: EducationDTO[];
    bio?: string;
    userFriends: string[];
    authorFriends: string[];
}

export{
    AddressDTO,
    EducationDTO,
    AuthorDTO
}
