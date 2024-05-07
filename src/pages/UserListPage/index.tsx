import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, InputRef, Space, Table, TableProps } from "antd";

import PageLayout from "../../components/PageLayout";
import { RoutePath } from "../../constants/routes";
import { changeParams } from "../../helpers/route";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUsers } from "../../redux/userSlice";

interface DataType {
  key: string;
  name: string;
  age: number;
  email: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Link to={changeParams(RoutePath.UserDetailsPage, { id: record.key })}>
        See Details
      </Link>
    )
  }
];

const UserListPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(state => state.user);
  const inputRef = useRef<InputRef>(null);
  const [query, setQuery] = useState("");

  const data: DataType[] = useMemo(
    () =>
      users
        ?.filter(x => x.firstName.toLowerCase().includes(query))
        .map(p => ({
          key: p.id.toString(),
          name: p.firstName,
          email: p.email,
          age: p.age
        })) ?? [],
    [users, query]
  );

  const onSearch = () => {
    setQuery(inputRef.current?.input?.value.toLowerCase() ?? "");
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <PageLayout>
      <Space style={{ marginBottom: 20 }}>
        <Input ref={inputRef} placeholder="Search by Name" />
        <Button onClick={onSearch}>Search</Button>
      </Space>

      <Table columns={columns} dataSource={data} />
    </PageLayout>
  );
};

export default UserListPage;
