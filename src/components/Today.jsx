import React, { useState, useEffect } from "react";
import piket from "../assets/utils/daftarPiket";
// import axios from "axios";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/id";
dayjs.locale("id");
dayjs.extend(localizedFormat);

const Today = () => {
  const [time, setTime] = useState(dayjs().locale("id").format("LTS"));
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    detik();
  }, []);

  const detik = () => {
    setInterval(() => {
      setTime(dayjs().locale("id").format("LTS"));
    }, 1000);
  };

  let i = 1;
  const sekarang = dayjs().locale("id").format("LLLL");
  const hari = dayjs().locale("id").format("dddd").toUpperCase();
  const jam = parseInt(dayjs().locale("id").format("LT"));

  // const user = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/users");
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="mt-28">
      <h1 className="font-bold text-3xl text-neutral text-center">Piket Hari Ini</h1>
      <div className="w-[60%] mx-auto mt-4 max-sm:w-[85%]">
        <p className="text-xl font-semibold text-neutral">{sekarang}</p>
        <p>{time}</p>
        {hari === "JUMAT" || hari === "SABTU" || hari === "MINGGU" ? (
          <h1>Tidak ada yang piket</h1>
        ) : jam > 15 ? (
          <h1>Piket Sudah Selesai</h1>
        ) : jam < 9 ? (
          <h1>Piket belum dimulai</h1>
        ) : (
          piket.map((pkt) => {
            if (pkt.hari.toUpperCase() === hari) {
              return (
                <ul key={pkt.nama} className="mt-4">
                  <li className="font-semibold text-lg">
                    {i++}. {pkt.nama.toUpperCase()}
                  </li>
                  <li>{pkt.waktu}</li>
                </ul>
              );
            }
          })
        )}
      </div>
    </div>
  );
};

export default Today;
