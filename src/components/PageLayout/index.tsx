import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { motion } from "framer-motion";
import styled from "styled-components";

import { RouteName, RoutePath } from "../../constants/routes";

import { IPageLayoutProps } from "./index.models";

const { Footer, Header, Content } = Layout;

const Paragraph = styled.p`
  font-size: 16px;
  margin: 0;
`;

const items = Object.values(RoutePath).map(val => ({
  key: val,
  label: RouteName[val]
}));

const PageLayout: React.FC<IPageLayoutProps> = props => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={items}
          style={{ flex: 1, minWidth: 0, userSelect: "none" }}
          onClick={e => navigate(e.key)}
        />
      </Header>

      <Content style={{ padding: "20px 48px 0" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {props.children}
          </motion.div>
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        <Paragraph>PicsArt ©{new Date().getFullYear()}</Paragraph>
      </Footer>
    </Layout>
  );
};

export default PageLayout;
