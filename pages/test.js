import Card from "../components/Card";

export default function TestPage() {
  return (
    <Card
      requiredItem={{
        name: "水",
        amountRequired: 9,
        unit: "L",
        imageURL: "/water.jpg"
      }}
      stockpile={{
        水: [
          {
            amount: 0.5,
            term: "2021-11-28"
          },
          { amount: 1, term: "2021-11-28" }
        ]
      }}
    />
  );
}
