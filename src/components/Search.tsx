//import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Input, InputNumber, Select } from "antd";
import { ChangeEvent, useState } from "react";

const { Option } = Select;

const SearchJobs: React.FC<FuncProps> = (props: FuncProps) => {
  const [searchType, setSearchType] = useState<string>("name");
  const [limit, setLimit] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    props.searchData(searchType, e.target.value, limit);

  const onChange = (val: number) => setLimit(val);

  const selectBefore = (
    <Select
      defaultValue="name"
      className="select-before"
      onChange={(val: string) => setSearchType(val)}
    >
      <Option value="name">Search By company name</Option>
      <Option value="titledesc">Search By title/ Descriptoin</Option>
      <Option value="category">Search By Category</Option>
    </Select>
  );

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Input
        addonBefore={selectBefore}
        defaultValue=""
        placeholder="Enter Text"
        onChange={handleChange}
        style={{ width: "80%" }}
      />
      <InputNumber
        prefix="Limit"
        min={limit}
        max={500}
        defaultValue={3}
        onChange={onChange}
        style={{ width: 100 }}
      />
    </div>
  );
};

export default SearchJobs;
