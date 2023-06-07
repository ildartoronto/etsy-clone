import { Fragment } from "react";
const TextWithLink = ({ textWithLinks }) => {
  // Split the text into parts: with links and without links
  let splittedParts = textWithLinks.split("\n");
  // Remove blank string elements from the array
  let textParts = splittedParts.filter((element) => element !== "");
  // &#39; is the HTML entity for the apostrophe
  // Replace it with the actual apostrophe
  textParts = textParts.map((textPart) => textPart.replace("&#39;", "'"));

  // Create a link for each part that contains a link
  const findLink = () => {
    return textParts.map((textPart, key) => {
      const isLink = textPart.includes("https://");
      return (
        <Fragment key={key}>
          <br />
          {isLink ? <a href={textPart}>{textPart}</a> : <>{textPart}</>}
        </Fragment>
      );
    });
  };

  // Create a link for each part that contains a link
  return <>{findLink()}</>;
};

export default TextWithLink;
