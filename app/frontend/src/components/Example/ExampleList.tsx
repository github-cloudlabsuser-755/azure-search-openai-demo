import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "Whats the purpose of risk assessment for container shipments?",
    "Whats the role of border force staff at uk ports?",
    "What is an Electronic BOL?"
];
// DAVIN TODO - find some more suitable examples for port containers
const GPT4V_EXAMPLES: string[] = [
    "TBC Compare the impact of interest rates and GDP in financial markets.",
    "TBC What is the expected trend for the S&P 500 index over the next five years? Compare it to the past S&P 500 performance",
    "TBC Can you identify any correlation between oil prices and stock market trends?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
