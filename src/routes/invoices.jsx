import React from "react";
import { Link } from "react-router-dom";
import { getInvoices } from "../data";



export default function Invoices() {
    let invoices = getInvoices();
  return (

    <div style={{display: "flex"}}>
    <nav
        style={{
            borderRigth: "solid 1px",
            padding: "1rem",
        }}
    >
    {invoices.map((invoices)=>(
        <Link
        style={{display: "block", margin: "1rem 0"}}
        to={`/invoices/${invoices.number}`}
        key={invoices.number}
        >
        {invoices.name}
        </Link>
    ))}
    </nav>

    </div>
  );
}
