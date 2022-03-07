import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./api";
import { Container, Grid } from "@material-ui/core";

import SearchJobs from "./components/Search";
import JobsCards from "./components/JobsCards";
import moment from "moment";

const App = () => {
  const [data, setData] = useState<Jobs>([]);
  const [fdata, setFData] = useState<Jobs>([]);
  const [backup, setBackup] = useState<Jobs>([]);

  const getData = async () => {
    const jobs = await fetchData();
    setData(jobs?.jobs);
    setBackup(jobs?.jobs);
  };

  useEffect(() => {
    getData();
  }, []);

  const searchData = (type: string, s: string) => {
    if (!s) return setData(backup);

    const filtered = data.filter(({ company_name, description }: any) =>
      type === "name"
        ? company_name.toLowerCase().includes(s.toLowerCase())
        : description.toLowerCase().includes(s.toLowerCase())
    );

    setData(filtered);
  };

  const sortBy = (type: string): void => {
    // eslint-disable-next-line array-callback-return
    const filtered = backup.sort((a, b): any => {
      if (type === "asc")
        return moment(a.publication_date).diff(b.publication_date);
      else if (type === "desc")
        return moment(b.publication_date).diff(a.publication_date);
    });

    setFData(filtered);
  };

  return (
    <Container>
      <h1>React Jobs</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchJobs
            searchData={(type, s) => searchData(type, s)}
            sortBy={sortBy}
          />
        </Grid>

        <Grid item xs={12}>
          <JobsCards jobs={fdata.length ? fdata : data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
