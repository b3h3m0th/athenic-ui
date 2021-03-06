import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, ReactElement } from "react";
import { Avatar } from "../../Avatar";
import { CommentAuthor } from "../types/CommentTypes";
import "./Comment.scss";

export interface CommentProps {
  author: CommentAuthor;
  text: string;
  likes?: number;
  dislikes?: number;
  onLike?: () => void;
  onDislike?: () => void;
  onReply?: () => void;
  style?: CSSProperties;
  className?: string;
  children?: ReactElement<CommentProps> | Array<ReactElement<CommentProps>>;
}

const Comment: React.FC<CommentProps> = ({
  style,
  className,
  author,
  text,
  likes,
  dislikes,
  onLike,
  onDislike,
  onReply,
  children,
}: CommentProps) => {
  return (
    <div
      className={`comment ${className ? className : ""}`}
      style={style ? style : null}
    >
      <Avatar
        size="medium"
        image={author.avatar ? author.avatar : null}
        link={author.link ? author.link : null}
      />
      <div className="comment__wrapper">
        <div>
          <a href={author.link} className="comment__wrapper__author">
            {author.name}
          </a>
        </div>
        <div className="comment__wrapper__text">{text}</div>
        <div className="comment__wrapper__actions">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="comment__wrapper__actions__like"
            onClick={() => onLike && onLike()}
          />
          {likes ? (
            <span className="comment__wrapper__actions__like-count">
              {likes}
            </span>
          ) : null}
          <FontAwesomeIcon
            icon={faThumbsDown}
            className="comment__wrapper__actions__like"
            onClick={() => onDislike && onDislike()}
          />
          {dislikes ? (
            <span className="comment__wrapper__actions__like-count">
              {dislikes}
            </span>
          ) : null}
          <span
            className="comment__wrapper__actions__reply"
            onClick={() => onReply && onReply()}
          >
            Reply
          </span>
        </div>
        <div className="comment__wrapper__replies">{children && children}</div>
      </div>
    </div>
  );
};

export default Comment;
