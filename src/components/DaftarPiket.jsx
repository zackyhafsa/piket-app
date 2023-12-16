import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import piket from "../assets/utils/daftarPiket";

export const DaftarPiket = () => {
  // const getUsers = async () => {
  //   // const response = await axios.get("http://localhost:5000/users");
  //   // console.log(response.data);
  //   // setUser(response.data);

  //   try {
  //     const response = await axios.get("http://localhost:5000/users");
  //     setUser(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  let id = 1;

  return (
    <>
      <div className="overflow-x-auto w-[60%] mx-auto mt-28 max-sm:w-[80%]">
        <h1 className="text-center font-bold text-3xl text-neutral">Daftar Piket</h1>
        <div className="mt-4">
          <Link to="/add" className="btn btn-neutral">
            Tambah
          </Link>
        </div>
        <table className="table text-lg mt-4">
          <thead>
            <tr>
              <th></th>
              <th>Nama</th>
              <th>Sesi</th>
              <th>Hari</th>
              <th>Waktu</th>
            </tr>
          </thead>
          <tbody className="max-sm:text-">
            {piket.map((pkt) => (
              <tr key={pkt.nama}>
                <td>{id++}</td>
                <td>{pkt.nama}</td>
                <td>{pkt.sesi}</td>
                <td>{pkt.hari}</td>
                <td>{pkt.waktu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
