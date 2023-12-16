import React from "react";

const TambahPiket = () => {
  return (
    <div className="w-full mt-28">
      <div className="flex justify-center">
        <div className="w-[30%] border p-3 max-sm:w-[80%]">
          <h1 className="font-bold text-3xl text-neutral text-center mb-5">
            Form Tambah Daftar Piket
          </h1>
          <form className="">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              name="nama"
              id="nama"
              className="border border-slate-900 rounded-md block w-full text-lg px-3 py-1 mb-4 mt-2"
            />
            <label htmlFor="sesi">Sesi</label>
            <input
              type="text"
              name="sesi"
              id="sesi"
              className="border border-slate-900 rounded-md block w-full text-lg px-3 py-1 mb-4 mt-2"
            />
            <label htmlFor="hari">Hari</label>
            <input
              type="text"
              name="hari"
              id="hari"
              className="border border-slate-900 rounded-md block w-full text-lg px-3 py-1 mb-4 mt-2"
            />
            <button type="submit" className="bg-neutral text-white px-1 py-2 rounded-lg block w-full btn">Tambah</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TambahPiket;
