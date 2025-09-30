import React from 'react'
import GitHubCalendar from "react-github-calendar";

const github = () => {
  return (
    <div>
      <div className="my-10">
      <h2 className="text-2xl font-bold mb-4">GitHub Contributions</h2>
      <GitHubCalendar username="your-github-username" />
    </div>
    </div>
  )
};

export default github
