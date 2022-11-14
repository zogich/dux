import { BaseModel } from '@/models/BaseModel';

export default interface PlaceModel extends BaseModel {
  description?: string;
  type: string;
}