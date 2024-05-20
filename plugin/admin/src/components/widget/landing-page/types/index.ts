
export interface AdvertisementForm {
    content: string;
    status: string;
}

export interface AdvertisementEditForm extends AdvertisementForm {
    id: string;
}