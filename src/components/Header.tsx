import WebsiteCard from "./WebsiteCard";

function Home() {
  const listWebsites = ["Tes 1", "Tes 2", "Tes 3", "Tes 4", "Tes 5"];

  return (
    <>
      <div className="flex w-full h-16 bg-primary drop-shadow-lg items-center">
        <h1 className=" h-6 font-bold text-white font-montserrat ms-4 text-xl">
          WebNest
        </h1>
      </div>

      <div className="flex flex-wrap">
        {listWebsites.map((website, index) => (
          <div className=" h-1/4 w-1/4 bg-primary ms-16 mt-16">
            <WebsiteCard key={index} websiteName={website} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
