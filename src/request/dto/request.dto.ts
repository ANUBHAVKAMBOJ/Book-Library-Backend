import { RequestStatusEnum } from "../constant/request.constant";

class RequestUserDTO {
    id: string;
    isAuthor: boolean;
};

class RequestStatusDTO {
    status: RequestStatusEnum;
    createdAt: Date;
}

class RequestDTO {
    requestId: string;
    requestor: RequestUserDTO;
    requestee: RequestUserDTO;
    status: RequestStatusDTO[];
};

export {
    RequestDTO
};
