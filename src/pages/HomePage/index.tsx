import { useEffect, useMemo } from "react";
import { Button, Space, Table, TableProps } from "antd";

import PageLayout from "../../components/PageLayout";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addPost, deletePost, fetchPosts } from "../../redux/postSlice";
import { IPostUIResponse } from "../../redux/postSlice/index.models";

interface DataType extends IPostUIResponse {
  key: string;
}

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts = [], loading } = useAppSelector(state => state.post);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body"
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <a onClick={() => dispatch(deletePost(record.id))}>Delete</a>
      )
    }
  ];

  const data: DataType[] = useMemo(
    () =>
      posts.map(p => ({
        ...p,
        key: p.id.toString()
      })),
    [posts]
  );

  useEffect(() => {
    // This is for not letting fetch data again to keep existing items
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, []);

  return (
    <PageLayout>
      <Space style={{ marginBottom: 20 }}>
        <Button onClick={() => dispatch(fetchPosts())}>Reload</Button>
        <Button type="primary" onClick={() => dispatch(addPost())}>
          Add Generated Post
        </Button>
      </Space>
      <Table loading={loading} columns={columns} dataSource={data} />
    </PageLayout>
  );
};

export default HomePage;
