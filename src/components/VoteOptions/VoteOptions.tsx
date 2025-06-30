import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes.ts";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: number;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button
        onClick={(event) => {
          onVote(event.currentTarget.textContent?.toLowerCase() as VoteType);
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
      {canReset > 0 && (
        <button onClick={onReset} className={`${css.button} ${css.reset}`}>
          Reset
        </button>
      )}
    </div>
  );
}
