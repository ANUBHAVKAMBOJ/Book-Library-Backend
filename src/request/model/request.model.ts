import { Schema , Model , model , Document } from 'mongoose';
import { RequestDTO } from '../dto/request.dto';
import { RequestStatusEnum } from '../constant/request.constant';

interface RequestDocument extends RequestDTO, Document {};

const RequestSchema: Schema<RequestDocument> = new Schema<RequestDocument>({
    requestId: {type: String, required: true},
    requestor: {
        id: {type: String, required: true},
        isAuthor: {type: Boolean, required: true}
    },
    requestee: {
        id: {type: String, required: true},
        isAuthor: {type: Boolean, required: true}
    },
    status: [
        {
            status: {type: String, enum: RequestStatusEnum, required: true},
            createdAt: {type: Date, required: true}
        }
    ]
});

const RequestModel: Model<RequestDocument> = model<RequestDocument>("RequestSchema", RequestSchema);

export {
    RequestModel
};
