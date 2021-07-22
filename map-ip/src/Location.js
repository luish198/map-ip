export default function Location(props) {
    return (
      <>
        <h1>{props.heading}</h1>
        <h2>Details....</h2>
        <p>your Ip here...{props.searchResult}</p>
        <p>City...{props.searchResult2}</p>
        <p>region...{props.searchResult3}</p>
        <p>Capital...{props.searchResult4}</p>

      </>
    );
  }
  