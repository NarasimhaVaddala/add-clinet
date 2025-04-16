import React from "react";
import { useAdminHook } from "./AdminHook";
import CountBox from "./components/CountBox";
import ContactedUsers from "./components/ContactedUsers";
import RegisteredUsers from "./components/RegisteredUsers";
import UnregistredUsers from "./components/UnregisteredUsers";

export default function AdminHome() {
  const {
    countData,
    registeredUsers,
    contacts,
    unregistredUsers,
    paidButNotSubmittedUsers,
  } = useAdminHook();

  return (
    <div className="container">
      <div className="mt-5 flex items-center justify-between gap-4 flex-col lg:flex-row">
        {countData?.map((e, index) => (
          <CountBox
            key={index}
            customStyl={e.customStyl}
            title={e.title}
            count={e.count}
            icon={<e.icon size={50} />} // Render the icon dynamically
          />
        ))}
      </div>

      <div className="flex mt-8 gap-4 flex-col lg:flex-row">
        <RegisteredUsers data={registeredUsers} />
        <ContactedUsers contacts={contacts} />
      </div>

      <div className="flex mt-8 gap-4 flex-col lg:flex-row">
        <UnregistredUsers
          data={unregistredUsers}
          title={"Unregistered Users"}
        />
        <UnregistredUsers
          data={paidButNotSubmittedUsers}
          title={"Paid But Not Submitted Users"}
        />
      </div>
    </div>
  );
}
