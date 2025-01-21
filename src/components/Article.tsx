import "./Article.css";
import { ArticleButton } from "./ArticleButton";
import { ArticleDescription } from "./ArticleDescription";
import { Headline } from "./layouts/Headline";
import { ArticleData } from "./types";
import { Tag } from "./ui/Tag";

const Article = ({ article } : { article: ArticleData }) => (
  <div className="Article">
    <Headline text={article.title} />
    <ArticleDescription text={article.description} />
    <p>Tag: <Tag name={article.tag} onClick={() => console.log("clicked tag")} /></p>
    <ArticleButton />
  </div>
);

export default Article;
