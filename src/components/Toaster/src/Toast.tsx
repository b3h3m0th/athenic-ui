import {
  faCheck,
  faExclamation,
  faExclamationTriangle,
  faInfo,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties } from "react";
import { Toaster } from "..";
import { ToastVariant } from "../types/ToasterTypes";
import "./Toast.scss";

export interface ToastProps {
  className?: string;
  style?: CSSProperties;
  variant?: ToastVariant;
  title?: string;
  description?: string;
  icon?: boolean;
  closeIcon?: boolean;
  onClose?: () => void;
  /**
   * @description Do not set this unless you exactly know what you are doing!
   * */
  dangerouslyChangeToastKey?: number;
}

const Toast: React.FC<ToastProps> = ({
  className = "",
  style = {},
  variant = "primary",
  title,
  description,
  icon,
  closeIcon = true,
  onClose,
  dangerouslyChangeToastKey,
}: ToastProps) => {
  return (
    <div className={`toast ${className} ${variant}`} style={style}>
      {title ? (
        <h4 className={`toast__title ${variant}`}>
          {icon ? (
            <FontAwesomeIcon
              className={`toast__title__icon ${variant}`}
              icon={
                variant === "success"
                  ? faCheck
                  : variant === "info"
                  ? faInfo
                  : variant === "warning"
                  ? faExclamationTriangle
                  : faExclamation
              }
            />
          ) : null}
          {title}
          {closeIcon ? (
            <span
              className={`toast__title__close-icon ${variant}`}
              onClick={() => Toaster.despawnToast(dangerouslyChangeToastKey)}
            >
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => onClose && onClose()}
              />
            </span>
          ) : null}
        </h4>
      ) : null}
      {description ? (
        <p
          className={`toast__description ${
            icon ? "with-icon" : "without-icon"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default Toast;
