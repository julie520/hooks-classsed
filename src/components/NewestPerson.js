import React, { useEffect } from "react";

const NewestPerson = ({ newestPerson: { firstName, lastName } }) => {
  useEffect(() => {
    const newestPersonName = `${firstName} ${lastName}`;
    document.title = newestPersonName;
    console.log("useEffect");
    return () => {
      console.log("Unmounted");
    };
  }, [firstName, lastName]);
  return (
    <div className="col col-sm-12">
      <h2 className="mt-4 text-center">
        Newest Person: {`${firstName} ${lastName}`}
      </h2>
    </div>
  );
};

export default NewestPerson;
