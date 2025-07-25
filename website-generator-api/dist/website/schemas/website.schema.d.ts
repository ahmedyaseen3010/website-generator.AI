import { Document } from 'mongoose';
export type WebsiteDocument = Website & Document;
export declare class Website {
    idea: string;
    sections: {
        name: string;
        content: string;
        order: number;
    }[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const WebsiteSchema: import("mongoose").Schema<Website, import("mongoose").Model<Website, any, any, any, Document<unknown, any, Website, any> & Website & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Website, Document<unknown, {}, import("mongoose").FlatRecord<Website>, {}> & import("mongoose").FlatRecord<Website> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
