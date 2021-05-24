import React from "react";
import ReactDOM from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import htmlToImage from "node-html-to-image";
import { getLogger } from "../utils/logger";

const HTML = (content: string, style: string) => {
  return `<html><head>${style}</head><body>${content}</body></html>`;
};

const renderer = async (Template: React.FC<any>, kargs: any) => {
  const logger = getLogger();
  const sheet = new ServerStyleSheet();

  try {
    const html = ReactDOM.renderToString(
      sheet.collectStyles(<Template {...kargs} />)
    );
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

    const buffer = await htmlToImage({
      html: HTML(html, styleTags),
    });
    return buffer;
  } catch (error) {
    // handle error
    logger.error(error);
  }
  return undefined;
};

export default renderer;
