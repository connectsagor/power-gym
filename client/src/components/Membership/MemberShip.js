import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useNavigate } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MemberShip = () => {
  const navigate = useNavigate();
  const [formNumber, setFormNumber] = useState(0);
  const handleNext = () => {
    setFormNumber((prev) => prev + 1);
  };

  const handleBack = () => {
    setFormNumber((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormNumber((prev) => prev + 1);
    navigate("/payment");
  };

  const [date, setDate] = useState({ day: "", month: "", year: "" });
  const [gender, setGender] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (!/^\d*$/.test(value)) return;

    setDate((prev) => ({
      ...prev,
      [name]: value.slice(0, name === "year" ? 4 : 2), // Limit length (2 for day/month, 4 for year)
    }));
  };

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <ProgressBar
              formNumber={formNumber}
              func={{ handleBack, handleNext }}
            />
          </div>
        </div>
        <div className="row">
          <form
            onSubmit={handleSubmit}
            className="
        "
            action=""
          >
            <div className="form-box d-flex gap-4">
              <div className="col-md-6">
                <div className="form-group d-flex flex-column my-2">
                  <label htmlFor="name">Full Name</label>
                  <input
                    className="form-control my-2"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-group d-flex flex-column my-2">
                  <label htmlFor="name">Full Name</label>
                  <input
                    className="form-control my-2"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                  />
                </div>
                <label htmlFor="">Date of birth</label>
                <div className="form-group d-flex my-3">
                  <input
                    type="text"
                    name="day"
                    value={date.day}
                    onChange={handleChange}
                    placeholder="DD"
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="month"
                    value={date.month}
                    onChange={handleChange}
                    placeholder="MM"
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="year"
                    value={date.year}
                    onChange={handleChange}
                    placeholder="YYYY"
                    className="form-control"
                  />
                </div>
                <div className="form-group d-flex flex-column my-2">
                  <label htmlFor="adress">Adress Line 1</label>
                  <input
                    className="form-control my-2"
                    type="text"
                    name="adress"
                    placeholder="Adress"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group d-flex flex-column my-2">
                  <label className="block mb-2 text-gray-700">
                    Select Gender:
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="border p-2 rounded w-40"
                  >
                    <option value="">-- Select --</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="form-group d-flex flex-column my-3">
                  <label htmlFor="city">City</label>
                  <input
                    className="form-control my-2"
                    type="text"
                    name="City"
                    placeholder="City"
                  />
                </div>
                <div className="form-group d-flex flex-column my-2">
                  <label htmlFor="post">Post Code</label>
                  <input
                    className="form-control my-2"
                    type="text"
                    name="post"
                    placeholder="Post code"
                  />
                </div>
                <div className="form-group d-flex flex-column my-2">
                  <label htmlFor="region">Region</label>
                  <input
                    className="form-control my-2"
                    type="text"
                    name="region"
                    placeholder="Region"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <input
                className="primary-btn py-2 px-3"
                type="submit"
                value="Next"
              />
            </div>{" "}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemberShip;
