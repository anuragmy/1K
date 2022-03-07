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
  const [backup, setBackup] = useState<Jobs>([]);
  const [searchString, setSearchString] = useState<string>("");

  const getData = async (s: string = "") => {
    const jobs = await fetchData(s);
    setLoading(false);
    setData(jobs?.jobs);
    setBackup(jobs?.jobs);
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  useEffect(() => {
    let time: any;
    if (searchString.length >= 3) {
      setLoading(true);
      setData([]);
      time = setTimeout(() => getData(searchString), 2000);
    } else getData();
    return () => clearTimeout(time);
  }, [searchString]);

  const searchData = (s: string) => setSearchString(s);

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
          <SearchJobs searchData={(s) => searchData(s)} sortBy={sortBy} />
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
