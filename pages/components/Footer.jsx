import styles from "./Footer.module.css";
import Image from "next/image";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  MailOutlined,
  WhatsAppOutlined,
  HomeOutlined,
  PhoneOutlined,
  CopyrightCircleOutlined,
} from "@ant-design/icons";
import { Space, Row, Col } from "antd";
const Footer = () => {
  return (
    <Row gutter={16}>
      <div className={styles.footer}>
        <Col span={4}>
          <div className="logo">
            <Image
              //   loader={myLoader}
              src="/logo.png"
              alt="logo"
              width={250}
              height={200}
            />
          </div>
        </Col>
        <Col span={5}>
          <div className={styles.services}>
            <h3>Services</h3>
            <h5>VAS</h5>
            <h5>OutSoucing</h5>
            <h5>Platform</h5>
            <h5>Term</h5>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.contact}>
            <h3>Contact</h3>
            <div>
              <Space size={32}>
                <FacebookOutlined />
                <LinkedinOutlined />
                <TwitterOutlined />
                <WhatsAppOutlined />
              </Space>
            </div>
            <h5>
              <MailOutlined /> Email:  support@aladin.com
            </h5>
            <h5>
              <PhoneOutlined /> Phone: 0988 985 247
            </h5>
          </div>
        </Col>
        <Col span={9}>
          <div className={styles.info}>
            <h3>Infomation</h3>

            <h5>
              <HomeOutlined /> Tầng 4, Tòa nhà Văn phòng HH1 Meco Complex, ngõ
              102 Trường Chinh, P. Phương Mai, Q. Đống Đa, TP. Hà Nội.
            </h5>
            <h5>
              <HomeOutlined /> Địa chỉ đăng ký kinh doanh: Số 89/34, Vĩnh Tuy,
              Hai Bà Trưng, Hà Nội
            </h5>
            <h5>
              <CopyrightCircleOutlined /> Aladin Technology Company, Copyright
              @2022
            </h5>
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default Footer;
