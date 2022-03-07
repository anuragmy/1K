import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./api";
import { Container, Grid } from "@material-ui/core";

import SearchJobs from "./components/Search";
import JobsCards from "./components/JobsCards";
import moment from "moment";
import Spinner from "./components/Spinner";
import { Typography } from "antd";
const { Title } = Typography;

const App = () => {
  const [data, setData] = useState<Jobs>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [jobLimit, setLimit] = useState<number>(0);
  const [backup, setBackup] = useState<Jobs>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("");
  console.log(
    "🚀 ~ file: App.tsx ~ line 19 ~ App ~ searchType",
    searchType,
    searchString
  );

  const getData = async (props: any) => {
    const jobs = await fetchData(props);
    setLoading(false);
    setData(jobs?.jobs);
    setBackup(jobs?.jobs);
  };

  useEffect(() => {
    setLoading(true);
    getData({});
  }, []);

  useEffect(() => {
    let time: any;
    const propsToPass: any = {};
    if (searchString.length >= 3) {
      setLoading(true);
      setData([]);
      if (searchType === "name") propsToPass.name = searchString;
      if (searchType === "titledesc") propsToPass.s = searchString;
      if (searchType === "category") propsToPass.category = searchString;
      if (jobLimit) propsToPass.limit = jobLimit;
      time = setTimeout(() => getData(propsToPass), 2000);
    } else if (!searchString.length) {
      setLoading(true);
      getData({});
    }

    return () => clearTimeout(time);
  }, [searchType, searchString]);

  const searchData = (type: string, s: string, limit: number) => {
    console.log("🚀 ~ file: App.tsx ~ line 50 ~ searchData ~ type", type);
    setSearchType(type);
    setSearchString(s);
    setLimit(limit);
  };

  const sortBy = (type: string): void => {
    // eslint-disable-next-line array-callback-return
    const filtered = backup.sort((a, b): any => {
      if (type === "asc")
        return moment(a.publication_date).diff(b.publication_date);
      else if (type === "desc")
        return moment(b.publication_date).diff(a.publication_date);
    });

    setData(filtered);
  };

  return (
    <Container>
      <h1>React Jobs</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchJobs
            searchData={(type, s, limit) => searchData(type, s, limit)}
            sortBy={sortBy}
          />
        </Grid>

        <Grid item xs={12}>
          {loading ? (
            <>
              <Spinner />
              <Spinner />
              <Spinner />
            </>
          ) : (
            <>
              <Title level={2}>Total Jobs found: {data.length} </Title>
              <JobsCards jobs={data} s={searchString} />
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
