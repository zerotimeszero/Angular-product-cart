import { Measure } from "./UnitMeasurment";

export interface Product{
    id?: number;
    name: string;
    quantity: number;
    unit_cost: number;
    measure?: Measure; // TODO - delete the "?"
}