const Box = (props) => {
  const { styling, para, text } = props;
  return (
    <div className={styling}>
      <p className="para">{text}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="head">Boxes</h1>
    <div className="boxes">
      <Box styling="small" text="Small" />
      <Box styling="medium" text="Medium" />
      <Box styling="large" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
