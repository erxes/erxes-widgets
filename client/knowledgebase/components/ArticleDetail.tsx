import * as moment from "moment";
import * as React from "react";
import { defaultAvatar } from "../../icons/Icons";
import { __, makeClickableLink, readFile } from "../../utils";
import { IKbArticle } from "../types";
import { BackButton } from "./";

type Props = {
  article: IKbArticle | null;
  goToArticles: () => void;
  incReactionCount: (articleId: string, reactionChoice: string) => void;
};
export default class ArticleDetail extends React.PureComponent<Props> {
  componentDidMount() {
    makeClickableLink(".erxes-article-content a");
  }

  onReactionClick = (articleId: string, reactionChoice: string) => {
    const { incReactionCount } = this.props;

    incReactionCount(articleId, reactionChoice);
  };

  renderReactions() {
    const { article } = this.props;

    if (!article) {
      return null;
    }

    return (article.reactionChoices || []).map((reactionChoice, index) => {
      return (
        <button
          key={index}
          onClick={this.onReactionClick.bind(this, article._id, reactionChoice)}
        >
          {reactionChoice}
        </button>
      );
    });
  }

  render() {
    const { article, goToArticles } = this.props;

    if (!article) {
      return null;
    }

    const {
      author,
      modifiedDate,
      createdDate,
      title,
      summary,
      content
    } = article;

    const authorDetails = author.details || {
      fullName: "",
      avatar: defaultAvatar
    };

    return (
      <div>
        <BackButton
          onClickHandler={goToArticles}
          text={__("Back to articles")}
        />

        <div className="erxes-kb-item detail">
          <h1>{title}</h1>
          <div className="item-meta flex-item">
            <div className="avatars">
              <img
                alt={authorDetails.fullName}
                src={readFile(authorDetails.avatar)}
              />
            </div>
            <div>
              <div>
                {__("Written by")}: <span>{authorDetails.fullName}</span>
              </div>
              <div>
                {modifiedDate ? __("Modified ") : __("Created ")}
                <span>
                  {moment(modifiedDate ? modifiedDate : createdDate).format(
                    "lll"
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="erxes-article-content">
            <p>{summary}</p>
            <p dangerouslySetInnerHTML={{ __html: content }} />
          </div>

          {this.renderReactions()}
        </div>
      </div>
    );
  }
}
