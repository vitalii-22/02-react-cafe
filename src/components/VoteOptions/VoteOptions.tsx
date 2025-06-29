import css from "./VoteOptions.module.css";
import type { Votes, VoteType } from "../../types/votes.ts";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
  vot: Votes;
}

export default function VoteOptions({
  vot,
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button
        onClick={(event) => {
          onVote(event.currentTarget.textContent?.toLowerCase() as VoteType);
          console.log(vot);
        }}
        className={css.button}
      >
        Good
      </button>
      <button
        onClick={(event) =>
          onVote(event.currentTarget.textContent?.toLowerCase() as VoteType)
        }
        className={css.button}
      >
        Neutral
      </button>
      <button
        onClick={(event) =>
          onVote(event.currentTarget.textContent?.toLowerCase() as VoteType)
        }
        className={css.button}
      >
        Bad
      </button>
      <button onClick={onReset} className={`${css.button} ${css.reset}`}>
        Reset
      </button>
    </div>
  );
}
