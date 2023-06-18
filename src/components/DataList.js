import ".././App.css";

function DataList({ nekos }) {
  if (!nekos || !nekos.url) {
    return <div style={{ fontSize: "20px" }}>Please enter correct data!</div>; 
  }

  return (
    <div>
      <img className="image_css" src={nekos.url} alt={"Yo"} />
    </div>
  );
}

export default DataList;
