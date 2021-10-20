const words = [
  "academia",
  "acumen",
  "ambiguity",
  "brink",
  "collaborative",
  "collaborator",
  "contributor",
  "conviction",
  "expertise",
  "foster",
  "headhunter",
  "lone wolf",
  "mindset",
  "mitigate",
  "mobilize",
  "newbie",
  "outshine",
  "perception",
  "prioritize",
  "prospective",
  "studied",
  "scary",
  "teamwork",
  "transition"
];
const chinese = [
  "学术界",
  "敏锐，聪明",
  "不明确",
  "始发点，边缘",
  "协作的",
  "协作者",
  "贡献者，撰稿人",
  "坚定的信仰或主张",
  "专业技能，专业知识",
  "促进，培育",
  "猎头",
  "自行其是的人",
  "思维定式",
  "缓和，减轻",
  "动员，发动",
  "新手",
  "优于",
  "看法，认识",
  "使...优先",
  "有前景的，预期的",
  "经过深思熟虑的",
  "可怕的",
  "合作，协作",
  "过渡，转变"
];

const engExplain = [
  "the area of activity and work connected with education in universities and colleges",
  "the ability to think quickly and make good judgments",
  "having more than one meaning, so that it is not clear which is intended",
  "There was an element of ambiguity in the president's reply",
  "a point in time when something very bad or very good is about to happen",
  "involving two or more people working together to achieve sometbing",
  "someone who works with other people in order to achieve something, especially in science or art",
  "someone who writes a story, article, etc, that is printed in a magazine or newspaper",
  "a very strong belief or opinion",
  "special skills or knowledge in a particular subject ",
  " to help a skill, feeling, idea, etc. develop over a period of time ",
  "someone who finds people with the right skills and experience to do particular jobs, and persuades them to leave their present jobs",
  " someone who likes to be or work alone",
  " someone's way of thinking about things, which is often difficult to change ",
  "to make a situation or the effects of something less unpleasant, harmful, or serious",
  "to bring together the supporters, resources, etc. that you need and i prepare them for action",
  " slang one that is new to something, especially using computers or the Internet",
  " to be better at something than someone else",
  "the way you regard something and your beliefs about what it is like",
  "to deal with one thing first, because it is the most important",
  "likely to do a particular thing or achieve a particular position",
  "frightening",
  " a studied way of behaving is deliberate and often insincere because you have planned your behavior carefully ",
  "the ability of a group of people to work well together ",
  "the act or process of changing from one form or state to another"
];
const dictChnToEng = {};
const dictEngToChn = {};
words.forEach((val, key) => {
  dictEngToChn[val] = {};
  dictEngToChn[val].chn = chinese[key];
  dictEngToChn[val].case = engExplain[key];
  dictChnToEng[chinese[key]] = val;
});

export default {
  dictChnToEng,
  dictEngToChn,
  words
};
