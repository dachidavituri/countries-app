import { useParams } from "react-router-dom";

const useLangauge = () => {
  const { lang } = useParams<{ lang: string }>();
  return lang === "ka" || lang === "en" ? lang : "ka";
};
export default useLangauge;
