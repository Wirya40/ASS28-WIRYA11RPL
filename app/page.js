"use client";

import React, { useEffect, useState } from "react";
import { Tabs, Table, Spin, Button } from "antd";


async function fetchStudentsStatic() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
  });
  return res.json();
}


async function fetchPostsServerSide() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  return res.json();
}

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loadingStudents, setLoadingStudents] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    loadStudents();
    loadPosts();
  }, []);

  const loadStudents = async () => {
    setLoadingStudents(true);
    const data = await fetchStudentsStatic();
    setStudents(data);
    setLoadingStudents(false);
  };

  const loadPosts = async () => {
    setLoadingPosts(true);
    const data = await fetchPostsServerSide();
    setPosts(data);
    setLoadingPosts(false);
  };

  const studentColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Phone", dataIndex: "phone" },
  ];

  const postColumns = [
    { title: "Title", dataIndex: "title" },
    { title: "Body", dataIndex: "body" },
  ];

  
  const tabItems = [
    {
      key: "1",
      label: "Student List (Static)",
      children: (
        <div>
          <Button onClick={loadStudents} style={{ marginBottom: 15 }}>
            Refresh Static Data
          </Button>

          {loadingStudents ? (
            <Spin size="large" />
          ) : (
            <Table
              rowKey="id"
              dataSource={students}
              columns={studentColumns}
              pagination={false}
            />
          )}
        </div>
      ),
    },
    {
      key: "2",
      label: "Recent Posts (Server Side)",
      children: (
        <div>
          <Button onClick={loadPosts} style={{ marginBottom: 15 }}>
            Refresh Server Data
          </Button>

          {loadingPosts ? (
            <Spin size="large" />
          ) : (
            <Table
              rowKey="id"
              dataSource={posts}
              columns={postColumns}
              pagination={{ pageSize: 5 }}
            />
          )}
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Students & Posts</h1>

      <Tabs defaultActiveKey="1" items={tabItems} />
    </div>
  );
}
