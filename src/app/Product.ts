import { UnitMeasurement } from "./UnitMeasurment";

export interface Product{
    id?: number;
    name: string;
    quantity: number;
    unit_cost: number;
    unit_measurement?: UnitMeasurement; // TODO - delete the "?"
}