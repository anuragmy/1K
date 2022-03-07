import axios from 'axios'

export const fetchData = async (props: FetchDataProps) => {
    let url = `https://remotive.io/api/remote-jobs?`;
    const { name, category, limit, s } = props;

    const params = {
        company_name: name,
        category,
        search: s,
        limit,
    }

    const res = await axios.get(url, { params });
    return res.data

}
export const getFormattedDate: any = (date: any) => {
    const d = new Date(date);
    let year = d.getFullYear();
    let month = (1 + d.getMonth()).toString().padStart(2, "0");
    let day = d.getDate().toString().padStart(2, "0");

    return month + "/" + day + "/" + year;
};

export const showTotal = (total: number): string => `Total ${total} items`;
