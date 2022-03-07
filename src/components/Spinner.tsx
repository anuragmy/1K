import { Card, Skeleton } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";

const { Meta } = Card;

export const Spinner = () => {
  return (
    <Card style={{ margin: "16px 0px" }}>
      <Skeleton loading avatar active>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
    </Card>
  );
};

export default Spinner;
