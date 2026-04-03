import classes from "./Styles/InsightCard.module.css";

export default function InsightCard({ textMessage, data }) {
  return (
    <div className={classes.insightCardContainer}>
      <div style={{ color: "white", fontSize: "1.5rem", fontWeight: 500 }}>
        {textMessage}
      </div>
      <div style={{ color: "white", fontSize: "2.5rem", fontWeight: 700 }}>
        {data}
      </div>
    </div>
  );
}
