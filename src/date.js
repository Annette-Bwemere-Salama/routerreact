import React from "react";
import Invoices from "./routes/invoices";
import Invoice from "./invoice";

export function getInvoices() {
  return invoices;
}

export function getInvoice(number) {
  return invoices.find((invoice) => invoice.number === number);
}
