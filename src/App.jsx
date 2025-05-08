import { useState } from "react";


const FeedbackButton = ({label, onClick}) => {
  return <button onClick={onClick}>{label}</button>
};

const StatisticsLine = ({text, value}) => {
  return (
    <div>
      {text}: {value}
    </div>
  );
};

const Statistics = ({good,bad,neutral}) => {
  const total = good + bad + neutral
  if (total ===0) {
    return <div>No feedback given</div>
  };
  const average = ((good - bad) / total).toFixed(1);
  const positivePercentage = ((good / total) * 100).toFixed(1);
  return (
    <section>
      <StatisticsLine text = "Good" value={good}/>
      <StatisticsLine text = "Neutral" value={neutral}/>
      <StatisticsLine text = "Bad" value={bad}/>
      <StatisticsLine text = "Total" value={total}/>
      <StatisticsLine text = "Average" value={average}/>
      <StatisticsLine text = "Positive" value={`${positivePercentage} %`}/>
      
      
    </section>
  )
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  return (
    <section>
      <h1>Give feeback</h1>
      <FeedbackButton label="Good" onClick={() => setGood(good + 1)}/>
      <FeedbackButton label="Neutral" onClick={() => setNeutral(neutral + 1)}/>
      <FeedbackButton label="Bad" onClick={() => setBad(bad + 1)}/>
      
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </section>
  );
};

export default App;

/*
import { useState } from 'react'

const Button = ({label, text}) => {
  return <button onClick={label}>{text}</button>
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const maxVotesIndex = votes.indexOf(Math.max(...votes));
  const anecdoteWithMostVotes = anecdotes[maxVotesIndex];

  if (selected > 7) {
    setSelected(0);
  }
  const handleVote = () => {
    const newVotes = [...votes];
    //console.log(newVotes)
    newVotes[selected] += 1;
    //console.log(newVotes);
    setVotes(newVotes);
  }
  if (Math.max(selected)) {
    
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      
      <Button label ={()=> setSelected(selected + 1)}
      text= "Next anecdote"/>

      <Button label= {handleVote} text= "Vote"/>
      <p>Anecdote has {votes[selected]} votes</p>
      <p>Anecdote with most votes:</p>
      <p>{anecdoteWithMostVotes}</p>
      <p>Has {Math.max(...votes)} votes</p>
    </div>
  )
}

export default App

*/