import { usePrivy } from "@privy-io/react-auth";
import { useState } from "react";
import { FaCheck, FaSpellCheck } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { SiGrammarly } from "react-icons/si";

type Props = {};

const Editor = (props: Props) => {
  const { getAccessToken } = usePrivy();
  const [text, setText] = useState<string>();
  const [selectedSentence, setSelectedSentence] = useState<string>();
  const [rephrasedSentence, setRephrasedSentence] = useState<string>();
  const [correctedSentence, setCorrectedSentence] = useState<string>();
  const [spellCheckText, setSpellCheckText] = useState<string>();
  const [grammarcCheckText, setGrammarCheckText] = useState<string>();

  // handle Sentence Selection

  // rephraseSentence

  // addCorrectedSentence

  // check spelling
  const checkSpelling = async (): Promise<void> => {
    try {
      // Add your spelling check logic here
      const response = await fetch("http://localhost:8000/api/spell-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      console.log("Spell check response:", response);
      const responseData = await response.json();
      setSpellCheckText(responseData.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error checking spelling:", error.message);
      } else {
        console.error("An unknown error occurred while checking spelling.");
      }
    }
  };
  // check grammar
  const checkGrammar = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:8000/api/grammarcheck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const responseData = await response.json();
      setGrammarCheckText(responseData.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error checking grammar:", error.message);
      } else {
        console.log("An unknown error occurred while checking grammar.");
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              AI Writing Assistant
            </h2>
            <p className="mb-4 text-gray-600">
              Enhance your writing with our AI-powered tools. Select a sentence
              to rephrase, correct, or check for spelling and grammar errors.
            </p>
            <textarea
              value={text}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setText(e.target.value)
              }
              // onMouseUp={}
              placeholder="Type your text here ....."
              rows={10}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <div className="flex justify-end mt-4 space-x-4">
              <Button icon={<FaSpellCheck />} onClick={checkSpelling}>
                Check Spelling
              </Button>
              <Button icon={<SiGrammarly />}>Check Grammar</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ResultCard
              title="Spell Checked Text"
              text={spellCheckText}
              icon={<FaSpellCheck className="text-green-500" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button = ({ onClick, icon, children }: ButtonProps) => (
  <button
    onClick={onClick}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center space-x-2"
  >
    {icon && <span className="text-lg">{icon}</span>}
    {children}
  </button>
);
interface ResultCardProps {
  title: string;
  text: string | undefined;
  icon: React.ReactNode;
}

const ResultCard = ({ title, text, icon }: ResultCardProps) =>
  text && (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h3>
      <p className="mb-">{text}</p>
      <Button icon={<FaCheck />}>Accept</Button>
    </div>
  );
export default Editor;
