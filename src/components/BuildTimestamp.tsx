import React from "react";

export enum ETimeStampFormat {
  ISO8601 = "ISO8601",
  DE = "DE",
  US = "US",
  AUTO = "AUTO",
}

interface BuildTimestampProps {
  format?: ETimeStampFormat;
}

const getCountryCode = (locale: string): string => {
  try {
    const parts = locale.split("-");
    const country = parts.pop();
    // Check if country is not undefined and not an empty string
    if (country && country.trim() !== "") {
      return country.toLowerCase();
    }
  } catch (error) {
    console.error("Error extracting country code:", error);
  }
  // Return "xx" as a fallback
  return "xx";
};

const determineAutoFormat = (): ETimeStampFormat => {
  // Assuming ISO format for specific locales known to use it by default.
  // This is a simplification; you might need to adjust based on real-world usage.
  const isoCountries = ["se", "kr", "cn", "jp", "xx"]; // Sweden, Korea, China, Japan, FALLBACK
  const usFormatCountries = [
    "us",
    "ph",
    "ca",
    "sa",
    "au",
    "nz",
    "in",
    "eg",
    "pk",
    "ng",
    "jm",
  ]; // Examples of countries using MM/DD/YYYY

  const country = getCountryCode(navigator.language);

  if (isoCountries.includes(country)) {
    return ETimeStampFormat.ISO8601;
  } else if (usFormatCountries.includes(country)) {
    return ETimeStampFormat.US;
  } else {
    // Defaulting to DE format for all other countries, considering
    // many European, Latin American, and other countries use DD/MM/YYYY
    return ETimeStampFormat.DE;
  }
};

export const BuildTimestamp: React.FC<BuildTimestampProps> = ({
  format = ETimeStampFormat.ISO8601,
}) => {
  const timestamp = process.env.BUILD_TIMESTAMP;
  const className = "project-build-timestamp";

  const formatTimestamp = (
    dateString: string,
    format: ETimeStampFormat
  ): string => {
    // If format is AUTO, determine the most appropriate format
    if (format === ETimeStampFormat.AUTO) {
      format = determineAutoFormat();
    }

    try {
      const date = new Date(dateString);
      switch (format) {
        case ETimeStampFormat.DE: {
          return `${date.getDate().toString().padStart(2, "0")}.${(
            date.getMonth() + 1
          )
            .toString()
            .padStart(
              2,
              "0"
            )}.${date.getFullYear()}, ${date.getHours().toString().padStart(2, "0")}:${date
            .getMinutes()
            .toString()
            .padStart(
              2,
              "0"
            )}:${date.getSeconds().toString().padStart(2, "0")}`;
        }
        case ETimeStampFormat.US: {
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const seconds = date.getSeconds();
          const ampm = hours >= 12 ? "pm" : "am";
          const usHours = hours % 12 || 12;
          return `${usHours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}, ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        }
        case ETimeStampFormat.ISO8601:
        default:
          return dateString;
      }
    } catch (error) {
      return "ERR_BUILDTIMESTAMP";
    }
  };

  if (!timestamp) {
    return <p className={className}>NO_BUILDTIMESTAMP</p>;
  }

  let formattedTimestamp;
  try {
    formattedTimestamp = formatTimestamp(timestamp, format);
  } catch (error) {
    formattedTimestamp = "ERR_BUILDTIMESTAMP";
  }

  return <p className={className}>{formattedTimestamp}</p>;
};

export default BuildTimestamp;
