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
import Link from "next/link";
const Footer = () => {
  return (
    <Row gutter={16}>
      <div className={styles.footer}>
        <Col span={4}>
          <div className={styles.logo}>
            <Image
              //   loader={myLoader}
              src="/logo.png"
              alt="logo"
              width={250}
              height={220}
            />
          </div>
        </Col>
        <Col span={5}>
          <div className={styles.services}>
            <h3 className={styles.title}>Services</h3>
            <h5>VAS</h5>
            <h5>OutSoucing</h5>
            <h5>Platform</h5>
            <h5>Term</h5>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.contact}>
            <h3 className={styles.title}>Contact</h3>
            <div className={styles.link}>
              <Space size={32}>
                <Link href="https://www.facebook.com/aladintech.co" passHref>
                  <a>
                    <FacebookOutlined />
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a>
                    <LinkedinOutlined />
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a>
                    <TwitterOutlined />
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a>
                    <WhatsAppOutlined />
                  </a>
                </Link>
              </Space>
            </div>
            {/* <Space direction="horizontal" size={128} /> */}
            <h5>
              <Link href="mailto:support@aladintech.co" passHref>
                <span>
                  <span className={styles.icon}>
                    <a>
                      <MailOutlined />
                    </a>
                  </span>
                  Email: support@aladintech.co
                </span>
              </Link>
            </h5>
            <h5>
              <span className={styles.icon}>
                <PhoneOutlined />
              </span>
              Phone: 0988 985 247
            </h5>
          </div>
        </Col>
        <Col span={9}>
          <div className={styles.info}>
            <h3 className={styles.title}>Infomation</h3>

            <h5>
              <span className={styles.icon}>
                <HomeOutlined />
              </span>
              Tầng 4, Tòa nhà Văn phòng HH1 Meco Complex, ngõ 102 Trường Chinh,
              P. Phương Mai, Q. Đống Đa, TP. Hà Nội.
            </h5>
            <h5>
              <span className={styles.icon}>
                <HomeOutlined />
              </span>
              Địa chỉ đăng ký kinh doanh: Số 89/34, Vĩnh Tuy, Hai Bà Trưng, Hà
              Nội
            </h5>
            <h5>
              <span className={styles.icon}>
                <CopyrightCircleOutlined />
              </span>
              Aladin Technology Company, Copyright @2022
            </h5>
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default Footer;
