"use client";

import React from "react";
import CardWithHeader from "../ui/card-with-header";
import { CustomerInfo } from "@/app/hooks/use-cart-store";

type TOrderInformation = {
  formData: CustomerInfo;
  setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
};

const OrderInformation = ({ formData, setFormData }: TOrderInformation) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            placeholder="Type your full name"
            onChange={handleInputChange}
            value={formData.customerName ?? ""}
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerContact">Whatsapp Number </label>
          <input
            type="text"
            id="customerContact"
            name="customerContact"
            placeholder="Type your whatsapp number"
            onChange={handleInputChange}
            value={formData.customerContact ?? ""}
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerAddress">Shipping Address</label>
          <textarea
            id="customerAddress"
            name="customerAddress"
            placeholder="Type your shipping address"
            rows={7}
            onChange={handleInputChange}
            value={formData.customerAddress ?? ""}
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;
