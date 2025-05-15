import React, { useContext, useEffect, useState } from "react";
import adminStyles from "./admin.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";
const AdminDashboard = () => {
  const [data, setData] = useState("");
<<<<<<< HEAD
  const navigate = useNavigate(); 
=======
  const [token, setToken] = useContext(store);
  const navigate = useNavigate();
 
>>>>>>> 31c701b739fb5bb53e652654b12b770bd3cb65e9
  return (
    <main>
      <section className={adminStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{data} - Dashboard</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <AdminSidebar />
            </div>
            <div className="col-md-9">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;
