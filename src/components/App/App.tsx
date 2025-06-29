import { useState } from "react";
import css from "./App.module.css";

import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";

import type { Votes, VoteType } from "../../types/votes";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [totalVotes, setTotalVotes] = useState<number>(0);
  const [positiveRate, setPositiveRate] = useState<string>(`${0}%`);

  function handleVote(type: VoteType) {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });

    setTotalVotes(votes.bad + votes.good + votes.neutral);
    setPositiveRate(
      ` ${totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0}%`
    );
  }

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    setTotalVotes(0);
    setPositiveRate(`${0}%`);
  }

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          vot={votes}
          onVote={handleVote}
          onReset={resetVotes}
          canReset={true}
        />
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      </div>
    </>
  );
}

export default App;
