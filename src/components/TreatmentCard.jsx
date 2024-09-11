import React, { useEffect, useState } from "react";

const TreatmentCard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/treatment_data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <article className="w-full  ">
      {data.map((item) => (
        <article key={item.id}>
          <img
            src={item.image}
            alt="The themathic photo"
            width="300"
            height="200"
            className=""
          />
          <h2>{item.title}</h2>
          <h3>{item.subtitle}</h3>
          {/* Split text by newline and render each paragraph separately */}
          {item.text.split("\n").map((paragraph, index) => (
            <p key={index} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </article>
      ))}
    </article>
  );
};

export default TreatmentCard;
