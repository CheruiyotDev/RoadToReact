const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const filteredWords = words.filter(function (word) {
  return word.length > 6;
});

const Filtered = () => {
  return (
    <div>
      <p>{filteredWords}</p>
    </div>
  );
};

export default Filtered;
