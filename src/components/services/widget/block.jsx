import { useTranslation } from "next-i18next";
import classNames from "classnames";

export default function Block({ value, label, href, target }) {
  const { t } = useTranslation();

  return (
    <a
      className={classNames(
        "bg-theme-200/50 dark:bg-theme-900/20 rounded m-1 flex-1 flex flex-col items-center justify-center text-center p-1",
        value === undefined ? "animate-pulse" : "",
        "service-block",
      )}
      href={href}
      target={target ?? "_blank"}
      rel="noreferrer"
    >
      <div className="font-thin text-sm">{value === undefined || value === null ? "-" : value}</div>
      <div className="font-bold text-xs uppercase">{t(label)}</div>
    </a>
  );
}
