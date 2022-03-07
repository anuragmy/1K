/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { List, Avatar, Space, Card } from "antd";
import { RightCircleFilled } from "@ant-design/icons";
import { getFormattedDate, showTotal } from "../api";

const JobsCards: React.FC<any | Jobs> = ({ jobs }) => {
  return (
    <List
      itemLayout="vertical"
      size="small"
      pagination={{
        total: jobs.length,
        pageSizeOptions: ["2", "3", "5", "10", "20", "30"],
        showTotal,
        position: "top",
      }}
      dataSource={jobs}
      style={{ margin: "48px 0" }}
      footer={
        <div>
          <b>total Jobs</b> {jobs.length}
        </div>
      }
      renderItem={(item: Job) => (
        <Card
          style={{ margin: "24px 0px", boxShadow: "0 0 5px rgba(0,0,0,0.5)" }}
          bordered
          extra={getFormattedDate(item.publication_date)}
        >
          <List.Item
            key={item.title}
            actions={[
              <a href={item.url} target="_blank">
                <Space>
                  {React.createElement(RightCircleFilled)}
                  "Apply Now"
                </Space>
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.company_logo} />}
              title={<a href={item.url}>{item.company_name}</a>}
              description={item.title}
            />
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
          </List.Item>
        </Card>
      )}
    />
  );
};

export default JobsCards;
