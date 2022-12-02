import {BaseModel} from '@/models/BaseModel'

export default interface ImageModel extends BaseModel{
    place: number;
    image_url: string;
}