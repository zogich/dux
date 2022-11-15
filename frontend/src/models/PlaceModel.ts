import { BaseModel } from '@/models/BaseModel';
import PlaceTypeModel from '@/models/PlaceTypeModel'

export default interface PlaceModel extends BaseModel {
  description?: string;
  type: PlaceTypeModel;
}