import { AxiosInstance } from "axios";

export type SaleOrder = {
    id:number;
    name:string;
}
export type SaleOrderNewLine = {
    id:number;
}
export type NewSaleOrderParams = {
    instance: AxiosInstance;
    id: number;
    partner_id: number;
    warehouse_id: number;
    requested_date: number;
    partner_shipping_id: number;
}