import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Avatar, Card, Col, Row, Skeleton, Switch } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useFetchAllOrchid } from "../hook/useFetchOrchidNoPaging";
const { Meta } = Card;

const Dashboard = () => {
  const { OrchidData, orchidLoaded } = useFetchAllOrchid();
  return (
    <div className="px-16">
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        className="flex flex-row items-center "
      >
        {OrchidData &&
          OrchidData.map((orchid) => (
            <Col
              className="gutter-row flex flex-row items-center"
              key={orchid.id}
              xs={{ flex: "100%" }}
              sm={{ flex: "50%" }}
              md={{ flex: "40%" }}
              lg={{ flex: "20%" }}
              xl={{ flex: "10%" }}
            >
              <Card
                hoverable
                style={{ width: 290, marginTop: 16 }}
                cover={
                  orchidLoaded ? (
                    <img alt="example" className="h-[190px]" src={orchid.image} />
                  ) : (
                    <Skeleton.Image active={orchidLoaded} style={{width:290,height:190}}/>
                  )
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Skeleton loading={!orchidLoaded} avatar active>
                  <Meta
                    avatar={<Avatar src={orchid.image} />}
                    title={orchid.name}
                    description={orchid.category.name}
                  />
                </Skeleton>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Dashboard;
