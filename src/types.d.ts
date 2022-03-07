interface Job {
    date: string | number | Date;
    id: number,
    url: string,
    title: string,
    company_name: string,
    company_logo: string,
    category: string,
    tags: string[],
    job_type: string,
    publication_date: string,
    candidate_required_location: string,
    salary: string,
    description: string,
    company_logo_url: string,
};

type Jobs = Job[];


interface FuncProps {

    searchData: (type: string, values: string) => void;
    sortBy: (type: string) => void;


}




