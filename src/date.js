import React from "react";
import Invoices from "./routes/invoices";


export function getInvoices() {
    return invoices;
  }
  
  export function getInvoice(number) {
    return invoices.find(
      (invoice) => invoice.number === number
    );
  }