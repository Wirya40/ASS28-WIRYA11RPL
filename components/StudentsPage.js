// components/StudentsPage.js
"use client";

import { List, Card } from "antd";

const dataMahasiswa = [
  {
    nama: "Andi Saputra",
    jurusan: "Teknik Informatika",
    angkatan: 2022
  },
  {
    nama: "Budi Rahman",
    jurusan: "Sistem Informasi",
    angkatan: 2021
  },
  {
    nama: "Citra Ayu",
    jurusan: "Manajemen",
    angkatan: 2023
  },
  {
    nama: "Dewi Kartika",
    jurusan: "Akuntansi",
    angkatan: 2020
  },
  {
    nama: "Eko Nugroho",
    jurusan: "Teknik Elektro",
    angkatan: 2024
  }
];

export default function StudentsPage() {
  return (
    <div style={{ marginTop: "20px" }}>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={dataMahasiswa}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.nama}>
              <p>Jurusan: {item.jurusan}</p>
              <p>Angkatan: {item.angkatan}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
