

export const fetchData = async (s: string = '') => {
    const url = `https://remotive.io/api/remote-jobs?search=${s}&limit=${100}`;

    return await (await fetch(url)).json();
}
export const getFormattedDate: any = (date: any) => {
    const d = new Date(date);
    let year = d.getFullYear();
    let month = (1 + d.getMonth()).toString().padStart(2, "0");
    let day = d.getDate().toString().padStart(2, "0");

    return month + "/" + day + "/" + year;
};

export const showTotal = (total: number): string => `Total ${total} items`;
