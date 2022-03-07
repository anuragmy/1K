const url = `https://remotive.io/api/remote-jobs?limit=${200}`;


export const fetchData = async () => await (await fetch(url)).json();
export const getFormattedDate: any = (date: any) => {
    const d = new Date(date);
    let year = d.getFullYear();
    let month = (1 + d.getMonth()).toString().padStart(2, "0");
    let day = d.getDate().toString().padStart(2, "0");

    return month + "/" + day + "/" + year;
};

export const showTotal = (total: number): string => `Total ${total} items`;
