import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./api";
import { Container, Grid } from "@material-ui/core";

import SearchJobs from "./components/Search";
import JobsCards from "./components/JobsCards";

const App = () => {
  const [data, setData] = useState<Jobs>([]);
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
    console.log("🚀 ~ file: App.tsx ~ line 36 ~ sortBy ~ type", type);
    // eslint-disable-next-line array-callback-return
    const filtered = data.sort((a, b): any => {
      if (type === "asc")
        return (
          new Date(a.publication_date).valueOf() -
          new Date(b.publication_date).valueOf()
        );
      else if (type === "desc")
        return (
          new Date(b.publication_date).valueOf() -
          new Date(a.publication_date).valueOf()
        );
    });

    setData(filtered);
    console.log("🚀 ~ file: App.tsx ~ line 46 ~ sortBy ~ filtered", filtered);
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
          <JobsCards jobs={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
