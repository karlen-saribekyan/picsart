import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { motion } from "framer-motion";

import { RouteName, RoutePath } from "../../constants/routes";

//import styled from "styled-components";
import { IPageLayoutProps } from "./index.models";

const { Footer, Header, Content } = Layout;

// const Title = styled.h2`
//   padding: 4em;
//   background: papayawhip;
// `;

const items = Object.values(RoutePath).map(p => ({
  key: p,
  label: RouteName[p]
}));

const PageLayout: React.FC<IPageLayoutProps> = props => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
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
        PicsArt ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default PageLayout;
