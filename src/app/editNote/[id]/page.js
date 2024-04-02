import EditForm from "../../../components/EditForm";

const getData = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/data/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function Home({params}) {
  const {id} = params;
  const {data} = await getData(id);
  const {title, description} = data;
  return (
    <EditForm title={title} description={description} id={id}/>
  );
}