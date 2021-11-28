import Image from "next/image";
import Link from "next/link";

const Card = ({ requiredItem, stockpile }) => {
  const amounts = stockpile[requiredItem.name].map((v) => v.amount);
  const amontTotal = amounts.reduce((v1, v2) => v1 + v2, 0);

  return (
    <div
      className="card"
      style={{
        backgroundColor:
          requiredItem.amountRequired >= amontTotal ? "#ff82b2" : undefined
      }}
    >
      <Image
        src={requiredItem.imageURL}
        className="card-img-top"
        alt="..."
        width={400}
        height={200}
      />{" "}
      <div className="card-body">
        <Link
          href={{
            pathname: "/detail",
            query: {
              ...requiredItem
            }
          }}
        >
          <a>
            <h5 className="card-title">{requiredItem.name}</h5>
          </a>
        </Link>
        <p className="card-text">
          <p>
            必要な量：
            {`${requiredItem.amountRequired}${requiredItem.unit}`}
          </p>
          <p>
            備蓄量：
            {`${amontTotal}${requiredItem.unit}`}
          </p>
        </p>
      </div>
    </div>
  );
};

export default Card;
