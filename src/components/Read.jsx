import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <section className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <article className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Detail of User</h3>
        <article className="mb-2">
          <strong>Name:{data.name}</strong>
        </article>
        <article className="mb-2">
          <strong>Email:{data.email}</strong>
        </article>
        <article className="mb-3">
          <strong>Phone:{data.phone}</strong>
        </article>

        <Link to={`/update/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </article>
    </section>
  );
};
export default Read;
