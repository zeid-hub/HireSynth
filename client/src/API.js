import { LANGUAGE_VERSIONS } from "./Constant";

const baseURL = "https://emkc.org/api/v2/piston";

export const executeCode = async (language, sourceCode) => {
  try {
    const response = await fetch(`${baseURL}/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: language,
        version: LANGUAGE_VERSIONS[language],
        files: [
          {
            content: sourceCode,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to execute code");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
