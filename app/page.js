import StudentsPage from "../components/StudentsPage";
import { Tabs } from "antd"; // 🟢 Tambahkan ini
import "antd/dist/reset.css"; // optional, pastikan style ant design termuat

async function getPosts() {
  const res = await fetch("http://localhost:3000/data/posts.json", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Page() {
  const posts = await getPosts();

  const items = [
    {
      key: "1",
      label: "📘 Daftar Mahasiswa (Data Statis)",
      children: <StudentsPage />,
    },
    {
      key: "2",
      label: "📰 Postingan Terbaru (Server-side)",
      children: (
        <div>
          {posts.map((post) => (
            <div key={post.id} style={{ marginBottom: "20px" }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <hr />
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <main style={{ padding: "20px 40px" }}>
      <h2>🎓 Daftar Mahasiswa & Postingan Terbaru</h2>
      <p>
        Halaman ini menampilkan contoh perbedaan antara pengambilan data statis
        dan dinamis (server-side).
      </p>

      <div className="ant-tabs">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </main>
  );
}
