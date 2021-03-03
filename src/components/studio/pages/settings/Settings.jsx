import React, { useState } from "react";
import {
  TemplateHeader,
  TemplateContent,
} from "./../../../common/template/Index";
import { Input, Button } from "./../../../common/controls/Index";

const Settings = ({ data }) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: (data && data.name.firstname) || "",
    lastname: (data && data.name.lastname) || "",
    username: (data && data.username) || "",
    email: (data && data.email) || "",
    phone: (data && data.phone) || "",
    city: (data && data.address.city) || "",
    street: (data && data.address.street) || "",
    zipcode: (data && data.address.zipcode) || "",
  });

  const onChange = () => {};
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <TemplateHeader icon="fa fa-cogs" header="settings" />
      <TemplateContent>
        <form onSubmit={onSubmit}>
          <div className="form-group ">
            <Input
              name="username"
              label="User Name"
              value={formData.username}
              error={errors && errors.username}
              placeholder="user name..."
              onChange={onChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <Input
                name="firstname"
                label="First Name"
                value={formData.firstname}
                error={errors && errors.firstname}
                placeholder="first name..."
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <Input
                name="lastname"
                label="Last Name"
                value={formData.lastname}
                error={errors && errors.lastname}
                placeholder="last name..."
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-group ">
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <Input
                name="email"
                label="Email"
                value={formData.email}
                error={errors && errors.email}
                placeholder="someone@gmail.com"
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <Input
                name="phone"
                label="Phone"
                value={formData.phone}
                error={errors && errors.phone}
                placeholder="+0000000"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <Input
                name="city"
                label="City"
                value={formData.city}
                error={errors && errors.city}
                placeholder="city..."
                onChange={onChange}
              />
            </div>

            <div className="form-group col-md-4">
              <Input
                name="street"
                label="Street Name"
                value={formData.street}
                error={errors && errors.street}
                placeholder="street..."
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-4">
              <Input
                name="zipcode"
                label="ZipCode"
                value={formData.zipcode}
                error={errors && errors.zipcode}
                placeholder="zipcode..."
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Active User
              </label>
            </div>
          </div>
          <div style={{ float: "right" }}>
            <Button label="Save Settings" icon="fa fa-save" />
          </div>
        </form>
      </TemplateContent>
    </>
  );
};
export default Settings;
