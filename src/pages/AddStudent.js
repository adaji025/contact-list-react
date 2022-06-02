import React from "react";

const AddStudent = () => {
  return (
    <div className="container">
      <h1 className="my-5">Add Student</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="form-group my-4">
              <input type="text" placeholder="Name" className="form-control p-3" />
            </div>
            <div className="form-group my-4">
              <input type="email" placeholder="Emai" className="form-control p-3" />
            </div>
            <div className="form-group my-4">
              <input type="number" placeholder="Phone Number" className="form-control p-3" />
            </div>
            <div className="form-group my-4">
              <input type="submit" value="Add Student" className="form-control p-3 bg-primary text-white fs-5" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
