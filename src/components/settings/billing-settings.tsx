import { onGetSubscriptionPlan } from "@/actions/settings";
import React from "react";
import Section from "../section-label";

type Props = {};

const BillingSetting = async (props: Props) => {
  const plan = await onGetSubscriptionPlan();
  return (
    <div>
      <div>
        <Section
          label="Billing setting"
          message="Add payment information, upgrade and modify your plan."
        />
      </div>
    </div>
  );
};

export default BillingSetting;
