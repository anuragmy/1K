import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { ChangeEvent, useState } from "react";

const { Option } = Select;

const SearchJobs: React.FC<FuncProps> = (props: FuncProps) => {
  const [searchType, setSearchType] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    props.searchData(searchType, e.target.value);

  const selectBefore = (
    <Select
      defaultValue="name"
      className="select-before"
      onChange={(val: string) => setSearchType(val)}
    >
      <Option value="name">Search By company name</Option>
      <Option value="desc">Search By description</Option>
    </Select>
  );

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Input
        addonBefore={selectBefore}
        defaultValue=""
        placeholder="Enter Text"
        onChange={handleChange}
        style={{ width: "90%" }}
      />

      <Button
        shape="circle"
        type="primary"
        icon={<ArrowUpOutlined />}
        onClick={() => props.sortBy("asc")}
      />
      <Button
        shape="circle"
        type="primary"
        icon={<ArrowDownOutlined />}
        onClick={() => props.sortBy("desc")}
      />
    </div>
  );
};

export default SearchJobs;
