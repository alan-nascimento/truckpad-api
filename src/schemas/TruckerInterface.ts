import { Document } from 'mongoose'

export default interface TruckerInterface extends Document {
    name: string;
    phone: number;
    birthDate: Date;
    state: string;
    city: string;
    addresses: {
        name: string;
        state: string;
        country: string;
        neighborhood: string;
        city: string;
        streetNumber: number;
        complement: string;
        postalCode: number;
        streetName: string;
    };
    documents: [
        {
            expiresAt?: Date;
            country?: string;
            number?: number;
            docType?: string;
            category?: string;
        },
        {
            country: string;
            number: number;
            docType: string;
        }
    ];
}
