import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Assalam o Alaikum, I'm Humna Imran! 👋</h1>
      <h2 className="text-xl mt-2">A Developer, and Student.</h2>
      
      <ul className="list-disc pl-5 mt-4">
        <li>Student at The University Of Faisalabad</li>
        <li>Studying Artificial Intelligence</li>
        <li>Machine Learning</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">My Consistency Graph:</h2>
      <a href="https://git.io/streak-stats">
        <img
          src="https://streak-stats.demolab.com?user=hamnasz&theme=transparent"
          alt="GitHub Streak"
          className="mt-4"
        />
      </a>
      
      <h2 className="text-2xl font-semibold mt-6 flex items-center">
        🤖 Artificial Intelligence
      </h2>
      <div className="flex flex-wrap gap-2 mt-2">
        <img src="https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white" alt="ChatGPT" />
        <img src="https://img.shields.io/badge/github%20copilot-000000?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot" />
        <img src="https://img.shields.io/badge/Keras-FF0000?style=for-the-badge&logo=keras&logoColor=white" alt="Keras" />
        <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy" />
        <img src="https://badgen.net/badge/matplotlib/MATPLOTLIB?label=&color=black&labelColor=black&icon=https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg" alt="Matplotlib" />
        <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
      </div>
      
      <h2 className="text-2xl font-semibold mt-6 flex items-center">
        🕸️ Web Dev Tools
      </h2>
      <div className="flex flex-wrap gap-2 mt-2">
        {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Bootstrap", "Material UI", "TailwindCSS"].map((tech) => (
          <img
            key={tech}
            src={`https://img.shields.io/badge/${tech.replace(" ", "%20")}-blue?style=for-the-badge&logo=${tech.toLowerCase()}&logoColor=white`}
            alt={tech}
          />
        ))}
      </div>
      
      <h2 className="text-2xl font-semibold mt-6 flex items-center">
        ✏️ Design
      </h2>
      <div className="flex flex-wrap gap-2 mt-2">
        <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white" alt="Canva" />
      </div>
    </div>
  );
};

export default Profile;
