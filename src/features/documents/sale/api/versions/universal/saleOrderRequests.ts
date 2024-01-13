import {
  NewSaleOrderParams,
  SaleOrder,
  SaleOrderNewLine,
} from "@features/documents/sale/typesAndData";
import { OdooResponse } from "@shared/types/OdooTypes";
import { AxiosInstance } from "axios";

export async function saleOrderGet({
  instance,
  fields,
  page,
  domain,
}: {
  instance: AxiosInstance;
  fields: string[];
  page: number;
  domain: Array<string | number | string[] | number[]>;
}) {
  const limit = 50;
  const offset = page * limit;
  const response = await instance.post<OdooResponse<SaleOrder[]>>("", {
    params: {
      jsonrpc: "2.0",
      method: "call",
      params: {
        model: "sale.order",
        method: "search_read",
        args: [],
        kwargs: {
          limit: limit,
          fields: [],
          offset: offset,
          domain: [],
          order: "create_date desc",
        },
      },
    },
  });
  if ("error" in response.data) {
    throw new Error(response.data.error.data.message);
  }
  return response.data.result;
}
async function saleOrderMethod({
  instance,
  id,
  method,
}: {
  instance: AxiosInstance;
  id: number;
  method: string;
}) {
  const response = await instance.post<OdooResponse<SaleOrder[]>>("", {
    params: {
      jsonrpc: "2.0",
      method: "call",
      params: {
        model: "sale.order",
        method: method,
        args: [{ document_id: id }],
        kwargs: {},
      },
    },
  });
  if ("error" in response.data) {
    throw new Error(response.data.error.data.message);
  }
  return response.data.result;
}
export async function saleOrderProcess({
  instance,
  id,
}: {
  instance: AxiosInstance;
  id: number;
}) {
  return await saleOrderMethod({
    instance,
    id,
    method: "mobile_process_sale_order",
  });
}

export async function saleOrderCancel({
  instance,
  id,
}: {
  instance: AxiosInstance;
  id: number;
}) {
  return await saleOrderMethod({
    instance,
    id,
    method: "mobile_cancel_sale_order",
  });
}

export async function saleOrderDraft({
  instance,
  id,
}: {
  instance: AxiosInstance;
  id: number;
}) {
  return await saleOrderMethod({
    instance,
    id,
    method: "mobile_set_to_draft_sale_order",
  });
}
export async function createInvoiceFromSaleOrder({
  instance,
  id,
}: {
  instance: AxiosInstance;
  id: number;
}) {
  return await saleOrderMethod({
    instance,
    id,
    method: "mobile_process_invoice",
  });
}

export async function createLines({
  instance,
  id,
  lines,
}: {
  instance: AxiosInstance;
  id: number;
  lines: SaleOrderNewLine[];
}) {
  const response = await instance.post<OdooResponse<SaleOrder[]>>("", {
    params: {
      jsonrpc: "2.0",
      method: "call",
      params: {
        model: "sale.order",
        method: "create_lines_from_mobile_updated",
        args: [{ document_id: id, lines }],
        kwargs: {},
      },
    },
  });
  if ("error" in response.data) {
    throw new Error(response.data.error.data.message);
  }
  return response.data.result;
}

export async function createSaleOrder({
  instance,
  id,
  partner_id,
  warehouse_id,
  requested_date,
  partner_shipping_id,
}: NewSaleOrderParams) {
  const response = await instance.post<OdooResponse<unknown>>("", {
    params: {
      jsonrpc: "2.0",
      method: "call",
      params: {
        model: "sale.order",
        method: "create_lines_from_mobile_updated",
        args: [
          {
            document_id: id,
            partner_id,
            warehouse_id,
            requested_date,
            partner_shipping_id,
          },
        ],
        kwargs: {},
      },
    },
  });
  if ("error" in response.data) {
    throw new Error(response.data.error.data.message);
  }
  return response.data.result;
}
