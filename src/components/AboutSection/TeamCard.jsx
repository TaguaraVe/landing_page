import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Team = ({ teamData }) => {
  return (
    <div className="relative w-full h-full py-6 overflow-hidden flex flex-col justify-between items-center rounded-2xl cursor-pointer text-center bg-myGreen/30 hover:bg-myGreen/50 ">
      <img
        className="w-[150px] h-[150px] rounded-full object-cover object-center"
        src={teamData.imageURL}
        alt="team1"
      />
      <div className="mt-2">
        <div className="bg-myOrange/50 px-4 w-fit rounded-xl mx-auto uppercase">
          {teamData.name}
        </div>
        <div className="text-sm text-darkBlue">{teamData.job}</div>
      </div>
      <div className=" flex gap-2 text-darkGreen text-xl TeamSocial">
        <li>
          <a
            className="social__link"
            target="_blank"
            rel="noreferrer"
            href={teamData.twitter}
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            className="social__link"
            target="_blank"
            rel="noreferrer"
            href={teamData.github}
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            className="social__link"
            target="_blank"
            rel="noreferrer"
            href={teamData.linkedin}
          >
            <FaLinkedin />
          </a>
        </li>
      </div>
    </div>
  );
};

export default Team;
