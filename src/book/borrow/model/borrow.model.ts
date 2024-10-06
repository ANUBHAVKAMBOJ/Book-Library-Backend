import { Schema , Model , model , Document } from 'mongoose';
import { BorrowDTO } from '../dto/borrow.dto';

interface BorrowDocument extends BorrowDTO, Document {};

const BorrowSchema : Schema<BorrowDocument> = new Schema<BorrowDocument>({
    borrowId: {type: String, required: true},
    userId: {type: String, required: true},
    bookId: {type: String, required: true},
    from: {type: Date, required: true},
    to: {type: Date, required: true}
});

const BorrowModel: Model<BorrowDocument> = model<BorrowDocument>("BorrowModel", BorrowSchema);

export{
    BorrowModel
};
