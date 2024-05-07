import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Result } from "antd";
import styled from "styled-components";

import PageLayout from "../../components/PageLayout";
import { RoutePath } from "../../constants/routes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUser } from "../../redux/userSlice";

import styles from "./index.module.css";

const Text = styled.h6`
  font-size: 18px;
  margin: 10px 0;
`;

const Span = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

const UserDetailsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user);
  const { id } = useParams();
  const userId = Number(id);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUser(userId));
    }
  }, [userId]);

  return (
    <PageLayout>
      {userId ? (
        <section>
          <Link to={RoutePath.UserListPage}>{"< Back to User List"}</Link>

          <Text>
            Full Name: <Span>{`${user?.firstName} ${user?.lastName}`}</Span>
          </Text>
          <Text>
            Email: <Span>{user?.email}</Span>
          </Text>
          <Text>
            Age: <Span>{user?.age}</Span>
          </Text>
          <Text>
            Address: <Span>{user?.address}</Span>
          </Text>
        </section>
      ) : (
        <Result
          className={styles.container}
          status="warning"
          title="No User Selected"
          subTitle="It seems there is no user selected at the moment. Perhaps you have not clicked on any user yet. Please navigate to the user list and select a user to view their details."
          extra={<Link to={RoutePath.UserListPage}>Go to User List</Link>}
        />
      )}
    </PageLayout>
  );
};

export default UserDetailsPage;
