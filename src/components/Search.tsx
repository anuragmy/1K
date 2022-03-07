//import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { ChangeEvent } from "react";

const SearchJobs: React.FC<FuncProps> = (props: FuncProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    props.searchData(e.target.value);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Input defaultValue="" placeholder="Enter Text" onChange={handleChange} />
    </div>
  );
};

export default SearchJobs;
